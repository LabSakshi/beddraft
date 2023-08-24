import { useEffect, useState } from "react";
import "./account.css";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { GoVerified } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { AiFillCheckCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import logo from "../../assests/images/DraftlOGO.png";

import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
const AccountVerfication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoadinig] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        dispatch({
            type: Actions.TEST_CASE,
            data: false
          });
      navigate("/accountSuccess");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event) => {};
  return (
    <div>
      <section className="login-page-section">
        <div className="login-form-div">
          <Form
            className="login-form"
            noValidate
            // onSubmit={HandleSubmit}
          >
            <img
              src={logo}
              style={{
                width: "70%",
                height: "44px",
                cursor: "pointer",
                marginLeft: "15px",
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
                color: "white",
              }}
            >
              Thank you. We are verifying your information.
            </label>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color: "white",
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
              <AiOutlineLoading3Quarters
                size={40}
                color="white"
                style={{ marginTop: "11px" }}
              ></AiOutlineLoading3Quarters>
            </div>

            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color: "white",
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
