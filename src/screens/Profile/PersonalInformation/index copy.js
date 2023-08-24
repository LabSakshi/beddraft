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
import { SuccesToast } from "../../../components/Toast/message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
const PersonalInformation = () => {
  const state = useSelector((state) => state.auth);
  const User = state.user;
  const userDeatils = JSON.parse(localStorage.getItem("user"));
  const userData = User;
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState(userData.name);
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

  useEffect(() => {
    GetStates();
    GetPersonalQues();
    GetDocumnets();
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
    if (fieldName == "date") setDate(e); //setDate(e.target.value);
    if (fieldName == "name") setName(e.target.value);
    if (fieldName == "surname") setSurname(e.target.value);
    if (fieldName == "nation") setNation(e.target.value);
    if (fieldName == "states") setStates(e.target.value);

    if (fieldName == "town") setTown(e.target.value);
    if (fieldName == "address") setAddress(e.target.value);
    if (fieldName == "docnumber") setDocNum(e.target.value);
    if (fieldName == "secquestion") setsecretq(e.target.value);
    if (fieldName == "gender") setGender(e.target.value);
    if (fieldName == "doctype") setDoctype(e.target.value);
    if (fieldName == "personalres") setPersonalRes(e.target.value);
    if (fieldName == "country") setCountry(e.target.value);
    if (fieldName == "zipcode") setZipcode(e.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      //event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      // if (validated) {

      let dob = moment(date).format("YYYY-MM-DD");
      let data = {
        login: userData.login,
        name: name,
        surname: surname,
        documentId: docNum,
        documentTypeId: parseInt(doctype),
        birthDate: dob,
        nation: nation,
        country: country,
        town: town,
        address: address,
        personalQuestion: secretq,
        personalResponse: personalres,
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

  const UpdateUserDetail = (data) => {
    let url = `${endPoints.api.UPDATE_PERSONAL}`;
    setIsLoadinig(true);

    updateUser(url, data)
      .then((response) => {
        console.log("response", response);
        setIsLoadinig(false);
        //  setMessage(response.message);
        setMessage("Updated Successfully");
        SuccesToast("Updated Successfully");
        GetUserById();
      })
      .catch((error) => {
        setIsLoadinig(false);
        console.error(error);
      });
  };
  const GetUserById = () => {
    let url = `${endPoints.api.GET_BY_USERID}/${userData?.idUser}`;
    getAllData(url).then((response) => {
      // localStorage.setItem("user", JSON.stringify(response.data));
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
  const validateAlphabetic = (username) => {
    let regUsername = /^[A-Za-z]+$/;
    if (username.match(regUsername)) {
      return true;
    } else {
      return false;
    }
  };
  const validateNumeric = (emailAdress) => {
    let regexEmail = /^[0-9]*$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <div className="container bg-color">
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
                    accept="image/*"
                    type="file"
                    className="file-upload-btn"
                    onChange={onImageChange}
                  />
                </div>
              </div>
            </div>
            <Toaster />
            {isLoading && <Loader spinner={true} visible={isLoading} />}
            <div className="col-md-12">
              <div className="mt-5 form-space-r">
                <Form
                  className="my-form-layout1"
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-12">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="Surname">
                          <Form.Label className="my-form-label">Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Email"
                            value={email}
                            disabled={true}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="my-form-label">
                            First Name
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => onChange(e, "name")}
                            style={{ textTransform: "capitalize" }}
                            isInvalid={
                              name?.length < 2
                                ? true
                                : !validateAlphabetic(name)
                                  ? true
                                  : false
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter valid firstname
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="Surname">
                          <Form.Label className="my-form-label">
                            Last Name{" "}
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Surname"
                            value={surname}
                            onChange={(e) => onChange(e, "surname")}
                            style={{ textTransform: "capitalize" }}
                            isInvalid={
                              surname?.length < 2
                                ? true
                                : !validateAlphabetic(surname)
                                  ? true
                                  : false
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter lastname
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="col-md-4">
                        <Form.Label className="my-form-label">Gender</Form.Label>
                        <div className="custom-dropdown">
                          <Form.Control
                            required
                            as="select"
                            type="select"
                            name="payment_method"
                            onChange={(e) => onChange(e, "gender")}
                            value={gender}
                            isInvalid={gender == "" ? true : false}
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
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3"></Form.Group>
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
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Label className="my-form-label">State</Form.Label>
                        <div className="custom-dropdown">
                          <Form.Control
                            required
                            as="select"
                            type="select"
                            name="payment_method"
                            value={nation}
                            onChange={(e) => onChange(e, "nation")}
                            isInvalid={nation == "" ? true : false}
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
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="col-md-4">
                        <Form.Label
                          className="my-form-label"
                          style={{ marginTop: "17px" }}
                        >
                          Country
                        </Form.Label>
                        <div className="custom-dropdown">
                          <Form.Control
                            required
                            as="select"
                            type="select"
                            name="payment_method"
                            value={country}
                            onChange={(e) => onChange(e, "country")}
                            isInvalid={country == "" ? true : false}
                          >
                            <option value="">Country</option>
                            <option value="US">US</option>
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
                            Please Select country
                          </Form.Control.Feedback>
                          <span className="custom-dropdown-arrow">
                            <FiChevronDown />
                          </span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="Town">
                          <Form.Label className="my-form-label">City</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="City"
                            value={town}
                            onChange={(e) => onChange(e, "town")}
                            isInvalid={
                              town?.length < 2
                                ? true
                                : !validateAlphabetic(town)
                                  ? true
                                  : false
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter town
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>

                      <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="Address">
                          <Form.Label className="my-form-label">
                            Address
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => onChange(e, "address")}
                            isInvalid={address?.length < 1 ? true : false}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter address
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="col-md-4">
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
                            required
                            isInvalid={
                              zipcode?.length < 2
                                ? true
                                : !validateNumeric(zipcode)
                                  ? true
                                  : false
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter zip code
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Label className="my-form-label">
                          Document Type
                        </Form.Label>
                        <div className="custom-dropdown">
                          <Form.Control
                            required
                            as="select"
                            type="select"
                            name="payment_method"
                            value={doctype}
                            onChange={(e) => onChange(e, "doctype")}
                            isInvalid={doctype == "" ? true : false}
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
                      </div>

                      <div className="col-md-4">
                        <Form.Group className="mb-3" controlId="Document number">
                          <Form.Label className="my-form-label">
                            Document Number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Document number"
                            value={docNum}
                            onChange={(e) => onChange(e, "docnumber")}
                            isInvalid={docNum?.length < 2 ? true : false}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter document number
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="col-md-4">
                        <Form.Label className="my-form-label">
                          Security Question
                        </Form.Label>
                        <div className="custom-dropdown">
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
                      </div>
                      <div className="col-md-4">
                        <Form.Group
                          className="mb-3"
                          controlId="Secret question"
                        >
                          <Form.Label className="my-form-label">
                            Personal Response
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Personal response"
                            value={personalres}
                            onChange={(e) => onChange(e, "personalres")}
                            isInvalid={personalres?.length < 1 ? true : false}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter personal response
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Button
                          variant="primary"
                          className="save-btn"
                          type="submit"
                        // onClick={handleSubmit}
                        >
                          Save Changes
                        </Button>
                      </div>

                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
