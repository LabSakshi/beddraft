import { useState } from "react";
import "./forgotpassword.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { endPoints } from "../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { addData } from "../../Utility/API";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import Toaster from "../../components/Toast";
import { ErrorToast, SuccesToast } from "../../components/Toast/message";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Username, setUSername] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);
  const HandleSubmit = async (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    let data = {
      login: email,
    };
    if (email != "" && validateEmail(email) ) {
      setIsLoading(true);
      let url = `${endPoints.api.FORGOT_PASSWORD}`;
      await addData(url, data)
        .then((response) => {
          
          setIsLoading(false);
          if (response.data.status == "success") {
            SuccesToast(response.data.message);
            setEmail("");
            setUSername("");
          } else {
            ErrorToast(response.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }else{
      ErrorToast('Enter Valid email');
    }
  };
  const validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
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
            className="login-form   col-md-5"
            noValidate
            validated={validated}
            onSubmit={HandleSubmit}
          >
            <h2 className="mb-4">Forgot Password</h2>
            {/* <Form.Group className="mb-3" controlId="Username">
              <Form.Control
                placeholder="Username"
                required
                value={Username}
                onChange={(e) => setUSername(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid Username
              </Form.Control.Feedback>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="EMAIL">
              <Form.Control
                placeholder="EMAIL"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={email.length > 2 ? !validateEmail(email) : false}
              />
              <Form.Control.Feedback type="invalid">
                Please enter valid email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
              <a className="forget-login-a">
                Enter your email and we'll send a link with instructions on how
                to reset your password.
              </a>
            </Form.Group>
            <div className="login-btn-last  mt-5">
              <Button
                className="login-btn-form"
                variant="primary"
                type="submit"
              >
                Send Email
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
