import React, { useEffect, useState } from "react";

import { FiChevronDown } from "react-icons/fi";
// import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import { Form, Button } from "react-bootstrap";
import { addData, getAllData, updateUser } from "../../../Utility/API";
import { endPoints } from "../../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { ErrorToast, SuccesToast } from "../../../components/Toast/message";

import InputGroup from "react-bootstrap/InputGroup";

const AccountLimit = () => {
  const [limit, setLimit] = useState("");
  const [Dailylimit, setDailyLimit] = useState("");
  const [Weeklylimit, setWeeklyLimit] = useState("");
  const [Monthlylimit, setMonthlyLimit] = useState("");
  const maxlimit = 8000;
  const dailylimit = 50;
  const weeklylimit = 300;
  const monthlylimit = 5000;
  const [isLoading, setIsLoadinig] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [activeLimit, setActiveLimit] = useState("2");
  const state = useSelector((state) => state).auth.user;
  const User = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    let url = `${endPoints.api.GetUserLimit}${User?.data?.idUser}`;
    getAllData(url)
      .then((response) => {
        if (response.status === 'success') {
          response.data.type === 1 ? setLimit(response.data?.dailylimit) : response.data.type === 2 ? setLimit(response.data?.weeklylimit) : response.data.type === 3 ? setLimit(response.data?.monthlylimit) : setLimit(response.data?.value)
          setActiveLimit(response.data.type);
          setDailyLimit(response.data?.dailylimit)
          setWeeklyLimit(response.data?.weeklylimit)
          setMonthlyLimit(response.data?.monthlylimit)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Validate = async () => {
    if (activeLimit === "1" && limit < dailylimit) {
      return true;
    } else if (activeLimit === "2" && limit < weeklylimit) {
      return true;
    } else if (activeLimit === "3" && limit < monthlylimit) {
      return true;
    } else {
      activeLimit === "1" ? ErrorToast(`Exceeds Daily Allowed Limit of ${dailylimit}`) : activeLimit === "2" ? ErrorToast(`Exceeds Weekly Allowed Limit of ${weeklylimit}`) : activeLimit === "3" ? ErrorToast(`Exceeds Monthly Allowed Limit of ${monthlylimit}`) : ErrorToast('Error')
      return false;
    }
  };
  const onSubmit = async () => {
    let validate = await Validate();
    if (validate) {
      let data = {
        id_user: state?.data?.idUser,
        value: limit,
        d_user_limit: maxlimit,
        type: activeLimit
      };
      let url = endPoints.api.SetUserLimit;
      addData(url, data)
        .then((response) => {
          if (response.data.status === "success") {
            SuccesToast(response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Toaster></Toaster>

      {isLoading && <Loader spinner={true} visible={isLoading} />}
      <div className="container bg-color">
        <div className="inner-smallspace">
          <div className="row">
            <div className="col-md-4">
              <div className="form-space-r">
                <div className="static-form form-style-2">
                  <Form className="my-form-layout2">
                    <Form.Label className="my-form-label">
                      Required account limit{" "}
                    </Form.Label>

                    <InputGroup
                      style={{
                        marginBottom: '20px'
                      }}
                      onClick={(event) => {
                        setActiveLimit(event.target.value);
                        event.target.value === '1' ? setLimit(Dailylimit) : event.target.value === '2' ? setLimit(Weeklylimit) : event.target.value === '3' ? setLimit(Monthlylimit) : setLimit('')
                      }}
                    >
                      <Button
                        //active={true}
                        variant="outline-secondary"
                        name="daily"
                        value="1"
                        active={activeLimit == "1" ? true : false}
                      >
                        Daily
                      </Button>
                      <Button
                        variant="outline-secondary"
                        // variant="primary"
                        active={activeLimit == "2" ? true : false}
                        name="weekly"
                        value="2"
                      >
                        Weekly
                      </Button>
                      <Button
                        variant="outline-secondary"
                        //variant="primary"
                        active={activeLimit == "3" ? true : false}
                        name="monthly"
                        value="3"
                      >
                        Monthly
                      </Button>
                    </InputGroup>

                    {/* <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
                      <Form.Check
                        required
                        type="checkbox"
                        label="Daily"
                        value={checked1}
                        defaultChecked={checked1}
                        defaultValue={checked1}
                        onChange={() => selectType("1")}
                        // disabled={checked2 || checked3}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
                      <Form.Check
                        required
                        type="checkbox"
                        label="Weekly"
                        value={checked2}
                        onChange={() => setChecked2(!checked2)}
                        // disabled={checked1 || checked3}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
                      <Form.Check
                        required
                        type="checkbox"
                        label="Monthly"
                        value={checked3}
                        onChange={() => setChecked3(!checked3)}
                        // disabled={checked2 || checked1}
                      />
                    </Form.Group>
                 */}
                    <Form.Group className="mb-3" controlId="Email">
                      <Form.Control
                        className="mt-o"
                        type="text"
                        placeholder="Account Limit *"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      className="save-btn mt-4"
                      onClick={onSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLimit;
