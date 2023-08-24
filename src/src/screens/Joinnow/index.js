import { useEffect, useState } from "react";
import "./Join-Now.css";
import { Link } from "react-router-dom";
import { Row, Col, InputGroup } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { endPoints } from "../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { addData, getAllData } from "../../Utility/API";
import { useNavigate } from "react-router-dom";
import { AiTwotoneEyeInvisible, AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import Toaster from "../../components/Toast";
import Loader from "../../components/Loader";
import { ErrorToast, SuccesToast } from "../../components/Toast/message";
import { FiChevronDown } from "react-icons/fi";
import { FaBullseye } from "react-icons/fa";
import moment from "moment-timezone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Joinnow = () => {
  const titleAr = [
    { name: "Mr", value: "Mr" },
    { name: "Mrs", value: "Mrs" },
  ];

  const [validDate, setValidDate] = useState(true);
  const [validateButton, setValidateButton] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [date, setDate] = useState("");
  const [State, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [SSN, setSSN] = useState("");
  const [address, setAddress] = useState("");
  const [PhNumber, setPhNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoadinig] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setconfirmPasswordShow] = useState(false);
  const [questionArr, setQuestionArr] = useState([]);
  const [secretq, setsecretq] = useState("");
  const [personalres, setPersonalRes] = useState("");
  const [secretq1, setsecretq1] = useState("");
  const [personalres1, setPersonalRes1] = useState("");
  const [statesArr, setStatesArr] = useState([]);
  const [nation, setNation] = useState("");
  const [ageError, setAgeError] = useState(false);
  const navigate = useNavigate();
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const onChange = (e, fieldName) => {
    setError("");
    if (fieldName == "date") {
      let age = getAge(e);

      if (age >= 18) {
        setDate(e);
        setAgeError(false);
      } else {
        setAgeError(true);
        setDate(e);
      }
    } //setDate(e.target.value);
    if (fieldName == "firstname") setfirstName(e.target.value);
    if (fieldName == "lastname") setlastName(e.target.value);
    // if (fieldName == "State") setState(e.target.value);
    if (fieldName == "city") setCity(e.target.value);
    if (fieldName == "SSN") setSSN(e.target.value);
    if (fieldName == "address") setAddress(e.target.value);
    if (fieldName == "PhNumber") {
      if (
        e.target.value.match(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        )
      ) {
        setPhNumber(e.target.value);
      }
    }
    if (fieldName == "zipcode") setZipcode(e.target.value);
    if (fieldName == "title") setTitle(e.target.value);
    if (fieldName == "Username") setUserName(e.target.value);
    if (fieldName == "email") setEmail(e.target.value);
    if (fieldName == "personalres") setPersonalRes(e.target.value);
    if (fieldName == "secquestion") setsecretq(e.target.value);
    if (fieldName == "personalres1") setPersonalRes1(e.target.value);
    if (fieldName == "secquestion1") setsecretq1(e.target.value);
    if (fieldName == "country") setCountry(e.target.value);

    if (fieldName == "nation") setNation(e.target.value);
  };
  useEffect(() => {
    GetPersonalQues();
    GetStates();
  }, []);
  const GetPersonalQues = () => {
    let url = `${endPoints.api.GET_QUESTIONS}`;
    setIsLoadinig(true);
    getAllData(url)
      .then((response) => {
        const { status, data, message } = response;
        setIsLoadinig(false);
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
        setIsLoadinig(false);
      });
  };
  const GetStates = () => {
    let url = `${endPoints.api.STATES}`;
    setIsLoadinig(true);
    getAllData(url)
      .then((response) => {
        const { status, data, message } = response;

        setIsLoadinig(false);
        if (status === "success") {
          let statesKey = [];
          data.map((ele) => {
            ele.label = ele.state_name;
            ele.value = ele.state_id;

            statesKey.push(ele);
          });
          setStatesArr(statesKey);
        } else {
          // alert(message);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoadinig(false);
      });
  };
  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    const checkEmail = validateEmail(Email);
    const checkPassword = validatePassword(password);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    if (date == "") {
      setAgeError(true);
      return;
    } else if (date) {
      let age = getAge(date);

      if (age >= 18) {
        setDate(date);
        setAgeError(false);
      } else {
        setAgeError(true);
        setDate(date);
        return;
      }
    }
    // if (validDate) {
    //   return;
    // }
    // if(!checkEmail){
    //   ErrorToast("Please Enter the valid Email");
    //   return
    //  }
    //  if(!checkPassword){
    //   ErrorToast("Password contains atleast 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
    //   return
    //  }

    //  if(password !== confirmPassword){
    //   ErrorToast("Password and Confirm Password do not match");
    //   return
    // }
    let dob = moment(date).format("YYYY-MM-DD");
    let data = {
      login: userName,
      passwd: password,
      //   title: title,
      //   name: firstname,
      //   surname: lastname,
      email: Email,
      birthDate: dob,

      //   mobile: PhNumber,
      //   nation: nation,
      //   country: country,
      //   city: city,
      //   address: address,
      //   zipCode: zipcode,
      //   sex: title === "Mr" ? "M" : "F",
      //   personalQuestion1: secretq,
      //   personalResponse1: personalres,
      //   personalQuestion2: secretq1,
      //   personalResponse2: personalres1,
      //   ssn: SSN,
    };
    // console.log("data", data);
    let url = `${endPoints.api.SIGNUP}`;
    setIsLoadinig(true);
    await addData(url, data)
      .then((response) => {
        setIsLoadinig(false);

        if (response.data.status === "success") {
          //   ssnValidate(response.data.data);
          setMessage("Succcess");
          debugger
          SuccesToast("User SignUp Created Successfully");
          setTimeout(() => {
           // navigate("/accountCongrats");
            navigate('/accountCongrats', { state: { idUser: response.data.data.idUser, login: response.data.data.login } });
          }, 2000);
        } else {
          setMessage(response.data.message);
          ErrorToast(response.data.message);
        }
      })
      .catch((error) => {
        setIsLoadinig(false);
        ErrorToast("Some Thing Went Wrong Please try again");
        console.error(error);
      });
  };

  const ssnValidate = async (user) => {
    //ssnVerification
    let url = `${endPoints.api.ssnVerification}`;
    let dob = moment(date).format("YYYY-MM-DD");
    const ssnData = {
      accountStrategyId: 785,
      accountId: null,
      userId: user.idUser,
      application: {
        applicationDateTime: moment(new Date()).format("YYYY-MM-DD"), //  "2014-12-31T23:59:59.938Z",
      },
      person: [
        {
          role: "APPLICANT",
          isPrimary: true,
          dateOfBirth: dob,
          emailAddress: Email,
          firstName: firstname, // "Accept",
          lastName: lastname,
          gender: title === "Mr" ? "M" : "F",
          mobilePhoneNumber: PhNumber,
          residentialAddress: [
            {
              addressLine1: address,
              addressLine2: `${city} ${State}`,
              zipPostcode: zipcode,
              currentAddress: true,
              country: country,
            },
          ],
          documents: {
            USA: {
              stateSecurityNumber: {
                number: SSN,
              },
            },
          },
        },
      ],
    };

    await addData(url, ssnData)
      .then((response) => {
        if (response.data.status === "success") {
          // setMessage("Succcess");
          // SuccesToast("User SignUp Created Successfully");
          // setTimeout(() => {
          //   navigate("/login");
          // }, 6000);
        } else {
          // setMessage(response.data.message);
          // ErrorToast(response.data.message);
        }
      })
      .catch((error) => {
        // setIsLoadinig(false);
        // ErrorToast("Some Thing Went Wrong Please try again");
        console.error(error);
      });
  };
  const validateEmail = (value) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(regexEmail)) {
      return false;
    } else {
      return true;
    }
  };
  const validateMobile = (emailAdress) => {
    let regexEmail = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };
  const validateUsername = (value) => {
    let regUsername = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if (value.match(regUsername)) {
      return false;
    } else {
      return true;
    }
  };
  const validateDob = () => {
    if (date) {
      let result = checkDateValidation(date, new Date());
      if (result >= 21) {
      } else {
        console.log("rresult", result);
      }
    }
  };
  const checkDateValidation = (currentDate, userDate) => {
    var diff = (currentDate?.getTime() - userDate?.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  };

  const validatePassword = (value) => {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (value.match(decimal)) {
      return false;
    } else {
      return true;
    }
  };
  const checkConfirmPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  const _onBlurCall = () => {
    let validateFlag =
      validateUsername(userName) ||
      validateEmail(Email) ||
      validatePassword(password);
    setValidateButton(validateFlag);
  };
  return (
    <div>
      <section className="login-page-section">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-12">
            <Toaster></Toaster>
            {isLoading && <Loader spinner={true} visible={isLoading} />}

            <Form
              className="login-form col-md-5"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <h2>Create Your Account</h2>
              <Form.Group className="mb-0" controlId="Username">
                <Form.Label className="my-form-label">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => onChange(e, "Username")}
                  onBlur={_onBlurCall}
                  isInvalid={userName.length > 0 && validateUsername(userName)}
                  required
                  maxLength={14}
                />
                <Form.Control.Feedback type="invalid">
                  {userName.length < 5
                    ? "Username should be 6-14 charachters long"
                    : "Username should be aplhanumeric"}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-0" controlId="Last Name">
                <Form.Label className="my-form-label mt-3">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={Email}
                  onBlur={_onBlurCall}
                  onChange={(e) => onChange(e, "email")}
                  isInvalid={Email.length > 0 && validateEmail(Email)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Email.
                </Form.Control.Feedback>
              </Form.Group>
              <div>
                <Form.Group className="mb-3"></Form.Group>

                <Form.Group controlId="formLastName">
                  <Form.Label className="my-form-label ">
                    Date of Birth
                  </Form.Label>

                  <DatePicker
                    id="dob"
                    name="dob"
                    style={{ width: "100%" }}
                    placeholderText="Date of Birth"
                    className="form-control"
                    selected={date ? new Date(date) : new Date()}
                    onChange={(e) => onChange(e, "date")}
                    showMonthDropdown
                    useShortMonthInDropdown
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={250}
                    autoComplete={"off"}
                    required
                    // minDate={new Date("01-01-1940")}
                    // maxDate={new Date("01-01-2031")}
                  />
                  {ageError && (
                    <Form.Label
                      className="my-form-label"
                      style={{ color: "#dc3545" }}
                    >
                     Age should be more than 18 years. Please enter valid Date of Birth.
                    </Form.Label>
                  )}
                </Form.Group>
              </div>
              <Form.Group className="mb-3 password-box" controlId="PASSWORD">
                <Form.Label className="my-form-label mt-3">Password</Form.Label>
                <Form.Control
                  required
                  placeholder="Create a Password for your Account"
                  type={passwordShow ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={_onBlurCall}
                  maxLength={20}
                  //  isInvalid={password.length > 0 && validatePassword(password)}
                />

                <div
                  className="show-icon"
                  style={{ top: "55px" }}
                  onClick={() => {
                    setPasswordShow(!passwordShow);
                  }}
                >
                 {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
                {/* <Form.Control.Feedback type="invalid">
                Password contains atleast 8 to 20 characters which contain at
                least one lowercase letter, one uppercase letter, one numeric
                digit and special character
              </Form.Control.Feedback> */}
              </Form.Group>
              <div className="login-p">
                Password must contains 8 to 20 characters atleast : 1 lower case
                letter, 1 upper case letter, 1 number and 1 special character.
              </div>
              {/* <div  className="mb-3" >
                  <Form.Check
                    required
                    type="checkbox"
                     label="* I agree to the Terms and Conditions, Privacy Policy and House Rules"
                  />
               
            
                </div> */}
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Check inline    required
                    type="checkbox"/>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="login-p"
                    style={{ 
                      fontSize: "12px",
                      marginLeft: "-10px",
                      marginTop: "4px",
                    }}
                  >
                    * I agree to the{" "}
                  </div>
                  <div className="login-p login-a"
                    style={{ 
                      marginTop: "4px",
                      marginLeft: "4px",
                      marginRight: "4px",
                      textDecoration: "underline", 
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/termsconditions"); //to open new page
                    }}
                  >
                    {"  "}Terms and Conditions,
                  </div>
                  <div className="login-p login-a"
                    style={{
                     
                      marginRight: "4px",
                    }}
                    onClick={() => {
                      navigate("/privacy-policy"); //to open new page
                    }}
                  >
                    Privacy Policy
                  </div>
                  <div className="login-p"
                    style={{
                     
                      fontSize: "12px",
                      marginTop: "4px",
                    }}
                  >
                    {" "}
                    and{" "}
                  </div>
                  <div className="login-p login-a"
                    
                    onClick={() => {
                      navigate("/houserules"); //to open new page
                    }}
                  >
                    House Rules
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Form.Check inline required type="checkbox" />
                </div>
                <div className="login-p"
                  style={{
                   
                    fontSize: "12px",
                    marginLeft: "-10px",
                    marginTop: "4px",
                  }}
                >
                  * I confirm that I am at least 18 years of age and that the
                  information provided is accurate.
                </div>
              </div>
              {/* <Form.Group className="mb-0 flex-div" id="formGridCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="* I confirm that all the information provided is accurate"
              />
            </Form.Group> */}
              {/* <Form.Group className="mb-0 flex-div" id="formGridCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="* I confirm that I am at least 18 years of age and that the information provided is accurate"
                />
              </Form.Group> */}
              {/* <Form.Group className="mb-0 flex-div" id="formGridCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="* I confirm that I am not prohibited from wagering on sports ,am not on an exclusion list.and have not asked to be placed on a self exclusion list in any state"
              />
            </Form.Group> */}
              {/* <Form.Group className="mb-0 flex-div" id="formGridCheckbox">
                  <Form.Check
                    required
                    type="checkbox"
                    label="* I confirm that I am not an employee of Bett Gaming TM nor am I a family member of anyone associated with Bett Gaming TM"
                  />
                </Form.Group> */}
              <div className="user-upload">
                <h3>{error}</h3>
              </div>
              <div className="text-center"> 
              <Button
                variant="primary"
                className="login-btn-form btn btn-primary w-100"
                type="submit"
                disabled={validateButton}
              >
                Join Now
              </Button>
              </div>
              <div className="login-p"
                style={{  fontSize: "12px", marginTop: "10px" }}
              >
                By Clicking "join now" you agree to receiving messages and
                offers from BettDraft.
              </div>
              <span className="login-p"
                style={{
                  
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                If you or someone you know has a gambling problem and wants
                help, call 1-800-522-4700 or chat at 
              </span>
              <span className="login-a"
                style={{
                 
                  marginTop: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  textDecoration: "underline",
                 
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://www.ncpgambling.org/", "_blank"); //to open new page
                }}
              >
                ncpgambling.org
              </span>
              <div className="login-p"
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <span
                  style={{
                    
                    fontSize: "12px",
                  }}
                >
                  Already Have an Account?{" "}
                </span>{" "}
                <span className="login-a mt-0"
                  style={{
                   
                   
                    marginLeft: "4px",
                    marginRight: "4px",
                    textDecoration: "underline",
                   
                    cursor: "pointer",
                    // navigate("/accountCongrats");
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log in Here
                </span>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Joinnow;
