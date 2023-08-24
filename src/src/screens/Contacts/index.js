import React, { useState } from "react";
import "./Contacts.css";
import { Form, Button } from "react-bootstrap";
import { endPoints } from "../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { addData } from "../../Utility/API";
import { useNavigate } from "react-router-dom";
import { AiTwotoneEyeInvisible, AiFillEyeInvisible } from "react-icons/ai";
import Toaster from "../../components/Toast";
import Loader from "../../components/Loader";
import { ErrorToast, SuccesToast } from "../../components/Toast/message";

const Contacts = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    let data = {
      fullName: firstName,
      emaill: email,
      subject: subject,
      description: description,
      product: "",
      reason: "",
    };
    let url = `${endPoints.api.EMAIL_SUPPORT}`;
    if (firstName && email) {
      await addData(url, data)
        .then((response) => {
          setIsLoading(false);
          if (response.data.status === "success") {
            SuccesToast("Thank you for contacting us.");
            setFirstName("");
            setEmail("");
            setSubject("");
            setDescription("");
          } else {
             ErrorToast(response.data.message);
          }
        })
        .catch((error) => {
          setIsLoading(false);

          console.error(error);
        });
    }else{
      ErrorToast('Please enter Email and Name')
    }
  };

  return (
    <div>
      <div className="container bg-color">
        <div className="inner-divspace">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Toaster />
        </div>
          <div className="row">
            {isLoading && <Loader spinner={true} visible={isLoading} />}
            <div className="col-md-6">
              <div className="form-space-r">
                <div className="static-form form-style-2">
                  <Form className="my-form-layout1">
                     <Form.Label className="my-form-label">Name </Form.Label>
                    <Form.Group className="mb-3" controlId="first name">
                      <Form.Control
                        className="mt-o"
                        type="text"
                        placeholder="Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Label className="my-form-label">Email </Form.Label>
                    <Form.Group className="mb-3" controlId="last name">
                      <Form.Control
                        className="mt-o"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Label className="my-form-label">Your Subject </Form.Label>
                    <Form.Group className="mb-3" controlId="Your Subject">
                      <Form.Control
                        className="mt-o"
                        type="text"
                        placeholder="Your Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Label className="my-form-label">Your Message </Form.Label>
                    
                      <Form.Control
                       value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "190px" }}
                      /> 

                    <Button
                      variant="primary"
                      className="save-btn mt-4"
                      onClick={onSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="form-space-r">
                <Form className="my-form-layout1 contact-form-design">
                  <>
                    <div className="flex-two-input">
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          First Name *
                        </InputGroup.Text>
                        <FormControl
                          placeholder="First Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroup.Text id="basic-addon1">
                          Last Name *
                        </InputGroup.Text>
                        <FormControl
                          placeholder="Last Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </div>

                    <InputGroup className="mb-4">
                      <InputGroup.Text id="basic-addon1">
                        Your Subject *
                      </InputGroup.Text>
                      <FormControl
                        placeholder="Your Subject"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>

                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Your Mesage *"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "190px" }}
                      />
                    </FloatingLabel>
                  </>

                  <Button
                    variant="primary"
                    className="save-btn sned-btn"
                  
                  >
                    Send Mesage
                  </Button>
                </Form>
              </div>
            </div> */}

            {/* <div className="col-md-6">
              <div className="form-space-l">
                <div className="conttact-details">
                  <div id="box">
                    <div className="map-contact">
                      <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"></img>
                    </div>
                  </div>
                  <div className="contact-info">
                    <h2>CONTACT DETAILS</h2>
                    <ul>
                      <li>
                        <span className="icon-contact">
                          <FiPhone />
                        </span>
                        <span className="icon-info">507.0152695</span>
                      </li>
                      <li>
                        <span className="icon-contact">
                          <FiMail />
                        </span>
                        <span className="icon-info">
                          info@skinName.net info@soft.com
                        </span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span className="icon-contact">
                          <BiBuildingHouse />
                        </span>
                        <span className="icon-info">507.0152695</span>
                      </li>
                      <li>
                        <span className="icon-contact">
                          <IoLocationOutline />
                        </span>
                        <span className="icon-info">
                          Bethania - Panama City - Dorado Street 182, suite 32.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
