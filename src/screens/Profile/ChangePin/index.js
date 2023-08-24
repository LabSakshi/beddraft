import React from "react";
import "./Change-Pin.css";
import { FiChevronDown } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";



const ChangePin = () => {
  return (
    <div>
      <div className="container bg-color">
        <div className="inner-smallspace"> 
             <div className="row">
             
             <div className="col-md-4">
             <div className="form-space-r">
             <div className="static-form form-style-2">
             <Form className="my-form-layout1">
        

  <Form.Group className="mb-3" controlId="Old Pin">
    <Form.Control className="mt-o" type="text" placeholder="Old Pin *" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="New Pin">
    <Form.Control type="text" placeholder="New Pin *" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="Confirm New Pin">
    <Form.Control type="text" placeholder="Confirm New Pin *" />
  </Form.Group>
  
  <Button variant="primary" className="save-btn mt-4" type="submit">
  Change
  </Button>
</Form>
            

</div>
             </div>

             </div>
           

             </div>
             </div>
      </div>
    
    

    </div>
  );
};

export default ChangePin;