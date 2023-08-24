import React from "react";
import "./New-Pin.css";
import { FiChevronDown } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";



const NewPin = () => {
  return (
    <div>
      <div className="container bg-color">
        <div className="inner-smallspace"> 
             <div className="row">
             
             <div className="col-md-4">
             <div className="form-space-r">
             <div className="static-form form-style-2">
             <Form className="my-form-layout1">
  <Form.Group className="mb-3" controlId="Insert Password">
    <Form.Control className="mt-o" type="text" placeholder="Insert Password *" />
  </Form.Group>
  <Button variant="primary" className="save-btn mt-4" type="submit">
  Change
  </Button>
</Form>
</div>
             </div>

             </div>
             <div className="col-md-6">
               <div className="side-form-content">
<p>You need only enter the password to generate a new pin code. </p>
<p>To increase the security level for changing the pin code, we recommend you to set, in the area of personal data, a personal response to a secret question. By clicking the button below the system will create a new pin code and I'll send you, via email, to your email address.</p>
               </div>

             </div>
           

             </div>
             </div>
      </div>
    
    

    </div>
  );
};

export default NewPin;