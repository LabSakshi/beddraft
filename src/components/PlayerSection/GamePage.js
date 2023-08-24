import React, { useState, useRef, useEffect } from "react";
import PlayerBetSlip from "../PlayerBetSlip";
import { FiCheckCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Container,
  OverlayTrigger,
  Popover,
  Tab,
  Tabs,
} from "react-bootstrap";
import NotFound from "../../screens/NotFound";

import "./style.css";
import medalImage from "../../assests/indiaImages/medal.png";
import img1 from "../../assests/indiaImages/img1.png";
import p11 from "../../assests/indiaImages/p-11.png";
import ticket from "../../assests/indiaImages/ticket.png";
import winner from "../../assests/indiaImages/winner.png";
import flexImage from "../../assests/indiaImages/flex.png";
import PlayerImage from "../../assests/indiaImages/player.jpeg";

const sampleData = [
  {
    id: 1,
    name: "Hungary",
  },
  {
    id: 2,
    name: "Hungary",
  },
  {
    id: 3,
    name: "Hungary",
  },
  {
    id: 4,
    name: "Hungary",
  },
];

const GamePage = (props) => {
  const { playerList} = props;
  console.log('playerList',playerList)
  return (
    <>
      <div className="main-cardfull mt-4">
        <div className="cardfull-div">
          <div className="top-headercard">
            <Row>
              <Col md={6}>
                <p>
                  {" "}
                  ECI Hungary T10 | <span>HUN</span> vs <span>POR</span>
                </p>
              </Col>

              <Col md={6}>
                <p className="text-md-right">
                  {" "}
                  Sat, Jul 15, 12:00 PM | <span> 1D : 4h : 29m</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="group-flex-between space-headerl">
                  <ul className="same-font">
                    <li>
                      <span className="color-b f-400"> Entry:</span>{" "}
                      <span className="ms-1 green-text"> ₹20</span>
                    </li>
                    <li>
                      <img src={winner} />
                      <span className="color-b"> 300</span>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={4}>
                <p className="text-center color-b">
                  Prize Pool:{" "}
                  <span class="green-text">
                    <b>₹25,200</b>
                  </span>
                </p>
              </Col>
              <Col md={4} className="text-md-right ">
                <div className="group-flex-between flex-end">
                  <ul className="same-font">
                    <li>
                      <img src={medalImage} />
                      <span class="green-text">₹80</span>
                    </li>
                    <li>
                      <img src={p11} />
                      <span class="red-text"> ₹2,000</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="title-card-header">
            <Row>
              <Col md={4}>
                <p className="flex-centert">
                  {" "}
                  <span className="border-button">Home</span> Hungary{" "}
                </p>
              </Col>

              <Col md={4} className="text-center">
                <p> vs </p>
              </Col>
              <Col md={4}>
                <p className="flex-centert flex-md-right">
                  {" "}
                  Portugal{" "}
                  <span className="border-button border-red">Away</span>
                </p>
              </Col>
            </Row>
          </div>
          <div className="custom-scrolling">
            <div className="card-group-player">
              {/* {
                playerList.map((item,index)=>{
                  return (
                    <Row className="g-3">
                    <Col md={12}>
                      <div className="custom-check-div m-0">
                        Wicket Keeper <FiCheckCircle />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="player-card-main disabled">
                        <div className="player-member-img">
                          <img src={PlayerImage} />
                        </div>
                        <div className="player-info-div">
                          <h3>Kuldeep Gholiya</h3>
                          <p>
                            {" "}
                            <span className="f-red">WK</span> | POR <span>@</span>{" "}
                            HUN
                          </p>
                          <p className="flex-p">
                            <span>Point Proj:</span> 120 |{" "}
                            <span className="f-red">
                              Credits: <b>9.0</b>
                            </span>
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="player-card-main non-selected">
                        <div className="player-member-img">
                          <img src={PlayerImage} />
                        </div>
                        <div className="player-info-div">
                          <h3>Kuldeep Gholiya</h3>
                          <p>
                            {" "}
                            <span className="f-red">WK</span> | POR <span>@</span>{" "}
                            HUN
                          </p>
                          <p className="flex-p">
                            <span>Point Proj:</span> 120 |{" "}
                            <span className="f-red">
                              Credits: <b>9.0</b>
                            </span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  )
                })
              } */}
              <Row className="g-3">
                <Col md={12}>
                  <div className="custom-check-div m-0">
                    Wicket Keeper <FiCheckCircle />
                  </div>
                </Col>
                <Col md="6">
                  <div className="player-card-main disabled">
                    <div className="player-member-img">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-info-div">
                      <h3>Kuldeep Gholiya</h3>
                      <p>
                        {" "}
                        <span className="f-red">WK</span> | POR <span>@</span>{" "}
                        HUN
                      </p>
                      <p className="flex-p">
                        <span>Point Proj:</span> 120 |{" "}
                        <span className="f-red">
                          Credits: <b>9.0</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="player-card-main non-selected">
                    <div className="player-member-img">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-info-div">
                      <h3>Kuldeep Gholiya</h3>
                      <p>
                        {" "}
                        <span className="f-red">WK</span> | POR <span>@</span>{" "}
                        HUN
                      </p>
                      <p className="flex-p">
                        <span>Point Proj:</span> 120 |{" "}
                        <span className="f-red">
                          Credits: <b>9.0</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="card-group-player">
              <Row className="g-3">
                <Col md={12}>
                  <div className="custom-check-div m-0">
                    Batters <FiCheckCircle />
                  </div>
                </Col>
                <Col md="6">
                  <div className="player-card-main selected">
                    <div className="player-member-img">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-info-div">
                      <h3>Kuldeep Gholiya</h3>
                      <p>
                        {" "}
                        <span className="f-red">WK</span> | POR <span>@</span>{" "}
                        HUN
                      </p>
                      <p className="flex-p">
                        <span>Point Proj:</span> 120 |{" "}
                        <span className="f-red">
                          Credits: <b>9.0</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="player-card-main selected">
                    <div className="player-member-img">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-info-div">
                      <h3>Kuldeep Gholiya</h3>
                      <p>
                        {" "}
                        <span className="f-red">WK</span> | POR <span>@</span>{" "}
                        HUN
                      </p>
                      <p className="flex-p">
                        <span>Point Proj:</span> 120 |{" "}
                        <span className="f-red">
                          Credits: <b>9.0</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="player-card-main selected">
                    <div className="player-member-img">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-info-div">
                      <h3>Kuldeep Gholiya</h3>
                      <p>
                        {" "}
                        <span className="f-red">WK</span> | POR <span>@</span>{" "}
                        HUN
                      </p>
                      <p className="flex-p">
                        <span>Point Proj:</span> 120 |{" "}
                        <span className="f-red">
                          Credits: <b>9.0</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="player-card-main selected">
                    <div className="player-member-img">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-info-div">
                      <h3>Kuldeep Gholiya</h3>
                      <p>
                        {" "}
                        <span className="f-red">WK</span> | POR <span>@</span>{" "}
                        HUN
                      </p>
                      <p className="flex-p">
                        <span>Point Proj:</span> 120 |{" "}
                        <span className="f-red">
                          Credits: <b>9.0</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="player-card-main selected">
                    <div className="player-member-img">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-info-div">
                      <h3>Kuldeep Gholiya</h3>
                      <p>
                        {" "}
                        <span className="f-red">WK</span> | POR <span>@</span>{" "}
                        HUN
                      </p>
                      <p className="flex-p">
                        <span>Point Proj:</span> 120 |{" "}
                        <span className="f-red">
                          Credits: <b>9.0</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="player-card-main selected">
                    <div className="player-member-img">
                      <img src={PlayerImage} />
                    </div>
                    <div className="player-info-div">
                      <h3>Kuldeep Gholiya</h3>
                      <p>
                        {" "}
                        <span className="f-red">WK</span> | POR <span>@</span>{" "}
                        HUN
                      </p>
                      <p className="flex-p">
                        <span>Point Proj:</span> 120 |{" "}
                        <span className="f-red">
                          Credits: <b>9.0</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
