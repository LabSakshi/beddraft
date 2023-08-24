import React from "react";
import "./about.css"

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";

const AboutUs = () => {
  return (
    <div>
      <div className="container bg-color-about space-bottom">
        <div className="inner-smallspace-about">
          <div className="row">
            <div className="col-md-12">
              <div className="content-page-design">
                <h2>About Us</h2>

                {/* <p>
                  BettDraft Inc, DBA BettDraft is licensed in the state of Iowa
                  by the Iowa Racing and Gaming Commission to provide sports
                  wagering services in partnership with the Rhythm City Casino
                  Resort.
                </p> */}
                <p>
                     BettDraft is all about creating that winning experience. 
                     Whether it’s about hitting that huge cash prize or 
                     just about the bragging rights. BettDraft was created to build and drive that spirit. 
                     Our mission is to make sure you have more ways to win, more ways to play 
                     and that you have an entertaining experience.
                </p>

                <h2>Our Vision</h2>

                <p>
                BettDraft and every member of our team is focused on creating the best experience possible 
                for every customer. We want our customers and fans to get more out of their daily play than anywhere else. 
                We are constantly exploring new innovative ways to add amazing new features, 
                fun ways to play and most of all, more ways to win.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
