import React, { useState } from "react";
import "./Change-Email.css";
import { FiChevronDown } from "react-icons/fi";
// import { Link } from "react-router-dom";
import Iframe from 'react-iframe'
import { Form, Button } from "react-bootstrap";
import { updateUser } from "../../../Utility/API";
import { endPoints } from "../../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { ErrorToast, SuccesToast } from "../../../components/Toast/message";

const ChangeEmail = () => {
  const [email, SetEmail] = useState(null);
  const [Confirmemail, SetConfirmEmail] = useState(null);
  const [pin, SetPin] = useState(null);
  const [isLoading, setIsLoadinig] = useState(false);
  const state = useSelector((state) => state).auth.user;

  async function onSubmit() {
    if (email == null || Confirmemail == null) {
      return;
    } else if (email === Confirmemail) {
      let data = {
        login: state.login,
        email: email,
        idUser:state.idUser

      };
      let url = `${endPoints.api.UPDATE_EMAIL}`;
      setIsLoadinig(true);
      
      await updateUser(url, data).then((response) => {
        if (response.status == "success") {
        
          SuccesToast(response.message);
        }
        else {
          ErrorToast(response.message);
        }
        setIsLoadinig(false);
      }).catch((err) => {
        console.log(err)
        setIsLoadinig(false);
      })
    } else {
      ErrorToast("Email does not match");
    }
  }
  return (
    <div>
      <Toaster></Toaster>
      {/* <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}
      {isLoading && <Loader spinner={true} visible={isLoading} />}
      {isLoading && <Loader spinner={true} visible={isLoading} />}
      <div className="container bg-color">
        <div className="inner-smallspace">
          <div className="row">
            <div className="col-md-4">
              <div className="form-space-r">
                <div className="static-form form-style-2">
                  <Form className="my-form-layout1">
                    <Form.Group className="mb-3" controlId="Email">
                      <Form.Control
                        className="mt-o"
                        type="text"
                        placeholder="Email *"
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Confirm Email">
                      <Form.Control
                        type="text"
                        placeholder="Confirm Email *"
                        value={Confirmemail}
                        onChange={(e) => SetConfirmEmail(e.target.value)}
                      />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="Pin">
    <Form.Control type="text" placeholder="Pin *" />
  </Form.Group> */}

                    <Button
                      variant="primary"
                      className="save-btn mt-4"
                      onClick={onSubmit}
                    >
                      Change
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

export default ChangeEmail;
