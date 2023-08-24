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
import { AiTwotoneEyeInvisible, AiFillEyeInvisible } from "react-icons/ai";
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

  const [validDate, setValidDate] = useState(true)
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
  const navigate = useNavigate();
  const onChange = (e, fieldName) => {
    setError("");
    if (fieldName == "date") {
      setDate(e)
      if (e) {
        let result = checkDateValidation(e, new Date());
        if (result >= 21) {
          console.log("rresult if", result);
          setValidDate(false)
        } else {
          console.log("rresult else ", result);
          setValidDate(true)
        }
      }
    }; //setDate(e.target.value);
    if (fieldName == "firstname") setfirstName(e.target.value);
    if (fieldName == "lastname") setlastName(e.target.value);
    // if (fieldName == "State") setState(e.target.value);
    if (fieldName == "city") setCity(e.target.value);
    if (fieldName == "SSN") setSSN(e.target.value);
    if (fieldName == "address") setAddress(e.target.value);
    if (fieldName == "PhNumber") {
      if (e.target.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
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
    console.log("datte of bitth", date);
    event.preventDefault();
    const checkEmail = validateEmail(Email);
    const checkPassword = validatePassword(password);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    if (validDate) {
      return;
    }
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
      // type: "string",
      title: title,
      name: firstname,
      surname: lastname,
      email: Email,
      birthDate: dob,

      mobile: PhNumber,
      //state: State,
      nation: nation,
      country: country,
      city: city,
      address: address,
      zipCode: zipcode,
      sex: title === "Mr" ? "M" : "F",
      personalQuestion1: secretq,
      personalResponse1: personalres,
      personalQuestion2: secretq1,
      personalResponse2: personalres1,
      ssn: SSN,
    };
    console.log("data", data);
    let url = `${endPoints.api.SIGNUP}`;
    setIsLoadinig(true);
    await addData(url, data)
      .then((response) => {
        setIsLoadinig(false);

        if (response.data.status === "success") {
          ssnValidate(response.data.data);
          setMessage("Succcess");
          SuccesToast("User SignUp Created Successfully");
          setTimeout(() => {
            navigate("/login");
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
  const validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
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
  const validateUsername = (username) => {
    let regUsername = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if (username.match(regUsername)) {
      return true;
    } else {
      return false;
    }
  }
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

  const validatePassword = (inputtxt) => {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (inputtxt.match(decimal)) {
      return true;
    } else {
      return false;
    }
  };
  const checkConfirmPassword = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <section
        className="login-page-section"
      >
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Toaster></Toaster>
          {isLoading && <Loader spinner={true} visible={isLoading} />}
          <div className="col-md-6">
            <div>
              <Form
                className="join-form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <h2>Create Your Account</h2>

                <Form.Group className="mb-3" controlId="Username">
                  <Form.Label className="my-form-label">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => onChange(e, "Username")}
                    isInvalid={userName.length < 6 ? true : !validateUsername(userName) ? true : false}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {userName.length < 5 ? 'Username should be 6-14 charachters long' : 'Username should be aplhanumeric'}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label className="my-form-label">Title</Form.Label>
                  <div className="custom-dropdown">
                    <Form.Control
                      required
                      as="select"
                      custom
                      value={title}
                      onChange={(e) => onChange(e, "title")}
                      required
                    >
                      <option value="">Title</option>
                      {titleAr.map((item) => {
                        return <option value={item.value}>{item.name}</option>;
                      })}
                    </Form.Control>
                    <span className="custom-dropdown-arrow">
                      <FiChevronDown />
                    </span>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Title.
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="First Name">
                  <Form.Label className="my-form-label">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => onChange(e, "firstname")}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Firstname.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Last Name">
                  <Form.Label className="my-form-label">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => onChange(e, "lastname")}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Lastname.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Birth">
                  <Form.Label className="my-form-label">
                    Date of Birth
                  </Form.Label>
                  {/* <Form.Control
                    type="date"
                    placeholder="Birth"
                    value={date}
                    onChange={(e) => onChange(e, "date")}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid DOB.
                  </Form.Control.Feedback> */}
                  <DatePicker
                    id="dob"
                    name="dob"
                    style={{ width: "100%" }}
                    placeholderText="Date of Birth"
                    className="form-control"
                    // dateFormat="MM/DD/YYYY"
                    selected={date}
                    //onChange={(date) => this.handleDOBChange(date)}
                    onChange={(e) => onChange(e, "date")}
                    // onBlur={()=>{validateDob()}}
                    showMonthDropdown
                    useShortMonthInDropdown
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={250}
                    autoComplete={"off"}
                    required
                    minDate={new Date("01-01-1940")}
                    maxDate={new Date("01-01-2031")}
                  // readOnly={true}
                  //maxDate={moment()}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid DOB.
                  </Form.Control.Feedback>
                  {validDate && date != "" && <p style={{ color: '#dc3545' }}>
                    Only 21 year person is allowed
                  </p>}

                </Form.Group>

                <Form.Group className="mb-3" controlId="Last Name">
                  <Form.Label className="my-form-label">Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => onChange(e, "email")}
                    isInvalid={Email.length > 2 ? !validateEmail(Email) : false}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Phone Number">
                  <Form.Label className="my-form-label">
                    Mobile Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    value={PhNumber}
                    onChange={(e) => onChange(e, "PhNumber")}
                    isInvalid={PhNumber.length > 1 ? !validateMobile(PhNumber) : false}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Mobile Number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 password-box" controlId="PASSWORD">
                  <Form.Label className="my-form-label">Password</Form.Label>
                  <Form.Control
                    required
                    placeholder="Password"
                    type={passwordShow ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={
                      password.length > 2 ? !validatePassword(password) : false
                    }
                  />

                  <div
                    className="show-icon"
                    style={{ top: "35px" }}
                    onClick={() => {
                      setPasswordShow(!passwordShow);
                    }}
                  >
                    <AiFillEyeInvisible />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    Password contains atleast 8 to 20 characters which contain
                    at least one lowercase letter, one uppercase letter, one
                    numeric digit and special character
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 password-box" controlId="PASSWORD">
                  <Form.Label className="my-form-label">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    required
                    placeholder="Password"
                    type={confirmPasswordShow ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isInvalid={
                      confirmPassword.length > 2
                        ? !checkConfirmPassword(password)
                        : false
                    }
                  />

                  <div
                    className="show-icon"
                    style={{ top: "35px" }}
                    onClick={() => {
                      setconfirmPasswordShow(!confirmPasswordShow);
                    }}
                  >
                    <AiFillEyeInvisible />
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {confirmPassword.length > 2
                      ? "Password and Confirm Password do not match"
                      : "Please enter Confirm Password"}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Address">
                  <Form.Label className="my-form-label">
                    Street Address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Street Address"
                    value={address}
                    onChange={(e) => onChange(e, "address")}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Address.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="City">
                  <Form.Label className="my-form-label">City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => onChange(e, "city")}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid City.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="State">
                  <Form.Label className="my-form-label">State</Form.Label>
                  <div className="custom-dropdown">
                    <Form.Control
                      required
                      as="select"
                      custom
                      value={nation}
                      onChange={(e) => onChange(e, "nation")}
                      // value={State}
                      // onChange={(e) => onChange(e, "State")}
                      required
                    >
                      <option value="">State</option>
                      {statesArr.map((item) => {
                        return (
                          <option value={item.state_id}>
                            {item.state_name}
                          </option>
                        );
                      })}
                    </Form.Control>
                    <span className="custom-dropdown-arrow">
                      <FiChevronDown />
                    </span>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid State.
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>

                {/* <Form.Label className="my-form-label">State</Form.Label>
              <div className="custom-dropdown">
                <Form.Select
                  aria-label="Default select example"
                  value={State}
                  onChange={(e) => onChange(e, "State")}
                  style={{ backgroundImage: "none" }}
                >
                  <option>State</option>

                  {statesArr.map((item, index) => {
                    return (
                      <option value={item.state_id}>{item.state_name}</option>
                    );
                  })}
                </Form.Select>
                <span className="custom-dropdown-arrow">
                  <FiChevronDown />
                </span>
              </div> */}

                <Form.Group className="mb-3" controlId="State">
                  <Form.Label className="my-form-label">Country</Form.Label>
                  <div className="custom-dropdown">
                    <Form.Control
                      required
                      as="select"
                      custom
                      value={country}
                      onChange={(e) => onChange(e, "country")}
                      required
                    >
                      <option value="">Country</option>

                      <option value="US">US</option>
                    </Form.Control>
                    <span className="custom-dropdown-arrow">
                      <FiChevronDown />
                    </span>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Country.
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
                {/* <Form.Label className="my-form-label">Country</Form.Label>
              <div className="custom-dropdown">
                <Form.Select
                  style={{ backgroundImage: "none" }}
                  aria-label="Default select example"
                  value={country}
                  style={{ backgroundImage: "none" }}
                  onChange={(e) => onChange(e, "country")}
                >
                  <option>Country</option>
                  <option value="US">US</option>
                </Form.Select>
                <span className="custom-dropdown-arrow">
                  <FiChevronDown />
                </span>
              </div> */}
                <Form.Group className="mb-3" controlId="Zip Code">
                  <Form.Label className="my-form-label">Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={(e) => onChange(e, "zipcode")}
                    maxLength={5}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Zip Code.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Secret">
                  <Form.Label className="my-form-label">
                    Security Question 1
                  </Form.Label>
                  <div className="custom-dropdown">
                    <Form.Control
                      required
                      as="select"
                      custom
                      value={secretq}
                      onChange={(e) => onChange(e, "secquestion")}
                      required
                    >
                      <option value="">Security Question 1</option>
                      {questionArr.map((item) => {
                        return <option value={item.value}>{item.name}</option>;
                      })}
                    </Form.Control>
                    <span className="custom-dropdown-arrow">
                      <FiChevronDown />
                    </span>
                    <Form.Control.Feedback type="invalid">
                      Please select Security Question 1
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
                {/* <Form.Label className="my-form-label">Secret Question 1</Form.Label>
              <div className="custom-dropdown">
                <Form.Select
                  style={{ backgroundImage: "none" }}
                  aria-label="Default select example"
                  value={secretq}
                  onChange={(e) => onChange(e, "secquestion")}
                >
                  <option>Secret question 1</option>
                  {questionArr.map((item) => {
                    return <option value={item.value}>{item.name}</option>;
                  })}
                </Form.Select>
                <span className="custom-dropdown-arrow">
                  <FiChevronDown />
                </span>
              </div> */}

                <Form.Group className="mb-3" controlId="Secret question">
                  <Form.Label className="my-form-label">
                    Personal Response 1
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Personal response"
                    value={personalres}
                    onChange={(e) => onChange(e, "personalres")}
                    required
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Response.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Secret">
                  <Form.Label className="my-form-label">
                    Security Question 2
                  </Form.Label>
                  <div className="custom-dropdown">
                    <Form.Control
                      required
                      as="select"
                      custom
                      value={secretq1}
                      onChange={(e) => onChange(e, "secquestion1")}
                      required
                    >
                      <option value="">Security Question 2</option>
                      {questionArr.map((item) => {
                        return <option value={item.value}>{item.name}</option>;
                      })}
                    </Form.Control>
                    <span className="custom-dropdown-arrow">
                      <FiChevronDown />
                    </span>
                    <Form.Control.Feedback type="invalid">
                      Please select Security Question 2
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
                {/* <Form.Label className="my-form-label">Secret Question 2</Form.Label>
              <div className="custom-dropdown">
                <Form.Select
                  style={{ backgroundImage: "none" }}
                  aria-label="Default select example"
                  value={secretq1}
                  onChange={(e) => onChange(e, "secquestion1")}
                >
                  <option>Secret question 2</option>
                  {questionArr.map((item) => {
                    return <option value={item.value}>{item.name}</option>;
                  })}
                </Form.Select>
                <span className="custom-dropdown-arrow">
                  <FiChevronDown />
                </span>
              </div> */}

                <Form.Group className="mb-3" controlId="Secret question">
                  <Form.Label className="my-form-label">
                    Personal Response 2
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Personal response"
                    value={personalres1}
                    onChange={(e) => onChange(e, "personalres1")}
                    required
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Response.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="SSN">
                  <Form.Label className="my-form-label">
                    SSN Last 4 digits
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last 4 digits of SSN"
                    value={SSN}
                    onChange={(e) => onChange(e, "SSN")}
                    required
                    maxLength={4}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid SSN.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
                  <Form.Check
                    required
                    type="checkbox"
                    label="* I agree to the Terms of Service, Privacy Policy and House Rules"
                  />
                </Form.Group>
                <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
                  <Form.Check
                    required
                    type="checkbox"
                    label="* I confirm that all the information provided is accurate"
                  />
                </Form.Group>
                <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
                  <Form.Check
                    required
                    type="checkbox"
                    label="* I confirm that I am atleast 21 years of age and may not allow any other person to access my account"
                  />
                </Form.Group>
                <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
                  <Form.Check
                    required
                    type="checkbox"
                    label="* I confirm that I am not prohibited from wagering on sports ,am not on an exclusion list.and have not asked to be placed on a self exclusion list in any state"
                  />
                </Form.Group>
                <Form.Group className="mb-3 flex-div" id="formGridCheckbox">
                  <Form.Check
                    required
                    type="checkbox"
                    label="* I confirm that I am not an employee of Bett Gaming TM nor am I a family member of anyone associated with Bett Gaming TM"
                  />
                </Form.Group>
                <div className="user-upload">
                  <h3>{error}</h3>
                </div>

                <Button variant="primary" className="save-btn" type="submit">
                  Create Account
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Joinnow;
