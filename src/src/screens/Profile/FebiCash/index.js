import React, { useEffect, useState } from "react";
import "./FebiCash.css";
import { FaRegUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { addData, updateUser } from "../../../Utility/API";
import { PaymentEndpoints } from "../../../constant/Environment";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { ErrorToast, SuccesToast } from "../../../components/Toast/message";
import Enroll from "../Enroll";
import { endPoints } from "../../../constant/Environment";
import { getAllData } from "../../../Utility/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const FebiCash = () => {
  // const User = useSelector((state) => state).auth?.user?.data;

  // const userDeatils = JSON.parse(localStorage.getItem("user"));
  // const userData = userDeatils;
  const state = useSelector((state) => state.auth);
  const userData = state.user;
  console.log('userData', userData)
  const navigate = useNavigate();
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
  const [phoneNumber, setPhoneNumber] = useState(userData?.phone || "");
  const [states, setStates] = useState([]);
  const [add1, setAdd1] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [SSN, setSSN] = useState(userData?.ssn || "");

  const [town, setTown] = useState(userData?.town || "");
  const [address, setAddress] = useState(userData?.address || "");
  const [docNum, setDocNum] = useState(userData?.documentId || "");
  const [isLoading, setIsLoadinig] = useState(false);

  const [ageError, setAgeError] = useState(false)

  useEffect(() => {
    GetStates();

    setEmail(userData?.email || "");

    setNation(userData?.nation || "");
    setCountry(userData?.country || "");
    setZipcode(userData?.zipCode || "");
    setTown(userData?.town || "")
    setName(userData?.name || "");
    setSurname(userData?.surname || "");
    setDate(userData?.birthDate || "")
    setAddress(userData?.address || "")



  }, [userData]);

  const _onBlurCall = () => {
    let validateFlag =
      validateAlphabetic(name) ||
      validateAlphabetic(surname) ||
      validateAlphabetic(town) ||
      validateNumeric(zipcode) ||
      validateDocNum(docNum) ||
      validateAddress(address) ||
      validatePhoneNo(phoneNumber) ||
      validateSSN(SSN)
    // console.log('validateNumeric', validateNumeric(zipcode));
    setValidateButton(validateFlag);
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
    let regUsername = /^([a-zA-Z0-9 _-]+)$/;
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
    const regNum = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/       /// new RegExp('^[0-9]+$');
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
  };
  const validatePhoneNo = (value) => {
    //  let regexEmail = /^[0-9]/;
    const regNum = /(^\d{10}$)|(^\d{5}-\d{4}$)/       /// new RegExp('^[0-9]+$');
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
  };
  const validateSSN = (value) => {
    //  let regexEmail = /^[0-9]/;
    //  const regNum =  /(^\d{10}$)|(^\d{5}-\d{4}$)/       /// new RegExp('^[0-9]+$');
    // let regUsername = /^([a-zA-Z0-9 _-]+)$/;
    // const SSN_REGEX = /^[0-9 _-]*$/;new RegExp("^[0-9]{11}$");  
    // const SSN_REGEX = /(^\d{11}$)|(^\d{11}$)/       // /(^\d{9}$)|(^\d{9}$)|(^\d{9}-\d{4}$)/    
    // if (value.match(SSN_REGEX)) {
    //   return false;
    // } else {
    //   return true;
    // }
    if (value.length === 11) {
      return false;
    } else {
      return true;
    }
  };

  const validateZipcode = (value) => {
    //  let regexEmail = /^[0-9]/;
    // const regNum = new RegExp("^[0-9]{4,6}$");
    const regNum = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
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
            ele.state_code = ele.state_code;
            statesKey.push(ele);
          });
          setStates(statesKey);
        } else {
          //message);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoadinig(false);
      });
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

  const onChange = (e, fieldName) => {
    if (fieldName == "date") {
      let age = getAge(e);

      console.log("Age", age);
      if (age >= 18) {
        setDate(e);
        setAgeError(false)
      } else {
        setAgeError(true)
        setDate(e);
      }

    } //setDate(e.target.value);
    if (fieldName == "email") setEmail(e.target.value);
    if (fieldName == "phoneNumber") setPhoneNumber(e.target.value);
    if (fieldName == "SSN") {
      var val = e.target.value.replace(/\D/g, '');
      var newVal = '';
      var sizes = [3, 2, 4];

      for (var i in sizes) {
        if (val.length > sizes[i]) {
          newVal += val.substr(0, sizes[i]) + '-';
          val = val.substr(sizes[i]);
        }
        else
          break;
      }

      newVal += val;
      //this.value = newVal;
      setSSN(newVal);
    }
    if (fieldName == "add1") setAdd1(e.target.value);
    if (fieldName == "Occupation") setOccupation(e.target.value);
    if (fieldName == "name") setName(e.target.value);
    if (fieldName == "surname") setSurname(e.target.value);
    if (fieldName == "nation") setNation(e.target.value);
    if (fieldName == "states") setStates(e.target.value);

    if (fieldName == "town") setTown(e.target.value);
    if (fieldName == "address") setAddress(e.target.value);
    if (fieldName == "country") setCountry(e.target.value);
    if (fieldName == "zipcode") setZipcode(e.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();

      setValidated(true);
    } else {
    }
    const state_code = states?.filter(
      (item) => item.state_id === parseInt(nation)
    );
    let validateFlag =
      validateAlphabetic(name) ||
      validateAlphabetic(surname) ||
      validatePhoneNo(phoneNumber) ||
      validateAlphabetic(town) ||
      validateZipcode(zipcode) ||
      // validateDocNum(docNum) ||
      validateAddress(address) ||
      validateAddress(add1) ||
      validateAddress(Occupation) ||
      validateSSN(SSN)
    // validatePhoneNo(SSN)   /// later add the regex for ssn ponly

    if (validateFlag) {
      ErrorToast('Please check all the Fields')
      return;
    }
    let data = {
      userId: userData?.account.userId,
      email: email,
      firstName: name,
      lastName: surname,
      birthdate: moment(date).format("YYYY-MM-DD"),
      phoneNumber: `+1${phoneNumber}`,   // "+19165389862",   // 
      addressLine1: address,
      addressLine2: add1,
      city: town,
      state: state_code.length > 0 ? state_code[0].state_code : nation,
      country: country,
      zipCode: zipcode,
      // ssn: "001-02-0119",
      ssn: SSN, //"001-02-0112",
      occupation: Occupation,  // need to add these 2 
    };
    console.log('data', data)

    let data1 = {
      email: "user@example18.com",

      firstName: "John",

      lastName: "Wick",

      birthdate: "1986-08-09",

      phoneNumber: "+19165389862",

      addressLine1: "128 Developers Blvd.",

      addressLine2: "Apt. 5, Suite 5A-1204",

      city: "Las Vegas",

      state: "NV",

      country: "US",

      zipCode: "90210",

      ssn: "001-02-0112",

      occupation: "Teacher",
      userId: userData?.account.userId,
    };
    if (
      name != "" &&
      surname != "" &&
      phoneNumber != "" &&
      address != "" &&
      add1 != "" &&
      town != "" &&
      nation != "" &&
      SSN != "" &&
      Occupation != "" &&
      country != "" &&
      zipcode != ""
    ) {
      // UpdateUserDetail(data);
    } else {
      //  setError("* Fill All Fields");
    }
  };

  const UpdateUserDetail = (data) => {
    let url = `${PaymentEndpoints.apiBaseUrl}${PaymentEndpoints.api.ACTIVATE}`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    setIsLoadinig(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIsLoadinig(false);
        setIsLoadinig(false);

        if (result.status == "success") {
          //window.open('')
          //window.open(result.data.enrollmentUrl, "", "width=900, height=900");
          window.location.href = result.data.enrollmentUrl;
        } else {
          ErrorToast(result.message);
        }
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoadinig(false);
      });
  };

  return (
    <div>
      <Toaster></Toaster>
      {isLoading && <Loader spinner={true} visible={isLoading} />}
      {userData?.account?.fwUserId === null ? (
        <div className="container bg-color">
          <div className="inner-divspace">
            <div className="row">
              <div className="col-md-12">
                <div className="user-div-with">
                  <div>
                    <h3 style={{ color: "#b8b8b8" }}>Activate FabiCash</h3>
                  </div>
                </div>
              </div>

              <div className="mt-5 form-space-r">
                <Form
                  className="my-form-layout1"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="Surname">
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginRight: '20px  '
                        }}>
                          <Form.Label className="my-form-label">Email</Form.Label>

                        </div>

                        <Form.Control
                          type="text"
                          placeholder="Email"
                          value={userData?.email || email}
                          // onChange={(e) => onChange(e, "email")}
                          disabled={true}
                        />
                      </Form.Group>



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

                      <Form.Group className="mb-3" controlId="dob">
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
                          ageError && <Form.Label className="my-form-label" style={{ color: '#dc3545' }}>
                            Age should be more than 18 years.Please enter a valid Date of Birth
                          </Form.Label >
                        }

                      </Form.Group>

                      <Form.Group className="mb-3" controlId="phone">
                        <Form.Label className="my-form-label">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e) => onChange(e, "phoneNumber")}
                          maxLength={10}
                          onBlur={_onBlurCall}
                          required
                          isInvalid={
                            phoneNumber?.length > 0 && validatePhoneNo(phoneNumber)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter valid Phone number
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="phone">
                        <Form.Label className="my-form-label">
                          Social Security
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="eg: 001-02-0112"
                          value={SSN}
                          onChange={(e) => onChange(e, "SSN")}
                          maxLength={11}
                          onBlur={_onBlurCall}
                          required
                          isInvalid={
                            SSN?.length > 0 && validateSSN(SSN)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid SSN.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="phone">
                        <Form.Label className="my-form-label">
                          Occupation
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Occupation"
                          value={Occupation}
                          onChange={(e) => onChange(e, "Occupation")}
                          maxLength={10}

                          required

                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter valid Occupation
                        </Form.Control.Feedback>
                      </Form.Group>
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
                            value={nation}
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
                            Address Line 1
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
                        <Form.Group className="mb-3" controlId="Address">
                          <Form.Label className="my-form-label">
                            Address Line 2
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"

                            placeholder="Address Line 2"
                            value={add1}
                            onChange={(e) => onChange(e, "add1")}
                            isInvalid={
                              add1?.length > 0 && validateAddress(add1)
                            }
                            onBlur={_onBlurCall}
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
                              zipcode?.length > 0 && validateZipcode(zipcode)
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter valid zip code
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                          variant="primary"
                          className="save-btn"
                          type="submit"

                        >
                          ACTIVATE
                        </Button>
                      </div>
                    </div>
                    <div className="col-md-6">

                    </div>

                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      ) : (


        userData?.account?.fwUserId && <Enroll />

      )}
    </div>
  );
};

export default FebiCash;
