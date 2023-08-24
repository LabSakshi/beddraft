import React, { useState } from "react";
import "./Change-Password.css";
import { FiChevronDown } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { updateUser } from "../../../Utility/API";
import { endPoints } from "../../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { ErrorToast, SuccesToast } from "../../../components/Toast/message";
import {
  AiTwotoneEyeInvisible,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";

const ChangePassword = () => {
  const [oldPass, SetOldPass] = useState(null);
  const [newPass, SetNewPass] = useState(null);
  const [confirmPass, SetConfirmPass] = useState(null);
  const [pin, SetPin] = useState(null);
  const [isLoading, setIsLoadinig] = useState(false);

  const [passwordShow, setPasswordShow] = useState(false);

  const [passwordShow2, setPasswordShow2] = useState(false);

  const [passwordShow3, setPasswordShow3] = useState(false);

  const [validateButton, setValidateButton] = useState(true);

  const state = useSelector((state) => state).auth.user;

  const validatePassword = (value) => {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (value.match(decimal)) {
      return false;
    } else {
      return true;
    }
  };

  // console.log(state);

  const _onBlurCall = () => {
    
    let validateFlag = validatePassword(newPass);
      
    setValidateButton(validateFlag);
  
  };
  
  async function onSubmit() {

    console.log(newPass , confirmPass);

    if (newPass === confirmPass) { 

      let data = {
        idUser: state.idUser,
        login: state.login,
        passwd: newPass,
        oldPasswd: oldPass
      };
      let url = `${endPoints.api.CHANGE_PASS}`;
      setIsLoadinig(true);
      
      await updateUser(url, data).then((response) => {
        if (response.status === "success") {
          setIsLoadinig(false);
          SuccesToast(response.message);
          SetNewPass('');
          SetOldPass('');
          SetConfirmPass('');
        } else {
          ErrorToast(response.message)
          setIsLoadinig(false);
        }
      }).catch((err) => {
        console.log(err)
        setIsLoadinig(false);
      })
    } else {
      ErrorToast("Password and Confirm Password Doesn't Match")
    }
  }
  return (
    <div>
      <Toaster></Toaster>
      {isLoading && <Loader spinner={true} visible={isLoading} />}
      <div className="container bg-color">
        <div className="inner-smallspace">
          <div className="row">
            <div className="col-md-6">
              <div className="form-space-r">
                <div className="static-form form-style-2">
                  <Form className="my-form-layout1">
                    <Form.Group className="mb-3" controlId="Email">
                      <Form.Control
                        className="mt-o"
                        type={passwordShow ? "text" : "password"}
                        placeholder="Old Password"
                        value={oldPass}
                        onChange={(e) => SetOldPass(e.target.value)}
                      />
                        <div
                        className="show-icon2"
                        onClick={() => {
                        setPasswordShow(!passwordShow);
                        }}
                         >
                        {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Confirm Email">
                      <Form.Control
                        type={passwordShow2 ? "text" : "password"}
                        placeholder="New Password"
                        value={newPass}
                        onChange={(e) => SetNewPass(e.target.value)}
                        onBlur={_onBlurCall}
                      />
                        <div
                        className="show-icon2"
                        onClick={() => {
                        setPasswordShow2(!passwordShow2);
                        }}
                         >
                        {passwordShow2 ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </div>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="Confirm Email">
                      <Form.Control
                        type={passwordShow3 ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPass}
                        onChange={(e) => SetConfirmPass(e.target.value)}
                      />
                        <div
                        className="show-icon2"
                        onClick={() => {
                        setPasswordShow3(!passwordShow3);
                        }}
                         >
                        {passwordShow3 ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </div>
                    </Form.Group>

                    <p style={{fontSize:"14px"}}>
                      <b>NOTE :</b> Password must contains 8 to 20 characters at least : 1 lower case letter, 1 upper case letter, 1 number and 1 special character.
                    </p>

                    <Button
                      variant="primary"
                      className="save-btn mt-4"
                      onClick={onSubmit}
                      disabled={validateButton}
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

export default ChangePassword;
