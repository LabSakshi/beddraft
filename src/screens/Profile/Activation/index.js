import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { endPoints } from "../../../constant/Environment";
import Toaster from "../../../components/Toast";
import { postData } from "../../../Utility/API";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addData } from "../../../Utility/API";
import { ErrorToast } from "../../../components/Toast/message";
import Loader from "../../../components/Loader";
import logo from "../../../assests/images/bdlogo.png";
import "./style.css";
import { Actions } from "../../../redux/Actions/Actions";
const Activation = () => {
  //   const { userId, fwUserId } = useParams();  const state = useSelector((state) => state.auth);
  const state = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const User = state.user?.data;
  const { userName, token } = useParams();
  const dispatch = useDispatch();
  // let params = new URLSearchParams(window.location.search);
  // let userName = params.get("u");
  // let token = params.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    emailVerify();
  }, []);

  const emailVerify = async () => {
    setIsLoading(true);

    let url = `${endPoints.api.activations}/${userName}/${token}`;
    await addData(url)
      .then((response) => {
        setIsLoading(false);
        if (response.data.status === "success") {
          setVerify(true);
        } else {
          ErrorToast(response.data.message);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        ErrorToast("Some Thing Went Wrong Please try again");
        console.error(error);
      });
  };
  return (
    <div>
      <Toaster></Toaster>
      {isLoading && <Loader spinner={true} visible={isLoading} />}
      {verify && (
        <>
          <div>
            <section className="login-page-section">
              <div className="login-form-div">
                <Form className="login-form col-md-5" noValidate  >
                  <img
                    src={logo}
                    style={{
                      width: "60%",
                      height: "44px",
                      cursor: "pointer",
                      marginLeft: "15%",
                    }}
                    alt="BettDraft"
                  />
                  <h2
                    className="mb-4"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    Email Verified
                  </h2>
                  <label
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      color: "#0D3862",
                    }}
                  >
                    Thank you.Your email has been verified.
                  </label>
                  <label
                    style={{
                      color: "#0D3862",
                      marginTop: "10px",
                    }}
                  >
                    <span
                      style={{
                        color: "#0d6efd",
                        textDecoration: "underline",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        dispatch({
                          type: Actions.TEST_CASE,
                          data: true,
                        });

                        navigate("/login");
                      }}
                    >
                      Click here
                    </span>
                    to login and complete your personal details to start
                    entering competitions!
                  </label>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "30px",
                      marginBottom:"10px"
                    }}
                  >
                    <Button
                      variant="primary"
                      type="primary"
                      className="login-btn-form"
                      style={{ width: "100%" ,background:'rgb(13, 56, 98) !important'}}
                      onClick={() => {
                        dispatch({
                          type: Actions.TEST_CASE,
                          data: true,
                        });
                        navigate("/login");
                      }}
                    >
                      Login Now
                    </Button>
                  </div>
                  {/* <div
                    style={{
                      color: "white",
                      fontSize: "12px",
                      marginTop: "10px",
                    }}
                  >
                    If you or someone you know has a gambling problem and wants
                    help, call 1-800-522-4700 or chat at ncpgambling.org
                  </div> */}
                  <span
                style={{
                  color: "#0D3862",
                  fontSize: "15px",
                  marginTop: "15px",
                }}
                className="mt-2"
              >
                If you or someone you know has a gambling problem and wants
                help, call 1-800-522-4700 or chat at 
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                  marginTop: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  textDecoration: "underline",
                  color: "#0d6efd",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://www.ncpgambling.org/", "_blank"); //to open new page
                }}
              >
                ncpgambling.org
              </span>
                </Form>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Activation;
