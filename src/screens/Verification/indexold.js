import React, { useEffect, useState } from "react";
import "./Verification.css";
import { FaRegUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { addData, getAllData } from "../../Utility/API";
import { endPoints, PaymentEndpoints } from "../../constant/Environment";
import { useNavigate } from "react-router-dom";

import Toaster from "../../components/Toast";
import Loader from "../../components/Loader";
import { ErrorToast, SuccesToast } from "../../components/Toast/message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
const Verification = () => {
  const state = useSelector((state) => state.auth);
  const userData = state.user;
  const userDeatils = JSON.parse(localStorage.getItem("user"));
  const userData1 = userDeatils;
  const [firstname, setfirstName] = useState(userData?.name || "");
  const [lastname, setlastName] = useState(userData?.surname || "");
  const [date, setDate] = useState(userData?.birthDate || "");
  const [city, setCity] = useState(userData?.town || "");
  const [address, setAddress] = useState(userData?.address || "");
  const [PhNumber, setPhNumber] = useState(userData?.mobile || "");
  const [Email, setEmail] = useState(userData?.email || "");
  const [zipcode, setZipcode] = useState(userData.zipCode || "");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoadinig] = useState(false);
  const [nation, setNation] = useState(userData?.nation || "");
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState(userData?.country || "");
  const [SSN, setSSN] = useState(userData?.ssn || "");
  const [gender, setGender] = useState(userData?.sex || "");
  const [ageError ,setAgeError ] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    setGender(userData?.sex || "");
    setNation(userData?.nation || "");
    setCountry(userData?.country || "");
    setZipcode(userData?.zipCode || "");
    setCity(userData?.town || "")
    setfirstName(userData?.name || "");
    setlastName(userData?.surname || "");
    setDate(userData?.birthDate || "")
    setAddress(userData?.address || "")
    setSSN(userData?.ssn || "")

  }, [userData]);
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
      let age =  getAge(e);
      
      console.log("Age", age);
      if(age >= 21){
        setDate(e);
        setAgeError(false)
      }else{
        setAgeError(true)
        setDate(e);
      }
    
    } //setDate(e.target.value);
    //if (fieldName == "date") setDate(e);
    if (fieldName == "firstname") setfirstName(e.target.value);
    if (fieldName == "lastname") setlastName(e.target.value);
    //  if (fieldName == "State") setState(e.target.value);
    if (fieldName == "city") setCity(e.target.value);
    if (fieldName == "SSN") setSSN(e.target.value);
    if (fieldName == "address") setAddress(e.target.value);
    if (fieldName == "PhNumber") setPhNumber(e.target.value);
    if (fieldName == "zipcode") setZipcode(e.target.value);
    if (fieldName == "nation") setNation(e.target.value);
    if (fieldName == "states") setStates(e.target.value);
    if (fieldName == "country") setCountry(e.target.value);
    if (fieldName == "SSN") setSSN(e.target.value);
    if (fieldName == "gender") setGender(e.target.value);
  };
  useEffect(() => {
    GetStates();
  }, []);
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

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(true);
      // let data = {
      //   login: User?.login,
      //   name: firstname,
      //   surname: lastname,
      //   birthDate: date,
      //   phone: null,
      //   mobile: PhNumber,
      //   nationBirth: state,
      //   townBirth: city,
      //   address: address,
      //   zipCode: zipcode,
      // };
      // UpdateUserDetail(data);
      ssnValidate();
    }
  };
  const ssnValidate = async (user) => {
    //ssnVerification
    let url = `${endPoints.api.ssnVerification}`;
    let dob = moment(date).format("YYYY-MM-DD");
    const ssnData = {
      accountStrategyId: 785,
      accountId: null,
      userId: userData?.idUser,
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
          gender: userData?.sex,
          mobilePhoneNumber: PhNumber,
          residentialAddress: [
            {
              addressLine1: address,
              addressLine2: `${city}`, // ${nation}`,
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
    setIsLoadinig(true);
    await addData(url, ssnData)
      .then((response) => {
        setIsLoadinig(false);
        if (response.data.status === "success") {
          SuccesToast("Verified Successfully Please login.");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          ErrorToast(response.data.message);
        }
      })
      .catch((error) => {
        setIsLoadinig(false);
        ErrorToast("Some Thing Went Wrong Please try again");
        console.error(error);
      });
  };
  const UpdateUserDetail = (data) => {
    let url = `${endPoints.api.VERIFICATION_ENDPOINT}`;
    setIsLoadinig(true);
    addData(url, data)
      .then((res) => {
        setIsLoadinig(false);
        const { status, message } = res.data;
        if (status === "success") {
          navigate("/Home");
          SuccesToast("Updated");
        } else {
          setMessage(message);
          ErrorToast(message);
        }
      })
      .catch((err) => {
        setIsLoadinig(false);
        console.log(err);
      });
  };
  const validateNumeric = (value) => {
    //  let regexEmail = /^[0-9]/;
      const regNum = new RegExp('^[0-9]+$');
      if (value.match(regNum)) {
        return false;
      } else {
        return true;
      }
    };

  return (
    <div>
      <section>
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
                <h2 style={{justifyContent: 'center',
    display: 'flex',
    fontSize:' 1.8rem'}}>Verification Form</h2>
        <Form.Group className="mb-3" controlId="Email">
                  <Form.Label className="my-form-label">Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={userData?.email}
                    // onChange={(e) => onChange(e, "email")}
                    // isInvalid={Email.length > 2 ? !validateEmail(Email) : false}
                    required
                    disabled
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                  <Form.Label className="my-form-label">UserName</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={userData?.login}
                    // onChange={(e) => onChange(e, "email")}
                    // isInvalid={Email.length > 2 ? !validateEmail(Email) : false}
                    required
                    disabled
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
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
                <Form.Label className="my-form-label"   style={{ marginTop: "17px" }}>Gender</Form.Label>
                    <div className="custom-dropdown">
                      <Form.Control
                        required
                        as="select"
                        type="select"
                        onChange={(e) => onChange(e, "gender")}
                        value={gender}
                        isInvalid={(gender == "") ? true : false}
                       // disabled={(kycStatus == 2 || kycStatus == 4) ? true : false }
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
          
                <Form.Group className="mb-3" controlId="Birth">
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
                    //  onBlur={this.validateDob}
                    showMonthDropdown
                    useShortMonthInDropdown
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={250}
                    autoComplete={"off"}
                    required
                    minDate={new Date("01-01-1940")}
                    maxDate={new Date("01-01-2031")}


                  />
                    {
                        ageError && <Form.Label  className="my-form-label" style={{color:'#dc3545'}}>
                         Age should be more than 21 years.Please enter a valid Date of Birth
                         </Form.Label >
                        }
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Mobile Number.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Address">
                  <Form.Label className="my-form-label">
                    Street Address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=" Street Address"
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
                <Form.Label className="my-form-label">State</Form.Label>
                <div className="custom-dropdown">
                  <Form.Select
                    aria-label="Default select example"
                    value={nation}
                    onChange={(e) => onChange(e, "nation")}
                    style={{ backgroundImage: "none" }}
                  >
                    <option>State</option>

                    {states.map((item, index) => {
                      return (
                        <option value={item.state_id}>{item.state_name}</option>
                      );
                    })}
                  </Form.Select>
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
                <div className="custom-dropdown">
                  <Form.Select
                    aria-label="Default select example"
                    value={country}
                    onChange={(e) => onChange(e, "country")}
                    style={{ backgroundImage: "none" }}
                  >
                    <option>Country</option>
                    <option value="US">US</option>
                  </Form.Select>
                  <span className="custom-dropdown-arrow">
                    <FiChevronDown />
                  </span>
                </div>
                <Form.Group className="mb-3" controlId="Zip Code">
                  <Form.Label className="my-form-label">Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={(e) => onChange(e, "zipcode")}
                    maxLength={5}
                    required
                    isInvalid={
                      zipcode?.length > 0 && validateNumeric(zipcode)
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter valid zipcode
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

                {/* <Form.Group className="mb-3" controlId="State">
                    <Form.Control
                      type="text"
                      placeholder="State"
                      value={State}
                      onChange={(e) => onChange(e, "State")}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid State.
                    </Form.Control.Feedback>
                  </Form.Group> */}

                <div className="user-upload">
                  <h3>{error}</h3>
                </div>

                <Button variant="primary" className="save-btn" type="submit">
                  VERIFY
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verification;
