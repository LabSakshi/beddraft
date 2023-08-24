import React, { useEffect, useState } from "react";
import "./Wallet.css";
import { useSelector, useDispatch } from "react-redux";
import { endPoints, PaymentEndpoints } from "../../../constant/Environment";
import { getAllData, updateUser,getData,updateBetUser } from "../../../Utility/API";
import { Actions } from "../../../redux/Actions/Actions";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { SuccesToast, ErrorToast } from "../../../components/Toast/message";
import { Form, Button, Table  } from "react-bootstrap";
import { CgChevronDown } from "react-icons/cg";
import moment from "moment-timezone";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiChevronDown } from "react-icons/fi";
import Enroll from "../../../screens/Profile/Enroll/index"
import { addData } from "../../../Utility/API";

const UserWallet = () => {
  const state = useSelector((state) => state.auth);
  const userData = state.user;
  const navigate = useNavigate();
  const { auth, sidebar } = state;

  const dispatch = useDispatch();
  const [isLoading, setIsLoadinig] = useState(false);
  const [transactionList, setTransactionList] = useState([]);
  const [depositAmt, setDepositAmt] = useState("");
  const [withdrawAmt, setWithdrawAmt] = useState("");
  const walletUserId = JSON.parse(localStorage.getItem("walletUserId"));
  const userDetials = JSON.parse(localStorage.getItem("user"));

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

  const[acno , setacno] = useState("");

  const[cacno , setcacno] = useState("");

  const[amount , setamount] = useState("");

  const[routing , setrouting] = useState("");

  const [town, setTown] = useState(userData?.town || "");
  const [address, setAddress] = useState(userData?.address || "");
  const [docNum, setDocNum] = useState(userData?.documentId || "");

  const [fwdId, setFwdID] = useState(userData?.account?.fwUserId || "");

  const [ageError, setAgeError] = useState(false);

  const[fabi , setfabi] = useState("");

  const[display , setdisplay] = useState(true);

  useEffect(() => {

    fetbalance();
    GetStates();
    setFwdID(userData?.account?.fwUserId);
    setEmail(userData?.email || "");

    setNation(userData?.nation || "");
    setCountry(userData?.country || "");
    setZipcode(userData?.zipCode || "");
    setTown(userData?.town || "");
    setName(userData?.name || "");
    setSurname(userData?.surname || "");
    setDate(userData?.birthDate || "");
    setAddress(userData?.address || "");
  }, [userData]);

  // console.log(userData);

  let accountname = userData.name;

  // let accoundid = userData?.accountId;

  let accoundid = state?.user?.idUser;

  // console.log(state?.user?.idUser);

  // console.log("userData",userData);

  useEffect(() => {
    // fetbalance();
    GetUserById();
    GetTrans();

  }, []);

  // const morning = () => {

  //      console.log("wallet");
  // }



  const GetTrans = () => {
    if (userDetials?.idUser) {
      let url = `${endPoints.api.transactions}/${userDetials?.idUser}`;
      getAllData(url)
        .then((response) => {
          if (response.status == "success") {
            setTransactionList(response.data);
          }
          //
        })
        .catch((err) => {
          console.log("errr get trrans");
        });
    }
  };

  const GetUserById = () => {
    if (userDetials?.idUser) {
      let url = `${endPoints.api.GET_BY_USERID}/${userDetials?.idUser}`;
      getAllData(url).then((response) => {
        dispatch({
          type: Actions.LOGIN,
          data: { user: response.data },
        });
      });
    }
  };
  const Deposit = () => {
    console.log("userData", userData);
    let activeAccount = fwdId === null ? true : false;
    if (activeAccount) {
      ErrorToast(
        "Your wallet is not currently activated. Please activate your wallet."
      );
    } else {
      let data = {
        userId: userData?.idUser,
        walletUserId: fwdId,
        transferType: "Withdrawal",
        amount: depositAmt,
      };
      console.log("data", data);
      depositWithDraw(data);
    }
  };

  const Withdraw = () => {
    let activeAccount = fwdId === null ? true : false;
    if (activeAccount) {
      ErrorToast(
        "Please set up your wallet in order to use this functionality"
      );
    } else {
      let data = {
        userId: userData?.idUser,
        walletUserId: fwdId,
        transferType: "Deposit",
        amount: withdrawAmt,
      };
      console.log("Withdraw", data);
      depositWithDraw(data);
    }
  };

  const depositWithDraw = (data) => {
    let url = `${PaymentEndpoints.apiBaseUrl}${PaymentEndpoints.api.deposit_WithDraw}`;
    setIsLoadinig(true);

    updateBetUser(url, data)
      .then((response) => {
        setIsLoadinig(false);
        if (response.status === "success") {
          let msg =
            data.transferType === "Deposit"
              ? "Amount Withdrawn Succesfully"
              : "Amount Deposit Succesfully"; //Deposit
          SuccesToast(msg);
          setDepositAmt("");
          setWithdrawAmt("");
          GetTrans();
        } else {
          ErrorToast(response?.message);
        }

        GetUserById();
      })
      .catch((error) => {
        setIsLoadinig(false);
        console.error(error);
      });
  };

  const addMoney = () => {
    navigate("/enroll");
  };

  function fetbalance() {

    // console.log("mydetil" , userDetials);

    let url = `${PaymentEndpoints.apiBaseUrl}${PaymentEndpoints.api.fabiwallet}/${fwdId}`;

    // console.log(url);



    getData(url)
      .then((response) => {
        console.log(response.data.balance);
        setfabi(response.data.balance);
        // setdata(response.markets)
        // console.log("my response" ,  response);
        // setTimeout(fetchGameData, 10000);
      })
      .catch((error) => {
        setIsLoadinig(false);
        console.error(error);
      });
  }

  // fabicash Ui

  const _onBlurCall = () => {
    let validateFlag =
      validateAlphabetic(name) ||
      validateAlphabetic(surname) ||
      validateAlphabetic(town) ||
      validateNumeric(zipcode) ||
      validateDocNum(docNum) ||
      validateAddress(address) ||
      validatePhoneNo(phoneNumber) ||
      validateSSN(SSN);

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
    let regUsername = /[A-Za-z0-9'\.\-\s\,]/;
    if (value.match(regUsername)) {
      return false;
    } else {
      return true;
    }
  };
  const validateAlphabetic = (value) => {
    let regUsername = /^[a-zA-Z][a-zA-Z .,'-]*$/; // /^[A-Za-z]+$/;
    if (value.match(regUsername)) {
      return false;
    } else {
      return true;
    }
  };
  const validateNumeric = (value) => {
    //  let regexEmail = /^[0-9]/;
    const regNum = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/; /// new RegExp('^[0-9]+$');
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
  };
  const validatePhoneNo = (value) => {
    const regNum = /(^\d{10}$)|(^\d{5}-\d{4}$)/; /// new RegExp('^[0-9]+$');
    if (value.match(regNum)) {
      return false;
    } else {
      return true;
    }
  };
  const validateSSN = (value) => {
    if (value.length === 11) {
      return false;
    } else {
      return true;
    }
  };

  const validateZipcode = (value) => {
    const regNum = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;
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
        setAgeError(false);
      } else {
        setAgeError(true);
        setDate(e);
      }
    } //setDate(e.target.value);
    if (fieldName == "email") setEmail(e.target.value);
    if (fieldName == "phoneNumber") setPhoneNumber(e.target.value);
    if (fieldName == "SSN") {
      var val = e.target.value.replace(/\D/g, "");
      var newVal = "";
      var sizes = [3, 2, 4];

      for (var i in sizes) {
        if (val.length > sizes[i]) {
          newVal += val.substr(0, sizes[i]) + "-";
          val = val.substr(sizes[i]);
        } else break;
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
      // validateAddress(add1) ||
      validateAddress(Occupation) ||
      validateSSN(SSN);
    // validatePhoneNo(SSN)   /// later add the regex for ssn ponly

    if (validateFlag) {
      ErrorToast("To succesfully activate your wallet, please check your information and try again.");
      return;
    }
    let data = {
      userId: userData?.account.userId,
      email: email,
      firstName: name,
      lastName: surname,
      birthdate: moment(date).format("YYYY-MM-DD"),
      phoneNumber: `+1${phoneNumber}`, // "+19165389862",   //
      addressLine1: address,
      addressLine2: add1,
      city: town,
      state: state_code.length > 0 ? state_code[0].state_code : nation,
      country: country,
      zipCode: zipcode,
      // ssn: "001-02-0119",
      ssn: SSN, //"001-02-0112",
      occupation: Occupation, // need to add these 2
    };
    // console.log("data", data);

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
     // add1 == "" &&
      town != "" &&
      nation != "" &&
      SSN != "" &&
      Occupation != "" &&
      country != "" &&
      zipcode != ""
    ) {
      UpdateUserDetail(data);
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

   const facno = (e) => {

    const myacno = e.target.value;

    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(myacno)) {
     
        setacno(myacno);
      }
   }

   const fcacno = (e) => {

    const mycacno = e.target.value;

    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(mycacno)) {
     
        setcacno(mycacno);
      }
  }

  const famount = (e) => {

    const myamount = e.target.value;

    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(myamount)) {
     
      setamount(myamount);
      }
    
  }

  const frouting = (e) => {

    const myrouting = e.target.value;

    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(myrouting)) {
     
      setrouting(myrouting);
      }
  }

  const allvalues = {

    "id_user": accoundid,
    "name": accountname,
    "amount": amount,
    "account_number": acno,
    "routing_number": routing,
    "id": 0
  }


  //  console.log(userData);

  const withdrawbank = async(event) => {

    // console.log(accountname , amount , acno , cacno);

    if( accountname != "" && amount != "" && acno != "" && cacno != "")
       {

            if(acno===cacno){

              if(amount >= 10){


           let url = `${endPoints.apiBaseUrl}${endPoints.api.banking_withdraw}`;

          //  console.log(url);

           setIsLoadinig(true);

        await addData(url, allvalues)
           .then((response) => {
        // console.log(response.status)

        // console.log(response);

        if (response.data.status === "success") {

                 SuccesToast(response.data.message);
                 setacno("");
                 setcacno("");
                 setamount("");
                 setrouting("");
                 GetTrans();
                 setIsLoadinig(false);
                //  userData?.account?.balance - amount;
        }

        else {
          ErrorToast(response.data.message);
          setIsLoadinig(false);
        }

      }).catch((error) => {
      
        ErrorToast("Some Thing Went Wrong Please try again");
        console.error(error);
    });

    }

    else{

      ErrorToast("Minimum withdrawal amount is $10.");
    }
      
       }

  else{

    ErrorToast("Account number provided does not match. Please check and try again.");  
    }
  }

  else{
    ErrorToast("Your request is incomplete. Please check your details and try again."); 
  }
      

  }



  return (
    <div>
      <div className="container bg-color-pi">
        <div className="inner-divspace">
          <Toaster />
          {isLoading && <Loader spinner={true} visible={isLoading} />}
          {fwdId == null ? (
            <>
              <div className="row">
                <div className="col-md-12">
                  <div className="user-div-with">
                    <div>
                      <h3
                        style={{
                          color: "#0D3862",
                          textAlign: "center",
                          fontSize: "30px",
                        }}
                      >
                        Activate Your Wallet
                      </h3>
                      <div style={{ color: "#0D3862", marginTop: "20px" }}>
                        BettDraft has teamed up with FabiWallet to process your
                        Deposits and Withdrawals. You can easily deposit using
                        your Visa or Mastercard or at hundreds of locations
                        nationwide. Plus, get instant withdrawals! To get
                        started, simply click the Activate button below.
                        Activating your account is quick and easy!
                      </div>
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
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "20px  ",
                            }}
                          >
                            <Form.Label className="my-form-label">
                              Email
                            </Form.Label>
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
                            isInvalid={
                              name?.length > 0 && validateAlphabetic(name)
                            }
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
                          <Form.Control
                            required
                            type="text"
                            placeholder="Surname"
                            value={date}
                           
                          
                            disabled={true}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter valid lastname
                          </Form.Control.Feedback>
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="dob">
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
                            disabled={true}
                          />
                          {ageError && (
                            <Form.Label
                              className="my-form-label"
                              style={{ color: "#dc3545" }}
                            >
                              Age should be more than 18 years.Please enter a
                              valid Date of Birth
                            </Form.Label>
                          )}
                        </Form.Group> */}

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
                              phoneNumber?.length > 0 &&
                              validatePhoneNo(phoneNumber)
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
                            isInvalid={SSN?.length > 0 && validateSSN(SSN)}
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
                            maxLength={30}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter valid Occupation
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <Form.Label className="my-form-label">
                            State
                          </Form.Label>
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
                            <Form.Label className="my-form-label ">
                              City
                            </Form.Label>
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
                              // isInvalid={
                              //   add1?.length > 0 && validateAddress(add1)
                              // }
                              // onBlur={_onBlurCall}
                            />
                            {/* <Form.Control.Feedback type="invalid">
                              Please enter valid address
                            </Form.Control.Feedback> */}
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
                      <div className="col-md-6"></div>
                    </div>
                  </Form>
                </div>
              </div>
            </>
          ) : (

            <div className="row">
              <div className="col-lg-12 col-sm-12 p-0">
                <div className="row gap-1">
                  <div className="col-lg-5"
                  // style={{paddingRight:"0px"}}
                  >
                    <button className="btn btn-success green-darkbtn flex-between"
                    style={{width:"100%"}}
                    onClick={()=>{
                         setdisplay(true);
                    }}
                    >
                     <span className="m-heading-white"> BettDraft Balance - $ {userData?.account?.balance}</span> <a style={{fontSize:"14px" , marginLeft:"15px"}}><u>Manage account</u></a></button>
                  </div>
                
                  <div className="col-lg-5"
                  style={{
                    paddingBottom:"0px",
                  //  paddingLeft:"0px" , paddingRight:"0px"
                  }}
                  >
                    <button className="btn btn-primary dark-blue flex-between" 
                    style={{width:"100%" , paddingTop:"14px"}}
                    onClick={() => {
                      addMoney();
                      // setdisplay(false);
                    }}
                    >
                    <span className="m-heading-white">  Wallet Balance - $ {fabi} </span>
                      <a style={{fontSize:"14px" , marginLeft:"15px" , color:"white!important"}} ><u style={{color:"white"}}>Manage account</u></a></button>
                  </div>

                  {/* <div className="col-lg-2"
                  style={{paddingLeft:"0px"}}
                  >
                    <button className="btn btn-primary dark-blue flex-between" 
                    style={{width:"130%", paddingTop:"14px" , textAlign:"center"}}
                    onClick={() => {
                      setdisplay(false);
                    }}
                    >
                    <span className="m-heading-white" style={{textAlign:"center"}}>Bank Withdrawal</span></button>
                  </div> */}


                </div>
              </div>

              <div className="mainwallettab" style={{display:display?"":"none"}}>
              <div className="col-md-12">
                <div className="form-space my-betuser1 custom-stickydiv">
                  <form className="static-form form-style-20 wallet-user no-border">

                    {/* <Form.Group className="mb-3" controlId="Name">
                      <h3 style={{ color: "#dcbf5e" }}>
                        {userData?.name} {userData?.surname}
                      </h3>
                    </Form.Group> */}

                  <Form.Group className="mb-3 mt-4" controlId="Amount">
                      <h4 className="bett-h4 c-blue-color bet-balance">
                       Current BettDraft Balance : <span className="c-green-color">$ {userData?.account?.balance}</span>
                      </h4>
                      <span className="small-italicb">The balance can be used to enter contests</span>
                    </Form.Group>
                  </form>

                  <Form className="my-form-layout1 mt-5">
                    <h4 className="bett-h4 c-green-color mb-4">
                      <b className="text-depsoit">Deposit Funds</b>
                    </h4>
                    <span className="bett-h4 c-blue-color">Add funds to your BettDraft Balance:</span>

                    <div className="withdraw-input mt-3 row">
                    <div className="col-lg-3">
                      <Form.Group
                        className="p-top5"
                        controlId="Amount"
                      >
                        <Form.Control
                          className="text-left text-dark input-green"
                          type="text"
                          placeholder=" "
                          style={{background:"#fff !important" , color:"#111111",marginBottom: '10px'}}
                          value={depositAmt}
                          onChange={(e) => {
                            var numbers = /^\d*\.?\d{0,2}$/;
                            if (
                              e.target.value != "" &&
                              e.target.value.match(numbers)
                            ) {
                              setDepositAmt(e.target.value);
                            } else if (e.target.value == "") {
                              setDepositAmt(e.target.value);
                            } else {
                              ErrorToast("Enter Only numeric value");
                            }
                          }}
                        />
                         <span class="input-boxsymbol">$</span>
                      </Form.Group>
                     
                      </div>
                      

                      <div className="col-lg-3" style={{marginTop:"-12px"}}>
                      <Button 
                        style={{width:"100%" , padding:"14px"}}
                        variant="success"
                        className="save-btn2 green-button"
                        //  disabled={walletUserId === null ? true : false}
                        onClick={() => {
                          Deposit();
                        }}
                      >
                        Add to my BettDraft Balance
                      </Button>
                      </div>
                      <div className="col-lg-6" >
                     {/* <span className="normal-text"> Maximum available to transfer is : <b> ${fabi}</b></span> */}
                      </div>

                      <div className="col-lg-12 mt-3">
                        <span className="normal-text balance-amount"> Maximum available to transfer is : <b> ${fabi}</b></span><br/>
                        </div>

                        <div className="col-lg-12 mt-3">
                        <sapn className="small-italicb mt-3">To deposit a higher value, please <a onClick={() => {addMoney();}}><u style={{cursor:"pointer"}}>click here</u></a> to add funds to your Wallet first.</sapn> 
                        </div>
                    </div>

                    {/* <h4 className="mt-5 bett-h4 c-red-color mb-4">
                      <b>Withdraw Funds</b>
                    </h4>
                    <span className="bett-h4 c-blue-color">Withdraw funds from BettDraft balance to your wallet Balance</span>
                    <div className="withdraw-input mt-3 row">
                    <div className="col-lg-3">
                      <Form.Group
                        className="with-small-input p-top5"
                        controlId="Amount"
                      >
                        <Form.Control
                          className="text-left text-dark input-green b-color-red"
                          type="text"
                          placeholder=" "
                          style={{background:"#fff !important" , color:"#111111"}}
                          value={withdrawAmt}
                          onChange={(e) => {
                            var numbers = /^[0-9]+$/;
                            if (
                              e.target.value != "" &&
                              e.target.value.match(numbers)
                            ) {
                              setWithdrawAmt(e.target.value);
                            } else if (e.target.value == "") {
                              setWithdrawAmt(e.target.value);
                            } else {
                              ErrorToast("Enter Only numeric value");
                            }
                          }}
                        />
                         <span class="input-boxsymbol">$</span>
                      </Form.Group>
                      </div>

                      <div className="col-lg-3">
                      <Button
                      style={{width:"100%" , padding:"14px"}}
                        variant="danger"
                        className="save-btn2 card-withdraw2 red-button"
                        onClick={() => {
                          Withdraw();
                        }}
                      >
                        Transfer to my wallet
                      </Button>
                      </div>
                      <div className="col-lg-6" >
                      <span className="normal-text"> Maximum available to transfer is : <b>${userData?.account?.balance}</b></span>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <span className="small-italicb">To withdraw to your bank , please transfer to your wallet then <a onClick={() => {addMoney();}}><u style={{cursor:"pointer"}}>Click here</u></a> to process a payout to your bank account</span>
                      </div>
                    </div> */}

                   <h4 className="mt-5 bet-h4 c-red-color mb-4">
                      <b className="text-withdraw">WITHDRAW FUNDS</b>
                    </h4>
                    <span className="bett-h4 c-blue-color">Withdraw to your Bank:</span>
                    {/* <span className="bett-h4 c-blue-color">Withdraw funds from Bank</span> */}
                    <div className="withdraw-input mt-3 row">
                    
                    {/* <div className="col-lg-3">
                    <Form.Group
                        className="with-small-input2 p-top5 col-lg-12"
                      >
                        <Form.Control
                          className="simple-input"
                          type="text"
                          placeholder="Enter Name"
                          style={{background:"#fff !important" , color:"#111111"}}
                          value={accountname}
                          disabled
                        />
                </Form.Group>

                      </div> */}

                      {/* <div className="col-lg-1"></div> */}

                      <div className="col-lg-3 mt-3">
                      <Form.Group
                        className="with-small-input2 p-top5 col-lg-12"
                      >
                        <Form.Control
                          className="simple-input"
                          type="text"
                          onChange={famount}
                         placeholder="Enter Amount"
                         disabled={isLoading?true:false}
                          value={amount}
                          style={{background:"#fff !important" , color:"#111111"}}
                        />
                         <span class="input-boxsymbol">$</span>
                </Form.Group>
                      </div>

                      <div className="col-lg-1"></div>

                      <div className="col-lg-3 mt-3" >
                      <Form.Group
                        className="with-small-input2 p-top5 col-lg-12"
                      >
                        <Form.Control
                          className="simple-input"
                          type="text"
                          onChange={frouting}
                          placeholder="Enter Routing No."
                          value={routing}
                          style={{background:"#fff !important" , color:"#111111"}}
                        />
                </Form.Group>
                      </div>

                      <div className="col-lg-4"></div>


                      <div className="col-lg-3 mt-3">
                      <Form.Group
                        className="with-small-input2 p-top5 col-lg-12"
                      >
                        <Form.Control
                          className="simple-input"
                          type="text"
                          maxLength={20}
                          placeholder="Enter Account No."
                          onChange={facno}
                          value={acno}
                          style={{background:"#fff !important" , color:"#111111"}}
                        />
                        </Form.Group>
                      </div>

                      <div className="col-lg-1"></div>

                      <div className="col-lg-3 mt-3">
                      <Form.Group
                        className="with-small-input2 p-top5 col-lg-12"
                      >
                        <Form.Control
                          className="simple-input"
                          type="text"
                          maxLength={20}
                          onChange={fcacno}
                          placeholder="Confirm Account No."
                          value={cacno}
                          style={{background:"#fff !important" , color:"#111111"}}
                        />
                </Form.Group>
                      </div>

                      <div className="col-lg-1"></div>

                      <div className="col-lg-3 mt-3">
                      <Button
                      style={{width:"100%" , padding:"14px"}}
                        variant="danger"
                        className="save-btn2 card-withdraw2 red-button"
                        onClick={withdrawbank}
                      >
                        Request Withdrawal
                      </Button>
                      </div>

                      <div className="col-lg-12 mt-4">
                        <span className="normal-text balance-amount"> Maximum available to withdraw is :  <b> ${userData?.account?.balance}</b></span><br/>
                        </div>

                      <div className="col-lg-12 mt-3">
                      <span className="small-italicb"
                      style={{fontSize:"17px",color:"#0D3862",fontWeight:"400", fontStyle:"italic!important"}}
                      >Payment is made via ACH and may take up to 2 business days to reach your account. </span>
                      </div>

                      
                      {/* <div className="col-lg-6" >
                      <span className="normal-text"> Maximum available to transfer is : <b>${userData?.account?.balance}</b></span>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <span className="small-italicb">To withdraw to your bank , please transfer to your wallet then <a onClick={() => {addMoney();}}><u style={{cursor:"pointer"}}>Click here</u></a> to process a payout to your bank account</span>
                      </div> */}
                    </div>


                    <h4 className="mt-5 bett-h4 c-blue-color transaction-table">
                      <b>Transaction History</b>
                    </h4>
                  <div className="col-md-12 mt-4"
                  >
                  <div className="table-design-one form-space-l30 table-responsive gray-table"
                  style={{paddingLeft:"0px"}}
                  >
                  <Table>
                    <thead>
                      <tr>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Type</th>

                        <th>Amount</th>
                        {/* <th>status</th> */}
                      </tr>
                    </thead>
                    {transactionList.map((item) => {
                      return (
                        <tbody className="two-table-color">
                          <tr>
                            {/* <td>{item.transaction_id}</td> */}
                            <td>{item.id_transaction}</td>
                            <td>
                              {moment(item.insertion_time).format(
                                "YYYY-MM-DD h:mm a"
                              )}
                            </td>
                            <td>{item.description}</td>
                            <td>{item.operation}</td>
                            <td>${item.amount}</td>
                            {/* <td>{item.type}</td> */}
                          </tr>
                        </tbody>
                      );
                    })}
                  </Table>
                </div>
              </div>

                    {/* <div className="betuser-input-two">
                      <form class="form-floating betuser-form">
                        <div className="mt-4 mb-4">
                          <button
                            type="button"
                            class=" btn-primary mt-2 btn save-btn save-btn"
                            onClick={() => {
                              addMoney();
                            }}
                          >
                            Manage Wallet
                          </button>
                        </div>
                      </form>
                    </div> */}

                    {/* <div className="withdraw-input mt-5">
                    <Form.Group className="with-small-input" controlId="Amount">
                      <Form.Control
                        className="text-left"
                        type="text"
                        placeholder="Enter Amount "
                        style={{
                          marginTop: "0px",
                          borderRadius: "20px",
                          paddingLeft: "22px",
                          paddingRight: "40px",
                        }}
                        value={withdrawAmt}
                        // onChange={(e) => setWithdrawAmt(e.target.value)}
                        onChange={(e) => {
                          var numbers = /^[0-9]+$/;
                          if (
                            e.target.value != "" &&
                            e.target.value.match(numbers)
                          ) {
                            setWithdrawAmt(e.target.value);
                          } else if (e.target.value == "") {
                            setWithdrawAmt(e.target.value);
                          } else {
                            ErrorToast("Enter Only numeric value");
                          }
                        }}
                      />
                    </Form.Group>
                    <Button
                      //  disabled={walletUserId === null ? true : false}
                      variant="warning"
                      className="save-btn card-withdraw"
                      onClick={() => {
                        Deposit();
                      }}
                    >
                      Deposit
                    </Button>
                  </div> */}
                  </Form>
                </div>
              </div>

              </div>

              {/* <div className="mainwallettab2" style={{display:display?"none":""}}>
              <iframe src="https://www.google.com"></iframe>
              </div> */}

               
               {/* <div className="mainwallettab3" style={{display:display?"none":""}}>
               <div className="form-space my-betuser1 custom-stickydiv">
              <div className="static-form form-style-20 wallet-user"
               style={{padding:"25px" , marginLeft:"-10px"}}
              >
              <h4 className="bett-h4 c-blue-color">
                Bank Withdrawal
              </h4>
                <Form style={{marginTop:"20px" , paddingLeft:"30px"}}>
                <div className="bank-form row">
                <Form.Group
                        className="with-small-input2 p-top5 col-lg-5 mb-4"
                      >
                        <Form.Label style={{marginBottom:"-4px"}}>
                          <h6 className="bank-text"><b>Name</b></h6>
                        </Form.Label>
                        <Form.Control
                          className="simple-input"
                          type="text"
                          placeholder="Enter Name"
                          style={{background:"#fff !important" , color:"#111111"}}
                        />
                </Form.Group>

                <div className="col-lg-1"></div>

                <Form.Group
                        className="with-small-input2 p-top5 col-lg-5 mb-4"
                      >
                        <Form.Label style={{marginBottom:"-4px"}}>
                          <h6 className="bank-text"><b>Amount</b></h6>
                        </Form.Label>
                        <Form.Control
                          className="simple-input"
                          type="text"
                          placeholder="Enter Amount"
                          style={{background:"#fff !important" , color:"#111111"}}
                        />
                </Form.Group>


                <Form.Group
                        className="with-small-input2 p-top5 col-lg-5 mb-4"
                      >
                        <Form.Label style={{marginBottom:"-4px"}}>
                          <h6 className="bank-text"><b>Account</b></h6>
                        </Form.Label>
                        <Form.Control
                          className="simple-input"
                          type="text"
                          placeholder="Enter Account No"
                          style={{background:"#fff !important" , color:"#111111"}}
                        />
                </Form.Group>

                <div className="col-lg-1"></div>


                <Form.Group
                        className="with-small-input2 p-top5 col-lg-5 mb-4"
                      >
                        <Form.Label style={{marginBottom:"-4px"}}>
                          <h6 className="bank-text"><b>Routing</b></h6>
                        </Form.Label>
                        <Form.Control
                          className="simple-input"
                          type="text"
                          placeholder="Enter Routing"
                          style={{background:"#fff !important" , color:"#111111"}}
                        />
                </Form.Group>

                      <div className="col-lg-6"></div>

                    <div className="submit-btn col-lg-5 mt-3">
                      <Button className="btn brn-secondary dark-blue" style={{borderRadius:"5px" , width:"100%"}}>Submit</Button>
                      </div>
        
                </div>

                </Form>
                </div>
                </div>
               </div> */}


            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserWallet;
