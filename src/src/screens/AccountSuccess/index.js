import { useEffect, useState } from "react";
import "./success.css";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { GoVerified } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { AiFillCheckCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import logo from "../../assests/images/bdlogo.png";

import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}
const AccountVerfication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [message, setMessage] = useState("");
  const forceUpdate = useForceUpdate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoadinig] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: Actions.TEST_CASE,
        data: true,
      });

      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event) => {};
  return (
    <div>
      <section className="login-page-section">
        <div className="login-form-div">
          <Form
            className="login-form col-md-5"
            noValidate
            // onSubmit={HandleSubmit}
          >
            <img
              src={logo}
              style={{
                // width: "70%",
                height: "44px",
                cursor: "pointer",
                marginLeft: "24%",
              }}
              alt="BettDraft"
            />
            <h2
              className="mb-4"
              style={{
                marginTop: "20px",
              }}
            >
              Account Verification
            </h2>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color: "#0D3862",
              }}
            >
              Thank you. We are verifying your information.
            </label>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color: "#0D3862",
                marginTop: "10px",
              }}
            >
              This should only take a few seconds. You will be redirected to
              BettDraft shortly.
            </label>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "10px",
              }}
            >
              <AiFillCheckCircle
                size={80}
                color="0D3862"
                style={{ marginTop: "11px" }}
              ></AiFillCheckCircle>
            </div>

            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color: "#0D3862",
                marginTop: "10px",
              }}
            >
              If we are unable to verify your information. you will be directed
              to provide a copy of your state ID or passport.
            </label>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default AccountVerfication;
