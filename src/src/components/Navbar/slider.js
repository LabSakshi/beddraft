import React, { useState } from 'react';
import {Row, Col} from "react-bootstrap";
import Promotions from '../../screens/Sportsbook/Promotions';
import "./Navbar.css"

const Slider = () => {
 
  const pathname = window.location.pathname;  

  return (
    <div>
          {pathname==="/"? <Row  className="slider-section" style={{ width:"100%" , marginTop:"98px", marginLeft:"5px", paddingRight:"40px!important" }}>
          {/* <Promotions/>    */}
          </Row>:
          ""}
    </div>
  );
}

export default Slider;