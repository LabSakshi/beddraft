import React from "react";
import "./footer.css";
import footerlogo from "../../assests/new/logo.png"
import app from "../../assests/new/mac.png";
import play from "../../assests/new/google.png";
import fb from "../../assests/new/fb.png"
import insta from "../../assests/new/insta.png"
import twitter from "../../assests/new/twitter.png"
import ytube from "../../assests/new/youtube.png"
import sportsio from "../../assests/new/sportsdata.png"
import { useNavigate } from "react-router-dom";
import { Actions } from "../../redux/Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateScreen =(name)=>{
       dispatch({
          type: Actions.TEST_CASE,
          data: false,
        });
    navigate(name)
  }
  return (
    <footer className="footer">
        
     <div className="row">
    <div className="col-md-2 text-center">
      <div className="footerlogo">
       <img src={footerlogo} style={{height:"40px"}}/>
       <img className="mt-5" src={app} style={{height:"40px"}}/>
       <img className="mt-5" src={play} style={{height:"40px"}}/>
      </div>
    </div>
    <div className="col-md-7">
      <div className="row">
        {/* <div className="col-md-4">
          <div className="footerlinks">
            <h6 style={{color:"white"}}><b>MENU</b></h6>
            <span className="footertag" href="#">NFL Fantasy</span>
            <span className="footertag" href="#">NBA Fantasy</span>
            <span className="footertag" href="#">MLB Fantasy</span>
            <span className="footertag" href="#">NHL Fantasy</span>
            <span className="footertag" href="#">ALL Sports</span>
          </div>
        </div> */}

        <div className="col-md-6">
          <div className="footerlinks">
            <h6 style={{color:"white"}}><b>SUPPORT</b></h6>
            <span className="footertag" onClick={()=>{navigateScreen('/contact-us')}}>Contact us</span>
            <span className="footertag" onClick={()=>{navigateScreen('/howtoplay')}}>How to play</span>
            <span className="footertag" onClick={()=>{navigateScreen('/scoring')}}>Scoring</span>
            {/* <span className="footertag" href="#">Live chat</span> */}
            <span className="footertag" onClick={()=>{navigateScreen('/faq')}}>FAQs</span>
          </div>
        </div>

        <div className="col-md-6">
          <div className="footerlinks">
            <h6 style={{color:"white"}}><b>ABOUT BETTDRAFT</b></h6>
            <span className="footertag" onClick={()=>{navigateScreen('/about-us')}}>About Us</span>
            <span className="footertag" onClick={()=>{navigateScreen('/termsconditions')}}>Terms and Conditions</span>
            <span className="footertag" onClick={()=>{navigateScreen('/privacy-policy')}}>Privacy Policy</span>
            <span className="footertag" onClick={()=>{navigateScreen('/houserules')}}>House Rules</span>
            <span className="footertag"onClick={()=>{navigateScreen('/responsible-gaming')}}>Responsible Gaming</span>
          </div>
        </div>

      </div>
    </div>
    <div className="col-md-3 text-center">
      <div className="branding">
        <div className="socialmedia">
          <a href="https://www.facebook.com/bettdraft" target="a_blank"><img src={fb}/></a>
          <a href="https://twitter.com/BettDraft" target="a_blank"><img src={twitter}/></a>
          <a href="https://www.youtube.com/@BettDraft" target="a_blank"><img src={ytube}/></a>
          <a href="https://www.instagram.com/bettdraft/" target="a_blank"><img src={insta}/></a>
        </div>

        <div className="reference" style={{marginTop:"30%"}}>
          <img src={sportsio} style={{height:"40px"}}/>
        </div>
      </div>
    </div>
  </div>
    <hr/>
    <div>
      <h6 style={{color:"white" , fontWeight:"lighter", textAlign:"center"}}>@ BettDraft All rights are reserved</h6>
    </div>
    </footer>
  );
};

export default Footer;
