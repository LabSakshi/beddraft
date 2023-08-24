import React, { useState, useEffect } from "react";
import "./Personal-Information.css";
import { FaRegUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { endPoints } from "../../../constant/Environment";
import { getAllData, updateUser } from "../../../Utility/API";
import Toaster from "../../../components/Toast";
import { Actions } from "../../../redux/Actions/Actions";
import Loader from "../../../components/Loader";
import Image from "react-bootstrap/Image";
import { ErrorToast, SuccesToast } from "../../../components/Toast/message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import "../../../css/main.css";

const PersonalInformation = () => {
  const state = useSelector((state) => state.auth);
  const userData = state.user;
 //console.log('userData',userData)
  const userDeatils = JSON.parse(localStorage.getItem("user"));
  const userData1 = userDeatils;
  const navigate = useNavigate();
  const [kycStatus,setKycStatus] = useState(userData?.kyc_status)
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [validateButton, setValidateButton] = useState(true);
  const [name, setName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [surname, setSurname] = useState(userData?.surname || "");
  const [date, setDate] = useState(userData?.birthDate || "");
  const [nation, setNation] = useState(userData?.nation || "");
  const [country, setCountry] = useState(userData?.country || "");
  const [zipcode, setZipcode] = useState(userData?.zipCode || "");
  const [states, setStates] = useState([]);
  const [message, setMessage] = useState("");
  const [town, setTown] = useState(userData?.town || "");
  const [address, setAddress] = useState(userData?.address || "");
  const [docNum, setDocNum] = useState(userData?.documentId || "");
  const [secretq, setsecretq] = useState(userData?.personalQuestion || "");
  const [gender, setGender] = useState(userData?.sex || "");
  const [doctype, setDoctype] = useState(userData?.documentTypeId || "");
  const [PhNumber, setPhNumber] = useState(userData?.mobile || "");
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
  const [ageError ,setAgeError ] = useState(false)

  useEffect(() => {
    GetStates();
    GetPersonalQues();
    GetDocumnets();
    setEmail(userData?.email || "");
    setGender(userData?.sex || "");
    setNation(userData?.nation || "");
    setCountry(userData?.country || "");
    setZipcode(userData?.zipCode || "");
    setTown(userData?.town || "")
    setName(userData?.name || ""); 
    setPhNumber(userData?.mobile || "");
    setSurname(userData?.surname || "");
    setDate(userData?.birthDate || "")
    setAddress(userData?.address || "")
    let fullimage = userData?.profilepic //state.user?.data?.profilepic
    ? `${endPoints.apiBaseUrl}${userData?.profilepic}` //${state.user.data.profilepic}`
    : "";
    setProfilepic(fullimage)
    // return () => {
    //   dispatch({
    //     type: Actions.CLEAR_SELECTED,
    //   });
    // };
  }, [userData]);

  // console.log(PhNumber);

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

  // console.log(state.user.idUser);

  const onChange = (e, fieldName) => {
    if (fieldName == "date") {
      let age =  getAge(e);
      
      console.log("Age", age);
      if(age >= 18){
        setDate(e);
        setAgeError(false)
      }else{
        setAgeError(true)
        setDate(e);
      }
    
    } //setDate(e.target.value);
    if(fieldName == "email") setEmail(e.target.value);
    if (fieldName == "name") setName(e.target.value);
    if (fieldName == "surname") setSurname(e.target.value);
    if (fieldName == "nation") setNation(e.target.value);
    if (fieldName == "states") setStates(e.target.value);
    if(fieldName == "PhNumber") setPhNumber(e.target.value);
    if (fieldName == "town") setTown(e.target.value);
    if (fieldName == "address") setAddress(e.target.value);

    if (fieldName == "gender") setGender(e.target.value);
    // if (fieldName == "doctype") setDoctype(e.target.value);
    // if (fieldName == "docnumber") setDocNum(e.target.value);
    // if (fieldName == "secquestion") setsecretq(e.target.value);
    // if (fieldName == "personalres") setPersonalRes(e.target.value);
    if (fieldName == "country") setCountry(e.target.value);
    if (fieldName == "zipcode") setZipcode(e.target.value);
  };

  
  // console.log(state.user.ssn);

   let ssn = state?.user?.ssn;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      //event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      // if (validated) {
      if(date == ""){
        setAgeError(true);
        return
        
      }
       else if(date){
        let age =  getAge(date);

        if(age >= 18){
          setDate(date);
          setAgeError(false)
        }else{
          setAgeError(true)
          setDate(date);
          return
        }
      }
      // if(ageError){
      //   return;
      // }


     let validateFlag =
      validateAlphabetic(name) ||
      validateAlphabetic(surname) ||
      validateAlphabetic(town) ||
       validateNumeric(zipcode) ||
      // validateDocNum(docNum) ||
      validateMobileNo(PhNumber) ||
      validateAddress(address);
      debugger
      if(validateFlag){
        return;
      }
      console.log('profilepic',profilepic)
      let dob = moment(date).format("MM-DD-YYYY");
      let data = {
        idUser: userData.idUser,
        login: userData.login,
        name: name,
        surname: surname,
        ssn:ssn,  
        birthDate: dob,
        nation: nation,
        country: country,
        mobile: PhNumber,
        town: town,
        address: address,
        // personalQuestion: secretq,
        // personalResponse: personalres,
        // documentId: docNum,
        // documentTypeId: parseInt(doctype),
        sex: gender,
        zipCode: zipcode,
       profilepic: profilepic,  //working on it.
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
  const ValidateAge = async (e) => {
    let age = await getAge(e.target.value);
    debugger
    console.log("Age", age);
  };
  const UpdateUserDetail = (data) => {
    let url = `${endPoints.api.UPDATE_PERSONAL}`;
    setIsLoadinig(true);
    
    updateUser(url, data)
      .then((response) => {
        console.log("response", response);
        setIsLoadinig(false);
        //  setMessage(response.message);
        if(response.status ==  "success"){
          setMessage("Updated Successfully");
          SuccesToast("Updated Successfully");
          GetUserById();
        }else{
          setMessage("Try Again!");
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

    console.log(files[0]?.size);

    if (!files[0]?.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      ErrorToast( 'Please select valid image.');
      return false;
    }
    const MAX_FILE_SIZE = 1024 // 1MB
    const fileSizeKiloBytes = files[0]?.size / MAX_FILE_SIZE;
    if(fileSizeKiloBytes > 2048){
      ErrorToast("File size is greater than 2MB Please upload again");

      return
    }
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
    formdata.append("userId", state.user?.idUser);
    setIsLoadinig(true);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    let imgUrl = `${endPoints.apiBaseUrl}${endPoints.api.UPDATE_PROFILE_IMAGE}`;
    fetch(imgUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('result',result);
        debugger
        setIsLoadinig(false);
        if(result.status == "success"){
          let fullimage = result.data //state.user?.data?.profilepic
          ? `${endPoints.apiBaseUrl}${result.data}` //${state.user.data.profilepic}`
          : "";
          setProfilepic(fullimage);
          GetUserById();
          setMessage("Profile upload Successfully");
          SuccesToast("Profile upload Successfully");
        }else{
          setMessage(result.message);
          ErrorToast(result.message);
        }
      // 
    
      })
      .catch((error) => {
        setIsLoadinig(false);
        console.log("error", error)
      });
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
    let regUsername = /^[a-zA-Z][a-zA-Z .,'-]*$/   // /^[A-Za-z]+$/;
    if (value.match(regUsername)) {
      return false;
    } else {
      return true;
    }
  };
  const validateNumeric = (value) => {
  //  let regexEmail = /^[0-9]/;
    const regNum =  /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/       /// new RegExp('^[0-9]+$');
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
  };

  const validateMobileNo= (value) => {
    //  let regexEmail = /^[0-9]/;
   // const regNum = new RegExp("^[0-9]+$");
    const regNum =  /(^\d{10}$)|(^\d{10}$)|(^\d{5}-\d{4}$)/    
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
      validateAddress(address);
    // console.log('validateNumeric', validateNumeric(zipcode));
    setValidateButton(validateFlag);
  };
  return (
    <div>
      <div className="container bg-color-pi">
        <div className="inner-divspace">
          <div className="row">
            <div className="col-md-12">
              <div className="user-div-with">
                {profilepic === "" ? (
                  <div className="user-icondiv">
                    <span>
                      {" "}
                      <FaRegUser />
                    </span>
                  </div>
                ) : (
                  <Image
                    src={profilepic}
                    roundedCircle
                    style={{ height: 70, width: 70, marginInline: 5 }}
                  />
                )}

                <div className="user-upload">
                  <h3>Upload a picture</h3>
                  <input
                   // accept="image/*"
                    accept="image/x-png,image/gif,image/jpeg"
                    type="file"
                    className="file-upload-btn"
                    onChange={onImageChange}
                  />
                </div>
              </div>
            </div>
            <Toaster />
            {isLoading && <Loader spinner={true} visible={isLoading} />}

            <div className="mt-5 form-space-r">
              <Form
                className="my-form-layout1"
                validated={validated}
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6"
                   style={{ marginTop:"5px"}}
                  >
                    <Form.Group className="mb-3" controlId="Surname">
                      <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginRight: '20px',
                      }}>
                      <Form.Label className="my-form-label">Email</Form.Label>
                      <Form.Label className="my-form-label" style={{
                            color: '#2279ee',
                            cursor: 'pointer'
                      }}onClick={()=>{
                        navigate('/change-email')
                      }} >Change Email</Form.Label>
                      </div>
                     
                      <Form.Control
                      className="text-dark"
                        type="text"
                        placeholder="Email"
                        value={userData?.email || email}
                       // onChange={(e) => onChange(e, "email")}
                        disabled={true}
                      />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="Surname">
                      <Form.Label className="my-form-label">UserName</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        value={userData?.login}
                        disabled={true}
                      />
                    </Form.Group> */}
                    <Form.Label className="my-form-label">Gender</Form.Label>
                    <div className="custom-dropdown mb-3">
                      <Form.Control
                        required
                        as="select"
                        type="select"
                        name="payment_method"
                        onChange={(e) => onChange(e, "gender")}
                        value={gender}
                        isInvalid={(gender == "") ? true : false}
                        disabled={true}
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

                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="my-form-label">
                        First Name
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        value={name}
                        onBlur={_onBlurCall}
                        onChange={(e) => onChange(e, "name")}
                        style={{ textTransform: "capitalize" }}
                        isInvalid={name?.length > 0 && validateAlphabetic(name)}
                        disabled={true}
                       // disabled={(kycStatus == 2 || kycStatus == 4) ? true : false }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter valid firstname
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Surname">
                      <Form.Label className="my-form-label">
                        Last Name{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Surname"
                        value={surname}
                        onBlur={_onBlurCall}
                        onChange={(e) => onChange(e, "surname")}
                        style={{ textTransform: "capitalize" }}
                        isInvalid={
                          surname?.length > 0 && validateAlphabetic(surname)
                        }
                        disabled={true}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter valid lastname
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div>
                      <Form.Group className="mb-3">
         
                      </Form.Group>

          
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
                          //dateFormat="MM/DD/YYYY"
                          selected={date ? new Date(date) : new Date()}
                          //onChange={(date) => this.handleDOBChange(date)}
                          onChange={(e) => onChange(e, "date")}
                        // onBlur={(e) => ValidateAge(e)}

                          showMonthDropdown
                          useShortMonthInDropdown
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={250}
                          autoComplete={"off"}
                          required
                          minDate={new Date("01-01-1940")}
                          maxDate={new Date("01-01-2031")}
                          disabled={true}
                          // readOnly={true}
                          //maxDate={moment()}
                        />
                        {
                          ageError && <Form.Label  className="my-form-label" style={{color:'#dc3545'}}>
                         Age should be more than 18 years.Please enter a valid Date of Birth
                         </Form.Label >
                        }
                       
                      </Form.Group>

                      <Form.Group className="mb-3 mt-3" controlId="Phone Number">
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

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <Form.Label className="my-form-label">State</Form.Label>
                      <div className="custom-dropdown">
                        <Form.Control
                          required
                          as="select"
                          type="select"
                          name="payment_method"
                          value={ nation}
                          onChange={(e) => onChange(e, "nation")}
                          // isInvalid={
                          //   nation == "" ? true : false
                          // }
                        >
                          <option value="">State</option>
                          {states.map((item, index) => {
                            return (
                              <option value={item.state_id}>
                                {item.state_name}
                              </option>
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
                      <Form.Label
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
                          disabled={true}
                          // isInvalid={
                          //   country == "" ? true : false
                          // }
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
                      </div>

                      <Form.Group className="mb-3" controlId="Town">
                        <Form.Label className="my-form-label ">City</Form.Label>
                        <Form.Control
                          className="mb-3"
                          required
                          type="text"
                          placeholder="City"
                          value={town}
                          onChange={(e) => onChange(e, "town")}
                          isInvalid={
                            town?.length > 0 && validateAlphabetic(town)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter valid town
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Address">
                        <Form.Label className="my-form-label">
                          Address
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Address"
                          isInvalid={
                            address?.length > 0 && validateAddress(address)
                          }
                          onBlur={_onBlurCall}
                          value={address}
                          onChange={(e) => onChange(e, "address")}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter valid address
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Zip Code">
                        <Form.Label className="my-form-label">
                          Zip Code
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Zip Code"
                          value={zipcode}
                          onChange={(e) => onChange(e, "zipcode")}
                          maxLength={5}
                          onBlur={_onBlurCall}
                          required
                          isInvalid={
                            zipcode?.length > 0 && validateNumeric(zipcode)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter valid zip code
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="save-btn22"
                        type="submit"
                        
                       
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                  <div className="col-md-6">
                 
                  </div>
                  {/* <div className="col-md-4">
                    <div>
                      <Form.Label className="my-form-label">
                        Document Type
                      </Form.Label>
                      <div className="custom-dropdown mb-3">
                        <Form.Control
                          required
                          as="select"
                          type="select"
                          name="payment_method"
                          value={doctype}
                          onChange={(e) => onChange(e, "doctype")}
                    
                        >
                          <option value="">Type of document</option>
                          {documentArr.map((item) => {
                            return (
                              <option value={item.value}>{item.name}</option>
                            );
                          })}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please Select document type
                        </Form.Control.Feedback>
                        <span className="custom-dropdown-arrow">
                          <FiChevronDown />
                        </span>
                      </div>

                      <Form.Group className="mb-3" controlId="Document number">
                        <Form.Label className="my-form-label">
                          Document Number
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          required
                          type="text"
                          placeholder="Document number"
                          value={docNum}
                          onBlur={_onBlurCall}
                          onChange={(e) => onChange(e, "docnumber")}
                          isInvalid={
                            docNum?.length > 0 && validateDocNum(docNum)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter document number
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Label className="my-form-label">
                        Security Question
                      </Form.Label>
                      <div className="custom-dropdown mb-3">
                        <Form.Control
                          required
                          as="select"
                          type="select"
                          name="payment_method"
                          value={secretq}
                          onChange={(e) => onChange(e, "secquestion")}
                          isInvalid={secretq == "" ? true : false}
                        >
                          <option value="">Security Question</option>
                          {questionArr.map((item) => {
                            return (
                              <option value={item.value}>{item.name}</option>
                            );
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
                          Personal Response
                        </Form.Label>
                        <Form.Control
                          className="mb-3"
                          type="text"
                          required
                          placeholder="Personal response"
                          value={personalres}
                          onChange={(e) => onChange(e, "personalres")}
                          isInvalid={personalres.length < 1 ? true : false}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter personal response
                        </Form.Control.Feedback>
                      </Form.Group>
                 
                    </div>
                  </div> */}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
