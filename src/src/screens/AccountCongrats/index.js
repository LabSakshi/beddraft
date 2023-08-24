import { useEffect, useState } from "react";

import { Link,useLocation } from "react-router-dom";
import { Row, Col, InputGroup } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { GoVerified } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { AiFillCheckCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import logo from "../../assests/images/bdlogo.png";
import Loader from "../../components/Loader";
import Toaster from "../../components/Toast";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { ErrorToast, SuccesToast } from "../../components/Toast/message";
import { endPoints } from "../../constant/Environment";
import { addData, getAllData } from "../../Utility/API";
import "./style.css"

const AccountCongrats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {state} = useLocation();
  
const { idUser, login } = state; // Read values passed on state

  useEffect(() => {
    const timer = setTimeout(() => {
      //   dispatch({
      //     type: Actions.TEST_CASE,
      //     data: false,
      //   });
      //   navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const resendMail = async ()=>{
    let data = {
      idUser: idUser,
      login: login,
    };


    setIsLoading(true);
    let url = `${endPoints.api.resendMail}`;
    await addData(url, data)
      .then((response) => {
        debugger
        setIsLoading(false);
        if (response.data.status == "success") {
          SuccesToast(response.data.message);

        } else {
          ErrorToast(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }

  const handleSubmit = async (event) => {};
  return (
    <div>
          {isLoading && <Loader spinner={true} visible={isLoading} />}
        <Toaster />

      {/* <section className="login-page-section">
        <div className="login-form-div">
          <Form
            className="login-form col-md-5"
            noValidate
            // onSubmit={HandleSubmit}
          >
            <img
              src={logo}
              style={{
                width: "auto",
                height: "49px",
                cursor: "pointer",
                marginLeft: "22%",
              }}
              alt="BettDraft"
            />
            <h2
              className="mb-4"
              style={{
                marginTop: "20px",
              }}
            >
              Congratulations!
            </h2>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
              }}
            >
              Your account has been created.
            </label>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
              We've sent an email to the email address provided with a link to
              verify your email.
            </label>

            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
              To complete the sign up process, 
             please click the link in the
              email.
            </label>
            <div >
            <span
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
              If you have not received the email, please check you junk or spam
              folder or please
              </span>
              <span
                style={{
                  color:"#0D3862",
                
                  marginTop: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  textDecoration: "underline",
                  color: "#0d6efd",
                  cursor: "pointer",
                }}
                onClick={resendMail}
              >
               click here,
              </span>
              <span
              style={{
                justifyContent: "center",
                display: "flex",
                color:"black",
                color:"#0D3862!important",
                marginTop: "10px",
              }}
            >
              for it resent.
            </span>
            </div>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"black",
                marginTop: "10px",
              }}
            >
              If you have not received the email, please check you junk or spam
              folder or 
              
             
              
              here, for it resent.
            </label>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "40px",
                fontSize: "12px",
              }}
            >
              Already validated your email?
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%",background:'#0D3862' }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log in Here
              </Button>
            </div>
            <div
              style={{
                color:"black",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              If you or someone you know has a gambling problem and wants help,
              call 1-800-522-4700 or chat at ncpgambling.org
            </div>
             <span
                style={{
                  color:"#0D3862",
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                If you or someone you know has a gambling problem and wants
                help, call 1-800-522-4700 or chat at 
              </span>
              <span
                style={{
                 
                  fontSize: "12px",
                  marginTop: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  textDecoration: "underline",
                  color: "#0d6efd",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://www.ncpgambling.org/", "_blank"); 
                }}
              >
                ncpgambling.org
              </span>
          </Form>
        </div>
      </section> */}

      <section className="login-page-section">
        <div className="login-form-div">
          <Form
            className="login-form col-md-5"
            noValidate
            // onSubmit={HandleSubmit}
          >
            <img
              src={logo}
              className="congratslogo"
              style={{
                width: "auto",
                height: "49px",
                cursor: "pointer",
              }}
              alt="BettDraft"
            />
            <h2
              className="mb-4"
              style={{
                marginTop: "20px",
              }}
            >
              Congratulations!
            </h2>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
              }}
            >
              Your account has been created.
            </label>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
              We've sent an email to the email address provided with a link to
              verify your email.
            </label>

            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
              To complete the sign up process, 
             please click the link in the
              email.
            </label>
            <div >
            <span
              style={{
                // justifyContent: "center",
                // display: "flex",
                color:"#0D3862",
                marginTop: "22px",
              }}
            >
              If you have not received the email, please check you junk or spam
              folder or please
              </span>
              <span
                style={{
                  color:"#0D3862",
                
                  marginTop: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  textDecoration: "underline",
                  color: "#0d6efd",
                  cursor: "pointer",
                }}
                onClick={resendMail}
              >
               click here 
              </span>
              <span
              style={{
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
                for it resend.
            </span>
            </div>
            {/* <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"black",
                marginTop: "10px",
              }}
            >
              If you have not received the email, please check you junk or spam
              folder or 
              
             
              
              here, for it resent.
            </label> */}
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "40px",
                fontSize: "14px",
              }}
            >
              Already validated your email?
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%",background:'#0D3862' }}
                onClick={() => {
                  // window.location.reload();
                  navigate("/login");
                }}
              >
                Log in Here
              </Button>
            </div>
            {/* <div
              style={{
                color:"black",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              If you or someone you know has a gambling problem and wants help,
              call 1-800-522-4700 or chat at ncpgambling.org
            </div> */}
             <span
                style={{
                  color:"#0D3862",
                  fontSize: "14px",
                  marginTop: "18px",
                }}
              >
                If you or someone you know has a gambling problem and wants
                help, call 1-800-522-4700 or chat at 
              </span>
              <span
                style={{
                 
                  fontSize: "14px",
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
  );
};

export default AccountCongrats;
