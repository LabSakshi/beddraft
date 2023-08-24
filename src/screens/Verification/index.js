import React, { useState, useEffect } from "react";
//import "./Personal-Information.css";
import axios from "axios";
import "./Verification.css";
import { FaRegUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, InputGroup } from "react-bootstrap";
import { endPoints } from "../../constant/Environment";
import { getAllData, updateUser } from "../../Utility/API";
import Toaster from "../../components/Toast";
import { Actions } from "../../redux/Actions/Actions";
import ModalOtp from "../../components/Modal";
import Loader from "../../components/Loader";
import Image from "react-bootstrap/Image";
import { ErrorToast, SuccesToast } from "../../components/Toast/message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const state = useSelector((state) => state.auth);
  const userData = state.user;
  const verificationData = userData?.account
  console.log('userData', userData, userData.accountId, verificationData.userId)
  const userDeatils = JSON.parse(localStorage.getItem("user"));
  const userData1 = userDeatils;
  const navigate = useNavigate();
  const [kycStatus, setKycStatus] = useState(userData?.kyc_status);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [validateButton, setValidateButton] = useState(true);
  const [name, setName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [surname, setSurname] = useState(userData?.surname || "");
  const [date, setDate] = useState(userData?.birthDate || "");
  const [nation, setNation] = useState(userData?.nation || "");
  const [country, setCountry] = useState(userData?.country || "US");
  const [zipcode, setZipcode] = useState(userData?.zipCode || "");
  const [states, setStates] = useState([]);
  const [message, setMessage] = useState("");
  const [town, setTown] = useState(userData?.town || "");
  const [address, setAddress] = useState(userData?.address || "");
  const [docNum, setDocNum] = useState(userData?.documentId || "");
  const [secretq, setsecretq] = useState(userData?.personalQuestion || "");
  const [gender, setGender] = useState(userData?.sex || "");
  const [doctype, setDoctype] = useState(userData?.documentTypeId || "");
  const [personalres, setPersonalRes] = useState(
    userData?.personalResponse || ""
  );
  const [isLoading, setIsLoadinig] = useState(false);
  let fullimage = userData?.profilepic //state.user?.data?.profilepic
    ? `${endPoints.apiBaseUrl}${userData?.profilepic}` //${state.user.data.profilepic}`
    : "";
  const [profilepic, setProfilepic] = useState(fullimage || "");
  const [picurl, setPicurl] = useState("");
  const [questionArr, setQuestionArr] = useState([]);
  const [documentArr, setDocumentArr] = useState([]);
  const [ageError, setAgeError] = useState(false);
  const [SSN, setSSN] = useState(userData?.ssn || "");
  const [aadhar, setAadhar] = useState(userData?.aadhar || "");
  const [PhNumber, setPhNumber] = useState(userData?.mobile || "");
  const [show, setShow] = useState(true);

  useEffect(() => {
    GetStates();
    GetPersonalQues();
    // GetDocumnets();
    setGender(userData?.sex || "");
    setNation(userData?.nation || "");
    setCountry(userData?.country || "US");
    setZipcode(userData?.zipCode || "");
    setTown(userData?.town || "");
    setName(userData?.name || "");
    setSurname(userData?.surname || "");
    setDate(userData?.birthDate || "");
    setAddress(userData?.address || "");
  }, [userData]);

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
          setStates(statesKey);
        } else {
          // alert(message);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoadinig(false);
      });
  };

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
  const GetDocumnets = () => {
    let url = `${endPoints.api.GET_DOCUMENTS}`;
    setIsLoadinig(true);
    getAllData(url)
      .then((response) => {
        const { status, data, message } = response;
        setIsLoadinig(false);
        if (status === "success") {
          let statesKey = [];
          data.map((ele) => {
            ele.name = ele.name;
            ele.value = ele.id;
            statesKey.push(ele);
          });
          setDocumentArr(statesKey);
        } else {
          //alert(message);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoadinig(false);
      });
  };

  const onChange = (e, fieldName) => {
    if (fieldName == "date") {
      let age = getAge(e);

      console.log("Age", age);
      if (age >= 21) {
        setDate(e);
        setAgeError(false);
      } else {
        setAgeError(true);
        setDate(e);
      }
    } //setDate(e.target.value);
    if (fieldName === "name") setName(e.target.value);
    if (fieldName === "surname") setSurname(e.target.value);
    if (fieldName === "nation") setNation(e.target.value);
    if (fieldName === "states") setStates(e.target.value);

    if (fieldName === "town") setTown(e.target.value);
    if (fieldName === "address") setAddress(e.target.value);
    if (fieldName === "SSN") setSSN(e.target.value);
    if (fieldName === "gender") setGender(e.target.value);
    // if (fieldName === "doctype") setDoctype(e.target.value);
    // if (fieldName === "docnumber") setDocNum(e.target.value);
    if (fieldName === "secquestion") setsecretq(e.target.value);
    if (fieldName === "personalres") setPersonalRes(e.target.value);
    if (fieldName === "country") setCountry(e.target.value);
    if (fieldName === "zipcode") setZipcode(e.target.value);
    if (fieldName === "PhNumber") setPhNumber(e.target.value);
    if (fieldName === "aadhar") setAadhar(e.target.value);

  };


  // console.log("userData1" , userData);

  // console.log("hello");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      //event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      // if (validated) {
      // if (date === "") {
      //   setAgeError(true);
      //   return;
      // } else if (date) {
      //   let age = getAge(date);

      //   if (age >= 21) {
      //     setDate(date);
      //     setAgeError(false);
      //   } else {
      //     setAgeError(true);
      //     setDate(date);
      //     return;
      //   }
      // }
      // if(ageError){
      //   return;
      // }
      let validateFlag =
        validateAlphabetic(name) ||
        validateAlphabetic(surname) ||
        validateAlphabetic(town) ||
        validateZipcode(zipcode) ||
        validateMobileNo(PhNumber) ||
        validateNumeric(SSN) ||
        validateAadharNumber(aadhar) ||
        validateAddress(address)
        // validateDocNum(docNum) ||
        ;

      if (validateFlag) {
        return;
      }

      let dob = moment(date).format("MM-DD-YYYY");

      let data = {
        idUser: userData.idUser,
        login: userData.login,
        name: name,
        surname: surname,
        //  birthDate: dob,
        nation: nation,
        country: 'US',
        town: town,
        address: address,
        personalQuestion: secretq,
        personalResponse: personalres,
        mobile: PhNumber,
        ssn: SSN,
        // documentId: docNum,
        // documentTypeId: parseInt(doctype),
        sex: gender,
        zipCode: zipcode,
        //   profilepic: URL,  //working on it.
      };

      if (name != "" || surname != "") {
        UpdateUserDetail(data);
      }
    }

    // }
  };
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

  const UpdateUserDetail = (data) => {
    let url = `${endPoints.api.UPDATE_PERSONAL}`;
    setIsLoadinig(true);

    updateUser(url, data)
      .then((response) => {
        console.log("response", response);
        setIsLoadinig(false);
        //  setMessage(response.message);

        if (response.status == "success") {
          setMessage("Thank you we are verifying your information");
          SuccesToast("Thank you we are verifying your information");
          GetUserById();
          navigate('/accountverified')
          //

        } else if (response.status == "kycfailed") {

          navigate('/info');

          // setTimeout(function () {
          //   window.location.href = response.data.RedirectUrl;
          // }, 5000);
        }
        else {
          setMessage(response.message);
          ErrorToast(response.message);
        }
      })
      .catch((error) => {
        setIsLoadinig(false);
        console.error(error);
      });
  };
  const GetUserById = () => {
    let url = `${endPoints.api.GET_BY_USERID}/${userData?.idUser}`;
    getAllData(url).then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: Actions.LOGIN,
        data: { user: response.data },
      });
    });
  };
  const onImageChange = (event) => {
    console.log(event.target.files[0]);
    const { files } = event.target;
    if (files && files[0]) {
      let url = URL.createObjectURL(files[0]);
      console.log(url);
      setProfilepic(url);
      UploadImage(url, files[0]);
    }
  };
  const UploadImage = (url, files) => {
    var formdata = new FormData();
    formdata.append("file", files);
    formdata.append("userId", state.user.data?.idUser);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    let imgUrl = `${endPoints.apiBaseUrl}${endPoints.api.UPDATE_PROFILE_IMAGE}`;
    fetch(imgUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        GetUserById();
      })
      .catch((error) => console.log("error", error));
  };
  const validateName = (username) => {
    let regUsername = /^(?=.{3,40}$)[a-zA-Z]+(?:[-'. ][a-zA-Z]+)*$/;
    if (username.match(regUsername)) {
      return true;
    } else {
      return false;
    }
  };
  const validateDocNum = (value) => {
    let regUsername = /^([a-zA-Z0-9 _-]+)$/;
    if (value.match(regUsername)) {
      return false;
    } else {
      return true;
    }
  };
  const validateAddress = (value) => {
    // let regUsername = /^([a-zA-Z0-9 _-]+)$/;
    let regUsername = /[A-Za-z0-9'\.\-\s\,]/;
    if (value.match(regUsername)) {
      return false;
    } else {
      return true;
    }
  };
  const validateAlphabetic = (value) => {
    // export const LAST_NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9 .,'-]*$/;
    let regUsername = /^[a-zA-Z][a-zA-Z .,'-]*$/  //   /^[A-Za-z]+$/;
    if (value.match(regUsername)) {
      return false;
    } else {
      return true;
    }
  };
  const validateNumeric = (value) => {
    //  let regexEmail = /^[0-9]/;
    // const regNum = new RegExp("^[0-9]+$");
    const regNum = /(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$ || ^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/
    // const regNum =  /(^\d{4}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/    
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
  };

  const validateAadharNumber = (value) => {
    const regNum = /^[0-9]{4}-\d{4}-\d{4}$/;
    console.log("val:", value.match(regNum))
    return !value.match(regNum)

  };

  const validateZipcode = (value) => {
    //  let regexEmail = /^[0-9]/;
    // const regNum = new RegExp("^[0-9]+$");
    const regNum = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
  };
  const validateMobileNo = (value) => {
    //  let regexEmail = /^[0-9]/;
    // const regNum = new RegExp("^[0-9]+$");
    const regNum = /(^\d{10}$)|(^\d{10}$)|(^\d{5}-\d{4}$)/
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
  };
  const _onBlurCall = () => {
    let validateFlag =
      validateAlphabetic(name) ||
      validateAlphabetic(surname) ||
      validateAlphabetic(town) ||
      validateNumeric(zipcode) ||
      validateDocNum(docNum) ||
      validateAddress(address) ||
      validateAadharNumber(aadhar);
    console.log('validateAadharNumber:', validateAadharNumber(aadhar));
    setValidateButton(validateFlag);
  };

  const handleClose = () => {
    console.log('closed', show)
    setShow(false);
  };

  const verifyAdhar = (e) => {
   dispatch({
    type:Actions.ADHAR
   })
    e.preventDefault()
    console.log('verify,', verificationData.idAccount, verificationData.userId, aadhar.replace(/-/g, ""))
    const requestBody = {
      "accountId": verificationData.idAccount,
      "userId": verificationData.userId,
      "adharNumber": Number(aadhar.replace(/-/g, ""))
    }

    axios.post('https://ind-dev-accountapi.bettdraft.com:5000/api/aadhar/otp', requestBody)
    .then(response => { console.log("response", response.data)

    if(response.data.status == "success"){
      console.log("sucessss");
      setShow(true);
    }
    else{
      console.log("falied")
    }

    }).catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });

  }

  return (
    <div>
      <section>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Toaster />
          {isLoading && <Loader spinner={true} visible={isLoading} />}

          <ModalOtp show={!validateAadharNumber(aadhar) && show} handleClose={handleClose} />

          <div className="col-md-6">
            <Form
              className="join-form verification-screen"
            // noValidate
            // validated={validated}
            // onSubmit={handleSubmit}
            >
              <h2
                style={{
                  justifyContent: "center",
                  display: "flex",
                  fontSize: " 1.8rem",
                }}
              >
                Verification Form
              </h2>
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  fontSize: " 1.4rem",
                  color: "#0D3862",
                }}
              >
                Welcome {userData?.login}
              </div>
              <label
                style={{
                  justifyContent: "center",
                  display: "flex",
                  color: "#0D3862",
                }}
              >
                Please Complete Your Account Details
              </label>
              <label
                style={{
                  justifyContent: "center",
                  display: "flex",
                  color: "#0D3862",
                  fontSize: "14px!important",
                  marginBottom: "10px",
                  marginTop: "5px"
                }}
              >
                Before you can enter a contest or add funds to your account, we
                require that you complete your account information.{" "}
              </label>

              <Form.Group className="mb-3" controlId="Name">
                <Form.Label className="my-form-label">First Name</Form.Label>
                <Form.Control
                  className="verification-input text-dark"
                  required
                  type="text"
                  placeholder="Enter your First Name"
                  value={name}
                  onBlur={_onBlurCall}
                  onChange={(e) => onChange(e, "name")}
                  style={{ textTransform: "capitalize" }}
                  isInvalid={name?.length > 0 && validateAlphabetic(name)}
                  disabled={kycStatus == 2 || kycStatus == 4 ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter valid firstname
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Surname">
                <Form.Label className="my-form-label">Last Name </Form.Label>
                <Form.Control
                  className="verification-input text-dark"
                  required
                  type="text"
                  placeholder="Enter your Last Name"
                  value={surname}
                  onBlur={_onBlurCall}
                  onChange={(e) => onChange(e, "surname")}
                  style={{ textTransform: "capitalize" }}
                  isInvalid={surname?.length > 0 && validateAlphabetic(surname)}
                  disabled={kycStatus == 2 || kycStatus == 4 ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter valid lastname
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Label className="my-form-label">Gender</Form.Label>
              <div className="custom-dropdown mb-3">
                <Form.Control
                  className="verification-input text-dark"
                  required
                  as="select"
                  type="select"
                  placeholder="Select"
                  name="payment_method"
                  onChange={(e) => onChange(e, "gender")}
                  value={gender}
                  isInvalid={gender == "" ? true : false}
                  disabled={kycStatus == 2 || kycStatus == 4 ? true : false}
                >
                  <option value="">Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please Select gender
                </Form.Control.Feedback>

                <span className="custom-dropdown-arrow">
                  <FiChevronDown />
                </span>
              </div>

              <Form.Group className="mb-3" controlId="SSN">
                <Form.Label className="my-form-label mb-3">
                  Aadhar Number
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    className="verification-input text-dark"
                    type="text"
                    placeholder="Enter 12 digit Aadhar Number"
                    value={aadhar}
                    onChange={(e) => onChange(e, "aadhar")}
                    required
                    maxLength={14}
                    isInvalid={aadhar?.length > 0 && validateAadharNumber(aadhar)}
                  />
                  <Button id="verifyOtp" onClick={(e) => verifyAdhar(e)}>verify</Button>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Aadhar Number in format xxxx-xxxx-xxxx
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>


              {/* <div>             

                <Form.Group controlId="formLastName">
                  <Form.Label className="my-form-label">
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
                    minDate={new Date("01-01-1940")}
                    maxDate={new Date("01-01-2031")}
                    disabled={kycStatus == 2 || kycStatus == 4 ? true : false}
                  />
                  {ageError && (
                    <Form.Label
                      className="my-form-label"
                      style={{ color: "#dc3545" }}
                    >
                      Age should be more than 21 years.Please enter a valid Date
                      of Birth
                    </Form.Label>
                  )}
                </Form.Group>
              </div> */}
              <Form.Group className="mb-3" controlId="Phone Number">
                <Form.Label className="my-form-label">Mobile Number</Form.Label>
                <Form.Control
                  className="verification-input text-dark"
                  type="text"
                  placeholder="Enter your Mobile Number"
                  value={PhNumber}
                  onChange={(e) => onChange(e, "PhNumber")}
                  required
                  maxLength={10}
                  isInvalid={PhNumber?.length > 0 && validateMobileNo(PhNumber)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Mobile Number.
                </Form.Control.Feedback>
              </Form.Group>

              <div>
                <Form.Label className="my-form-label">State</Form.Label>
                <div className="custom-dropdown">
                  <Form.Control
                    className="verification-input text-dark"
                    required
                    as="select"
                    type="select"
                    placeholder="Select"
                    name="payment_method"
                    value={nation}
                    onChange={(e) => onChange(e, "nation")}
                  >
                    <option value="">State</option>
                    {states.map((item, index) => {
                      return (
                        <option value={item.state_id}>{item.state_name}</option>
                      );
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please Select state
                  </Form.Control.Feedback>
                  <span className="custom-dropdown-arrow">
                    <FiChevronDown />
                  </span>
                </div>
                {/* <Form.Label
                  className="my-form-label"
                  style={{ marginTop: "17px" }}
                >
                  Country
                </Form.Label>
                <div className="custom-dropdown mb-3">
                  <Form.Control
                    required
                    as="select"
                    type="select"
                    name="payment_method"
                    value={country}
                    onChange={(e) => onChange(e, "country")}
                 
                  >
                    <option value="">Country</option>
                    <option value="US">US</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please Select valid country
                  </Form.Control.Feedback>
                  <span className="custom-dropdown-arrow">
                    <FiChevronDown />
                  </span>
                </div> */}

                <Form.Group className="mb-3" controlId="Town">
                  <Form.Label className="my-form-label ">City</Form.Label>
                  <Form.Control
                    className="mb-3 verification-input text-dark"
                    required
                    type="text"
                    placeholder="Enter your City of Residence"
                    value={town}
                    onChange={(e) => onChange(e, "town")}
                    isInvalid={town?.length > 0 && validateAlphabetic(town)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter valid town
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Address">
                  <Form.Label className="my-form-label">Address</Form.Label>
                  <Form.Control
                    className="verification-input text-dark"
                    required
                    type="text"
                    placeholder="Enter the Street and / or Building Name "
                    isInvalid={address?.length > 0 && validateAddress(address)}
                    onBlur={_onBlurCall}
                    value={address}
                    onChange={(e) => onChange(e, "address")}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter valid address
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Zip Code">
                  <Form.Label className="my-form-label">Zip Code</Form.Label>
                  <Form.Control
                    className="verification-input text-dark"
                    type="text"
                    placeholder="Enter Zip Code"
                    value={zipcode}
                    onChange={(e) => onChange(e, "zipcode")}
                    maxLength={5}
                    onBlur={_onBlurCall}
                    required
                    isInvalid={zipcode?.length > 0 && validateZipcode(zipcode)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter valid zip code
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Label className="my-form-label">
                  Security Question
                </Form.Label>
                <div className="custom-dropdown mb-3">
                  <Form.Control
                    className="verification-input text-dark"
                    required
                    as="select"
                    type="select"
                    placeholder="Select a Security Question"
                    name="payment_method"
                    value={secretq}
                    onChange={(e) => onChange(e, "secquestion")}
                    isInvalid={secretq == "" ? true : false}
                  >
                    <option value="">Select a Security Question</option>
                    {questionArr.map((item) => {
                      return <option value={item.value}>{item.name}</option>;
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please Select security question
                  </Form.Control.Feedback>
                  <span className="custom-dropdown-arrow">
                    <FiChevronDown />
                  </span>
                </div>

                <Form.Group className="mb-3" controlId="Secret question">
                  <Form.Label className="my-form-label">
                    Answer
                  </Form.Label>
                  <Form.Control
                    className="mb-3 verification-input text-dark"
                    type="text"
                    required
                    placeholder="Enter the Answer to the selected question"
                    value={personalres}
                    onChange={(e) => onChange(e, "personalres")}
                    isInvalid={personalres.length < 1 ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    Enter the Answer to the selected question
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-0 flex-div" id="formGridCheckbox">
                  <Form.Check
                    required
                    type="checkbox"
                    label="* I confirm that I am at least 18 years of age and that the information provided is accurate and up to date"
                    style={{ marginBottom: "10px" }}
                  />
                </Form.Group>
                <Button variant="primary" className="save-btn22 verifcation-btn" type="submit">
                  Complete My Account
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verification;
