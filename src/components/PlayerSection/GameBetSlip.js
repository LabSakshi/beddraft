import React, { useState, useRef, useEffect } from "react";
import PlayerBetSlip from "../PlayerBetSlip";
import { FiCheckCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { Col } from "react-bootstrap";
import NotFound from "../../screens/NotFound";

import "./style.css";
import PlayerImage from "../../assests/indiaImages/player.jpeg";
import p11 from "../../assests/indiaImages/p-11.png";
import noplayer from "../../assests/indiaImages/empty2.png";

const sampleData = [
  {
    id: 1,
    name: "Kuldeep Gholiya",
    points: 120,
  },
  {
    id: 2,
    name: "Kuldeep Gholiya",
    points: 120,
  },
  {
    id: 3,
    name: "Kuldeep Gholiya",
    points: 120,
  },
  {
    id: 4,
    name: "Kuldeep Gholiya",
    points: 120,
  },
  {
    id: 5,
    name: "Kuldeep Gholiya",
    points: 120,
  },
];

const GameBetSlip = (props) => {
  return (
    <>
      <Col md={4} className="BetSlip-full">
        {/* <PlayerBetSlip /> */}

        <div className="player-right-card mt-0">
          <div className="player-right-heading">
            <h2>Team Selection</h2>
            <h3>Clear all</h3>
          </div>
          <div className="player-right-heading mt-1">
            <p>
              Players: <b>0/11</b>
            </p>
            <p>
              Credits Left: <b>100</b>
            </p>
          </div>
          <div className="player-box-list">
            <ul>
              <li className="selected">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
            </ul>
          </div>

          {/* submiited header */}

          <div className="submitted-main p-10">
            <div className="submitted-header flex-between">
              <h2>
                Team Submitted <FiCheckCircle />
              </h2>
              <h3>
                HUN <span>vs</span> POR
              </h3>
            </div>
            <div className="top-headercard bg-trans">
              <p className="p-0 mb-1">
                {" "}
                Sat, Jul 15, 12:00 PM | <span> 1D : 4h : 29m </span>
              </p>
            </div>
            <div className="top-headercard bg-trans flex-between">
              <p className="color-b p-0">
                Prize Pool: <span className="green-text">₹25,200</span>
              </p>
              <div className="group-flex-between">
                <ul class="same-font me-0">
                  <li>
                    <img src={p11} />
                    <span class="red-text"> ₹2,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* end submiited header */}

          <div className="custom-scrolling">
            {sampleData.map((item, index) => {
              return (
                <div className="player-right-card white-bg">
                  <div className="flex-player">
                    <a className="delet-button">
                      <RiDeleteBinLine />
                    </a>
                    <div className="player-right-cardimg">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-right-cardinfo">
                      <div className="player-right-name">
                        <h4>Kuldeep Gholiya</h4>
                        <span>X2</span>
                      </div>
                      <p>
                        <span className="darkred-text">
                          <b>WK</b>
                        </span>{" "}
                        | <b>POR</b> @ <b>HUN</b>
                      </p>
                      <p className="normal-p span-uner">
                        Points Proj: <span>120</span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="two-button">
                    <a href="#">MORE </a>
                    <a href="#">LESS </a>
                  </div>
                </div>
              );
            })}

            {/* submitted card  */}

            <div class="player-right-card  submiited-card submiited-more">
              <div class="flex-player">
                <a class="delet-button"></a>
                <div class="player-right-cardimg">
                  <img src={PlayerImage} />
                </div>
                <div class="player-right-cardinfo">
                  <div class="player-right-name">
                    <h4>Kuldeep Gholiya test</h4>
                    <span>X2</span>
                  </div>
                  <p>
                    <span class="darkred-text">
                      <b>WK</b>
                    </span>{" "}
                    | <b>POR</b> @ <b>HUN</b>
                  </p>
                  <p class="normal-p span-uner">
                    Points Proj: <span>120</span> <VscTriangleUp />{" "}
                    <span>MORE</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="player-right-card  submiited-card submiited-less">
              <div class="flex-player">
                <a class="delet-button"></a>
                <div class="player-right-cardimg">
                  <img src={PlayerImage} />
                </div>
                <div class="player-right-cardinfo">
                  <div class="player-right-name">
                    <h4>Kuldeep Gholiya test</h4>
                    <span>X2</span>
                  </div>
                  <p>
                    <span class="darkred-text">
                      <b>WK</b>
                    </span>{" "}
                    | <b>POR</b> @ <b>HUN</b>
                  </p>
                  <p class="normal-p span-uner">
                    Points Proj: <span>120</span> <VscTriangleDown />{" "}
                    <span>LESS</span>
                  </p>
                </div>
              </div>
            </div>

            {/* submitted card */}

            <div className="mt-3 mb-5 text-center">
              <img src={noplayer} style={{ height: "250px" }} />
            </div>
          </div>

          <div className="m-10">
            <a class="green-button redbig-button" href="#">
              Close
            </a>
          </div>
          <div className="player-right-card last-player-last">
            <p className="mb-0">
              Select a contest to start creating your team.
            </p>
            <p className="mb-0">
              <span className="red-text">How to play</span> and{" "}
              <span className="red-text">Fantasy points.</span>
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default GameBetSlip;
