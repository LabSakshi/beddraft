import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { endPoints } from "../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { addData, getAllData } from "../../Utility/API";
import { AiTwotoneEyeInvisible, AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { ErrorToast, SuccesToast } from "../../components/Toast/message";
import Loader from "../../components/Loader";
import Toaster from "../../components/Toast";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [questionArr, setQuestionArr] = useState([]);
  const [personalres, setPersonalRes] = useState("");
  const [secretq, setsecretq] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let params = new URLSearchParams(window.location.search);
  let token = params.get("token") || "";
  let verification = params.get("verification") || "";
  
  useEffect(() => {
    GetPersonalQues();
  }, []);

  const GetPersonalQues = () => {
    let url = `${endPoints.api.GET_QUESTIONS}`;
    setIsLoading(true);
    getAllData(url)
      .then((response) => {
        const { status, data, message } = response;
        setIsLoading(false);
        if (status === "success") {
          let statesKey = [];
          data.map((ele) => {
            ele.name = ele.question;
            ele.value = ele.question_id;

            statesKey.push(ele);
          });
          setQuestionArr(statesKey);
        } else {
          // alert(message);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const HandleSubmit = async () => {
    let data = {
      password: password,
      token: token,
      personalQuestion:verification == "1" ? secretq : "",
      personalResponse: verification == "1" ? personalres : "",
      //email: email,
    };
    if (password !== confirmPassword) {
      ErrorToast("Password and Confirm Password do not match");
      return;
    }
    if ((secretq == "" || personalres == "" ) && verification == "1") {
      ErrorToast("Please Enter Security Question and Answer");
      return;
    }

    setIsLoading(true);
    let url = `${endPoints.api.Reset_password}`;
    await addData(url, data)
      .then((response) => {
        setIsLoading(false);
        if (response.data.status == "success") {
          SuccesToast("Password Changed Succesfully");
          setConfirmPassword("");
          setPassword("");
          dispatch({
            type: Actions.TEST_CASE,
            data: true,
          });

          navigate("/login");
        } else {
          ErrorToast(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };
  const onChange = (e, fieldName) => {
    if (fieldName == "secquestion") setsecretq(e.target.value);
    if (fieldName == "personalres") setPersonalRes(e.target.value);
  };

  return (
    <div>
      <section className="login-page-section">
        {isLoading && <Loader spinner={true} visible={isLoading} />}
        <Toaster />
        <div className="login-form-div">
          <Form className="login-form">
            <h2 className="mb-4">Reset Password</h2>

            <Form.Group className="mb-3 password-box" controlId="PASSWORD">
              <Form.Label className="my-form-label">Password</Form.Label>
              <Form.Control
                placeholder="Password"
                type={passwordShow ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="show-icon-reset"
                onClick={() => {
                  setPasswordShow(!passwordShow);
                }}
              >
                {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </Form.Group>
            <Form.Group className="mb-3 password-box" controlId="PASSWORD">
              <Form.Label className="my-form-label">
                Confirm Password
              </Form.Label>
              <Form.Control
                placeholder="Confirm Password"
                type={confirmPasswordShow ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                className="show-icon-reset"
                onClick={() => {
                  setConfirmPasswordShow(!confirmPasswordShow);
                }}
              >
                {confirmPasswordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </Form.Group>
           { verification == "1" &&    <>
            <Form.Label className="my-form-label">Security Question</Form.Label>
            <div className="custom-dropdown mb-3">
              <Form.Control
                required
                as="select"
                type="select"
                name="payment_method"
                value={secretq}
                onChange={(e) => onChange(e, "secquestion")}
              >
                <option value="">Select a Security Question</option>
                {questionArr.map((item) => {
                  return <option value={item.value}>{item.name}</option>;
                })}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Select a Security Question
              </Form.Control.Feedback>
              <span className="custom-dropdown-arrow">
                <FiChevronDown />
              </span>
            </div>

            <Form.Group className="mb-3" controlId="Secret question">
              <Form.Label className="my-form-label">Answer</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                required
                placeholder=" Enter the Answer to the selected question"
                value={personalres}
                onChange={(e) => onChange(e, "personalres")}
              />
              <Form.Control.Feedback type="invalid">
                Enter the Answer to the selected question
              </Form.Control.Feedback>
            </Form.Group>
            </>}
            <div className="login-btn-last  mt-5">
              <Button
                className="reset-btn-form"
                variant="primary"
                onClick={HandleSubmit}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
