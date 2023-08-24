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

const GameList = (props) => {
  const { enterGame } = props;
  return (
    <div className="main-cardfull">
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
                Sat, Jul 15, 12:00 PM | <span> 1D : 4h : 29m </span>
              </p>
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
                Portugal <span className="border-button border-red">Away</span>
              </p>
            </Col>
          </Row>
        </div>

        <div className="custom-scrolling">
          {sampleData.map((item, index) => {
            return (
              <div className="card-one">
                <Row>
                  <Col md={12}>
                    <Row>
                      <Col md={9}>
                        <div className="justify-between">
                          <p className="card-p-black">
                            Prize Pool:{" "}
                            <span className="price-big">₹25,200</span>
                          </p>
                          <p className="card-p-blue">
                            Max Entries:<b>1,500</b>
                          </p>
                        </div>
                        <div className="border-gradient"></div>
                        <div className="justify-between">
                          <p className="card-p-blue black-text">
                            <b>900</b> Entries{" "}
                          </p>
                          <p className="card-p-blue black-text">
                            <b>600</b> spots available
                          </p>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div onClick={enterGame}>
                          <a className="green-button" href="#">
                            ₹20
                          </a>
                        </div>
                        <div className="button-img">
                          <img src={img1} alt="" />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="border-top-white">
                  <Col md={12}>
                    <div className="group-flex-between">
                      <ul>
                        <li>
                          {["bottom"].map((placement) => (
                            <OverlayTrigger
                              trigger="click"
                              key={placement}
                              placement={placement}
                              overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                  <Popover.Body>
                                    <Row>
                                      <Col xs={4}>
                                        <div className="Popover-list">
                                          <h5>Position</h5>
                                          <p>1st </p>
                                          <p>2nd </p>
                                          <p>3rd </p>
                                          <p>4th </p>
                                          <p>5th </p>
                                        </div>
                                      </Col>
                                      <Col xs={4}>
                                        <div className="Popover-list">
                                          <h5>Full Payout</h5>
                                          <p>₹3,000 </p>
                                          <p>₹2,000 </p>
                                          <p>₹1,500 </p>
                                          <p>₹1,250 </p>
                                          <p>₹1,000 </p>
                                        </div>
                                      </Col>
                                      <Col xs={4}>
                                        <div className="Popover-list">
                                          <h5>Current Payout</h5>
                                          <p>₹3,000 </p>
                                          <p>₹2,000 </p>
                                          <p>₹1,500 </p>
                                          <p>₹1,250 </p>
                                          <p>₹1,000 </p>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button className="button-nobg">
                                {" "}
                                <img src={medalImage} alt="" />
                              </Button>
                            </OverlayTrigger>
                          ))}
                          <span className="green-text">
                            {" "}
                            <b> ₹3,000</b>
                          </span>
                        </li>

                        <li>
                          {["bottom"].map((placement) => (
                            <OverlayTrigger
                              trigger="click"
                              key={placement}
                              placement={placement}
                              overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                  <Popover.Body>
                                    <div className="Popover-blue-text">
                                      <img src={img1} />
                                      <p>
                                        For each player on your team, you will
                                        pick if they will achieve <b>More</b> or{" "}
                                        <b>Less</b> than their projected fantasy
                                        points. If you get all 11 Picks correct,
                                        you will win a share of the{" "}
                                        <b>Pick 11 Prize pool</b>. If you are
                                        the only player to get all 11 correct,
                                        the entire prize pool is yours! Even if
                                        you miss a prize on the main Prize Pool,
                                        you can still win! Or more than{" "}
                                        <b>Double your winnings</b> by winning
                                        both!
                                      </p>
                                    </div>
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button className="button-nobg">
                                {" "}
                                <img src={p11} alt="" />
                              </Button>
                            </OverlayTrigger>
                          ))}
                          <span className="red-text">
                            {" "}
                            <b>₹2,000</b>
                          </span>
                        </li>

                        <li>
                          {["bottom"].map((placement) => (
                            <OverlayTrigger
                              trigger="click"
                              key={placement}
                              placement={placement}
                              overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                  <Popover.Body>
                                    <div className="Popover-blue-text">
                                      <p>
                                        You can submit up to 10 teams into this
                                        contest.
                                      </p>
                                    </div>
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button className="button-nobg black-text">
                                {" "}
                                <img src={ticket} alt="" />
                              </Button>
                            </OverlayTrigger>
                          ))}
                          <span className="f-400">MAX</span> <b>10</b>
                        </li>

                        <li>
                          {["bottom"].map((placement) => (
                            <OverlayTrigger
                              trigger="click"
                              key={placement}
                              placement={placement}
                              overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                  <Popover.Body>
                                    <Row>
                                      <Col xs={4}>
                                        <div className="Popover-list">
                                          <h5>Position</h5>
                                          <p>1st </p>
                                          <p>2nd </p>
                                          <p>3rd </p>
                                          <p>4th </p>
                                          <p>5th </p>
                                        </div>
                                      </Col>
                                      <Col xs={4}>
                                        <div className="Popover-list">
                                          <h5>Full Payout</h5>
                                          <p>₹3,000 </p>
                                          <p>₹2,000 </p>
                                          <p>₹1,500 </p>
                                          <p>₹1,250 </p>
                                          <p>₹1,000 </p>
                                        </div>
                                      </Col>
                                      <Col xs={4}>
                                        <div className="Popover-list">
                                          <h5>Current Payout</h5>
                                          <p>₹3,000 </p>
                                          <p>₹2,000 </p>
                                          <p>₹1,500 </p>
                                          <p>₹1,250 </p>
                                          <p>₹1,000 </p>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button className="button-nobg ">
                                {" "}
                                <img src={winner} alt="" />
                              </Button>
                            </OverlayTrigger>
                          ))}
                          <span className="black-text">
                            {" "}
                            <b>375</b>
                          </span>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          {["bottom"].map((placement) => (
                            <OverlayTrigger
                              trigger="click"
                              key={placement}
                              placement={placement}
                              overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                  <Popover.Body>
                                    <div className="Popover-blue-text">
                                      <p>
                                        This contest is based on flexible
                                        payouts. The prize pool is set to a
                                        maximum based on all entries being
                                        submitted. If less entries are submitted
                                        at the time the game starts, the contest
                                        payouts will be based on the number of
                                        entries submitted at that time.
                                      </p>
                                    </div>
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button className="button-nobg">
                                {" "}
                                <img src={flexImage} alt="" />
                              </Button>
                            </OverlayTrigger>
                          ))}
                          <span className="black-text">
                            <b>Flexible</b>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
        <div className=" p-12 left-last-div flex-between">
          <p className="bold-p mb-0">Play private contests with your friends</p>
          <a className="green-button blue-button" href="#">Create New Contest</a>
        </div>
      </div>
    </div>
  );
};

export default GameList;
