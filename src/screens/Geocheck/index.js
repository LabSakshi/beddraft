import React, { useEffect, useState } from "react";
import logo from "../../assests/images/bdlogo.png";
import "./style.css";
import { Form, Button } from "react-bootstrap";

const Geocheck = () => {

  return (
    <div>
      <>
          <div>
            <section className="login-page-section">
              <div className="login-form-div row">
                <Form className="login-form col-md-10" style={{paddingLeft:"65px", paddingRight:"65px"}}>
                  <img
                    src={logo}
                    style={{
                      width: "30%",
                      height: "44px",
                      cursor: "pointer",
                      marginLeft: "33%",
                    }}
                    alt="BettDraft"
                  />
                  <h2
                    className="mb-4"
                    style={{
                      marginTop: "20px",
                    }}
                  >
                    Email Verified
                  </h2>
                  <label
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      color: "#0D3862",
                    }}
                  >
                    Thank you.Your email has been verified.
                  </label>
                  <label
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      color: "#0D3862",
                      marginTop:"15px",
                      fontSize:"15px"
                    }}
                  >
                  Before you continue, we detected that your don’t have our location services software installed. We are required by ALL State Regulators to confirm your location before accessing BettDraft and entering contests. 
                  </label>

                  <div className="allsetps row mt-4">

                   <div className="col-md-4">
                    <h5 style={{padding:"0px!important" ,color:"#0d3862", fontSize:"20px", fontWeight:"bold"}}>1. Install Geo Location</h5>
                    <label>
                    Your download has already started. Check your download folder and install the BettDraft Player Location Check software to continue. 
                    <br/><span className="mt-4">If your download didn't start automatically, <a href="#">click here.</a></span> 
                    </label>
                   </div>

                   <div className="col-md-4">
                    <h5 style={{padding:"0px!important" ,color:"#0d3862", fontSize:"20px", fontWeight:"bold"}}>2. Follow the instructions</h5>
                    <label>
                    You may need to allow access to your devices location services, please ensure you allow access for the software to work correctly.
                    </label>
                   </div>

                   <div className="col-md-4">
                    <h5 style={{padding:"0px!important" ,color:"#0d3862", fontSize:"20px", fontWeight:"bold"}}>3. Login to your Account</h5>
                    <label>
                    Once installation is complete, you can login to your account using the link below. 
                    </label>
                    <Button
                      variant="primary"
                      type="primary"
                      className="login-btn-form"
                      style={{ width: "100%" ,background:'rgb(13, 56, 98) !important' , marginTop:"20px", marginLeft:"15%"}}
                    >
                      Login Now
                    </Button>
                   </div>
                  </div>

                <div className="row">
                <div className="col-md-12" style={{marginTop:"35px"}}>
                 <label style={{fontSize:"16px"}}>
                 BettDraft encourages you to gamble responsibly. For problem gambling information and assistance, call the 24-hour confidential Problem, Gamblers helpline at 1-800-522-4700 or
                 <br/>visit :
                 <span
                 style={{
                    fontSize: "15px",
                    marginTop: "4px",
                    textAlign:"center",
                    textDecoration: "underline",
                    color: "#C02640",
                    cursor: "pointer",
                    fontWeight:"bold"
                  }}
                  onClick={() => {
                    window.open("https://www.nevadacouncil.org", "_blank");
                  }}
                 >
                  www.whenthefunstops.org</span>
                 </label>
                </div>
                </div>
                </Form>
              </div>
            </section>
          </div>
        </>
    </div>
  );
};

export default Geocheck;
