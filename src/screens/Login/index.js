import { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { endPoints } from "../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { addData } from "../../Utility/API";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AiTwotoneEyeInvisible,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import Toaster from "../../components/Toast";
import Loader from "../../components/Loader";
import {
  // middleCallback,
  // finalCallback,
  decryptUsingAES128,
  clientMob,
  client,
} from "../../Utility/ConfigData";
import { ErrorToast } from "../../components/Toast/message";
import { isMobile } from "react-device-detect";
import { GeoComplyKey } from "../../constant/GeoEnv";

var result = {};
var client1 = null;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoadinig] = useState(false);

  const [userResponse, setUserResponse] = useState({});

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    let data = {
      login: email,
      passwd: password,
    };

    if (email && password) {
      let url = `${endPoints.api.LOGIN_ENDPOINT}`;
      setIsLoadinig(true);
      await addData(url, data)
        .then(async (response) => {
          // console.log(response.data.data.validation);

          if (response.data.status === "success") {
            localStorage.setItem(
              "walletUserId",
              JSON.stringify(response.data.data.account.fwUserId)
            );

            localStorage.setItem("session", response.data.data.sessionId);
            localStorage.setItem("user", JSON.stringify(response.data.data));
            sessionStorage.setItem("user", JSON.stringify(response.data));
            if (response.data.data.validation === "0") {
              // if validation 0 then naviagte verficatoin pageuse vadlaition 1 to check
              dispatch({
                type: Actions.LOGIN,
                data: { user: response.data.data },
              });
              navigate("/verification");
            } else {
              dispatch({
                type: Actions.LOGIN,
                data: { user: response.data.data },
              });

              dispatch({
                type: Actions.TEST_CASE,
                data: false,
              });

              navigate("/");
            }
          } else {
            setIsLoadinig(false);
            setMessage(response.data.message);

            ErrorToast(response.data.message);
          }
        })
        .catch((error) => {
          setIsLoadinig(false);
          ErrorToast("Some Thing Went Wrong Please try again");
          console.error(error);
        });
    }
  };
  return (
    <div>
      <section className="login-page-section">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Toaster />
        </div>

        <div className="login-form-div">
          {isLoading && <Loader spinner={true} visible={isLoading} />}
          <Form
            className="login-form col-md-5"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <h2 className="mb-4">Login</h2>
            <Form.Group className="mb-3" controlId="EMAIL">
              <Form.Control
                required
                placeholder="Email/UserName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 password-box" controlId="PASSWORD">
              <Form.Control
                required
                placeholder="Password"
                type={passwordShow ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div
                className="show-icon"
                onClick={() => {
                  setPasswordShow(!passwordShow);
                }}
              >
                {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
              <Form.Control.Feedback type="invalid">
                Please enter password.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
              <Form.Check
                className="checkbox-content"
                type="checkbox"
                label="Remember my email."
              />
              <a
                onClick={() => navigate("/forgotpassword")}
                className="forget-login-a"
              >
                Forgot your password?
              </a>
            </Form.Group>

            <div className="login-btn-last  mt-5">
              <Button
                className="login-btn-form"
                variant="primary"
                // onClick={HandleSubmit1}
                //onClick={handleSubmit}
                type="submit"
              >
                Login
              </Button>

              <Button
                className="join-btn-form2"
                variant="primary"
                onClick={() => navigate("/join-now")}
              >
                Join Now
              </Button>
            </div>
            <div>
              <p className="login-p">
                BettDraft encourages you to gamble responsibly. For problem
                gambling information and assistance, call the 24-hour
                confidential Problem, Gamblers helpline at 1-800-522-4700 or
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5px",
                    overflow: "visible",
                  }}
                >
                  visit :
                  <a
                    rel="noopener noreferrer"
                    href="https://www.nevadacouncil.org"
                    target="_blank"
                    style={{ marginLeft: "7px" }}
                  >
                    www.whenthefunstops.org
                  </a>
                </p>
              </p>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Login;
