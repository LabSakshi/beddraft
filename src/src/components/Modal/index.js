import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


function ModalOtp({ show, handleClose }) {
  console.log("Show", show);
  // const [closeModal, setCloseModal] = useState(false);
  const [otp, setOtp] = useState("");

  const validateData = {
    "accountId": "string",
    "userId": 0,
    "adharNumber": "string",
    "opt": "string",
    "clientId": "string"
  }
  
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'your-api-key',
    'X-RapidAPI-Host': 'https://ind-dev-accountapi.bettdraft.com:5000/api/aadhar/otp/validate',
  },
  body: JSON.stringify(validateData)
};
  // const handleClose = () => {
  //   console.log('closed', show)
  //   setShow(false);
  // };
  // const handleShow = () => setShow(true);

  // API Calls
  useEffect(()=>{
    fetch("https://ind-dev-accountapi.bettdraft.com:5000/api/aadhar/otp/validate")
    .then(res =>{ console.log("otp res", res.json())
        // res.json()
    })
    .then(data=> console.log("Data Otp",data)

    )
      .catch((err)=>{ console.log("Err", err)})
  }, []);

  const onChange = (e) => {
    console.log("onChange", e.target.value);
    setOtp(e.target.value);
  };

  const validateOtp = (value) => {
    const regNum = /^\d{4}$/;
    // const regNum = /^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/;
    // const regNum = /^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/;
    return !value.match(regNum);
  };

  const handleOtpSubmit = async() => {
    console.log("handleOtp")
    
    // validateOtp(e);
  };

 
  return (
    <>
      <Button variant="primary" onClick={handleClose}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header onHide={handleClose}>
          <Modal.Title>Enter Your 4 digit OTP to verify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="OTP">
            <Form.Control
              className="verification-input text-dark"
              type="text"
              placeholder="Enter your OTP number..."
              value={otp}
              onChange={(e) => onChange(e)}
              required
              maxLength={4}
              isInvalid={otp?.length > 0 && validateOtp(otp)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid OTP
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleOtpSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOtp;
