import React, { useState, useRef, useEffect } from "react";
import "../Sportsbook.css";
import { Promo } from "../../../constant/commonArrray";

import Sportsbook from "../../Sportsbook";

const ComingSoon = (props) => {
  return (
    <Sportsbook>
      <div className="col-md-7 mt-4">
        <section className="Sportsbook-middle-section">
          <div className="inner-Sportsbook-middle">
            <div className="banner-link-div">
              {Promo.map((item, index) => {
                return (
                  <div className="banner-space">
                    <div className="Sportsbook-middle-size">
                      <a href="" className="banner-sport-link">
                        <img src={item.image} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="middle-info-details">
              <div className="middle-info-header-div">
                <div className="shadow-radius">
                  <div className="header-div-table">
                    <h2>{"Coming Soon ..."}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Sportsbook>
  );
};

export default ComingSoon;
