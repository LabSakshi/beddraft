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

const FebiCash = () => {
  // const User = useSelector((state) => state).auth?.user?.data;

  // const userDeatils = JSON.parse(localStorage.getItem("user"));
  // const userData = userDeatils;
  const state = useSelector((state) => state.auth);
  const userData = state.user;
  console.log('userData',userData)

  const [firstname, setfirstName] = useState(userData?.name || "");
  const [lastname, setlastName] = useState(userData?.surname || "");
  const [date, setDate] = useState(userData?.birthDate || "");
  
  const [State, setState] = useState(userData?.country || "");
  const [city, setCity] = useState(userData?.town || "");
  const [SSN, setSSN] = useState(userData?.ssn || "");
  const [address, setAddress] = useState(userData?.address || "");
  const [PhNumber, setPhNumber] = useState(userData?.mobile || "");
  const [Email, setEmail] = useState(userData?.email || "");
  const [add1, setAdd1] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [zipcode, setZipcode] = useState(userData?.zipCode || "");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoadinig] = useState(false);

  const [nation, setNation] = useState(userData?.nation || "");
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState(userData?.country || "");


  useEffect(() => {
    GetStates();

    setEmail(userData?.email || "");

    setNation(userData?.nation || "");
    setCountry(userData?.country || "");
    setZipcode(userData?.zipCode || "");
    setCity(userData?.town || "")
    setfirstName(userData?.name || "");
    setlastName(userData?.surname || "");
    setDate(userData?.birthDate || "")
    setAddress(userData?.address || "")

    // return () => {
    //   dispatch({
    //     type: Actions.CLEAR_SELECTED,
    //   });
    // };
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

  const onChange = (e, fieldName) => {
    setError("");
    if (fieldName == "date") setDate(e); //setDate(e.target.value);
    if (fieldName == "firstname") setfirstName(e.target.value);
    if (fieldName == "lastname") setlastName(e.target.value);
    if (fieldName == "State") setState(e.target.value);
    if (fieldName == "nation") setNation(e.target.value);
    if (fieldName == "city") setCity(e.target.value);
    if (fieldName == "Country") setCountry(e.target.value);
    if (fieldName == "SSN") setSSN(e.target.value);
    if (fieldName == "address") setAddress(e.target.value);
    if (fieldName == "PhNumber") setPhNumber(e.target.value);
    if (fieldName == "Email") setEmail(e.target.value);
    if (fieldName == "add1") setAdd1(e.target.value);
    if (fieldName == "Occupation") setOccupation(e.target.value);
    if (fieldName == "zipcode") setZipcode(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
    }
    const state_code = states?.filter(
      (item) => item.state_id === parseInt(nation)
    );

    setValidated(true);
    let data = {
      userId: userData?.account.userId,
      email: Email,
      firstName: firstname,
      lastName: lastname,
      birthdate: moment(date).format("YYYY-MM-DD"),
      phoneNumber: `+1${PhNumber}`,
      addressLine1: address,
      addressLine2: add1,
      city: city,
      state: state_code.length > 0 ? state_code[0].state_code : nation,
      country: country,
      zipCode: zipcode,
      ssn: SSN,
      occupation: Occupation,
    };

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
      firstname != "" &&
      lastname != "" &&
      PhNumber != "" &&
      address != "" &&
      add1 != "" &&
      city != "" &&
      nation != "" &&
      SSN != "" &&
      Occupation != "" &&
      country != "" &&
      zipcode != ""
    ) {
      UpdateUserDetail(data);
    } else {
     // setError("* Fill All Fields");
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
                    <h3 style={{ color: "#b8b8b8" }}>Activate Febi Cash</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mt-5 form-space-r">
                  <Form
                    className="my-form-layout1"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group className="mb-3" controlId="Email">
                      <Form.Label className="my-form-label">Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        value={Email}
                        onChange={(e) => onChange(e, "Email")}
                        required
                        disabled
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="First Name">
                      <Form.Label className="my-form-label">
                        First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => onChange(e, "firstname")}
                        required
                        disabled
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Firstname.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Last Name">
                      <Form.Label className="my-form-label">
                        Surname{" "}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => onChange(e, "lastname")}
                        required
                        disabled
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
                      /> */}

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
                        //  onBlur={this.validateDob}
                        showMonthDropdown
                        useShortMonthInDropdown
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={250}
                        autoComplete={"off"}
                        required
                        disabled
                        minDate={new Date('01-01-1940')}
                        maxDate={new Date('01-01-2031')}
                      // readOnly={true}
                      //maxDate={moment()}
                      />

                      <Form.Control.Feedback type="invalid">
                        Please provide a valid DOB.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Phone Number">
                      <Form.Label className="my-form-label">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        maxLength={10}
                        placeholder="Phone Number"
                        value={PhNumber}
                        onChange={(e) => onChange(e, "PhNumber")}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Phone Number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mt-5 form-space-m">
                  <Form
                    className="my-form-layout1"
                    noValidate
                    validated={validated}
                  >
                    <Form.Group className="mb-3" controlId="Address Line 1">
                      <Form.Label className="my-form-label">
                        Address Line 1
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address Line 1"
                        value={address}
                        onChange={(e) => onChange(e, "address")}
                        required
                        disabled
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Address.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Address Line 2">
                      <Form.Label className="my-form-label">
                        Address Line 2
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address Line 2"
                        value={add1}
                        onChange={(e) => onChange(e, "add1")}
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
                        disabled
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid City.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Label className="my-form-label">State</Form.Label>
                    <div className="custom-dropdown">
                      <Form.Select
                        style={{ backgroundImage: "none" }}
                        aria-label="Default select example"
                        value={nation}
                        disabled
                        onChange={(e) => onChange(e, "nation")}
                      >
                        <option>State</option>

                        {states.map((item, index) => {
                          return (
                            <option value={item.state_id}>
                              {item.state_name}
                            </option>
                          );
                        })}
                      </Form.Select>
                      <span className="custom-dropdown-arrow">
                        <FiChevronDown />
                      </span>
                    </div>
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
                    <Form.Label
                      className="my-form-label"
                      style={{ marginTop: "18px" }}
                    >
                      Country
                    </Form.Label>
                    <div className="custom-dropdown">
                      <Form.Select
                      disabled
                        style={{ backgroundImage: "none" }}
                        aria-label="Default select example"
                        value={country}
                        onChange={(e) => onChange(e, "country")}
                      >
                        <option>Country</option>
                        <option value="US">US</option>
                      </Form.Select>
                      <span className="custom-dropdown-arrow">
                        <FiChevronDown />
                      </span>
                    </div>
                    {/* <Form.Group className="mb-3" controlId="Country">
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => onChange(e, "Country")}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Country.
                      </Form.Control.Feedback>
                    </Form.Group> */}
                  </Form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mt-5 form-space-l">
                  <Form
                    className="my-form-layout1"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group className="mb-3" controlId="Zip Code">
                      <Form.Label className="my-form-label">
                        Zip Code
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Zip Code"
                        value={zipcode}
                        disabled
                        onChange={(e) => onChange(e, "zipcode")}
                        maxLength={5}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Zip Code.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="SSN">
                      <Form.Label className="my-form-label">SSN</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="SSN"
                        value={SSN}
                        onChange={(e) => onChange(e, "SSN")}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid SSN.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Occupation">
                      <Form.Label className="my-form-label">
                        Occupation
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Occupation"
                        value={Occupation}
                        onChange={(e) => onChange(e, "Occupation")}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid occupation.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="user-upload">
                      <h3>{error}</h3>
                    </div>

                    <Button
                      variant="primary"
                      className="save-btn"
                      type="submit"
                    >
                      ACTIVATE
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        null
        // <Enroll />
      )}
    </div>
  );
};

export default FebiCash;
