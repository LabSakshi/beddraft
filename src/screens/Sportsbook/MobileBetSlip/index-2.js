import React, { useState, useRef, useEffect } from "react";

import { FiChevronDown, FiMinusCircle, FiArrowRight } from "react-icons/fi";
import { RiArrowRightSLine, RiDeleteBin6Line } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Modal, Button, Form, Alert, Row, Col, Toast , Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Betslips from "../../../components/Betslips";
import { endPoints, sportEndPoint } from "../../../constant/Environment";
import { Actions } from "../../../redux/Actions/Actions";
import { addData, getAllData } from "../../../Utility/API";
import {
  AiTwotoneEyeInvisible,
  AiFillEyeInvisible,
  AiOutlineCheck,
} from "react-icons/ai";
import { ErrorToast, SuccesToast } from "../../../components/Toast/message";
import {
  calculateAllOdds,
  calculateAllReverseOdds,
} from "../../../Utility/functions/Helper";
import { useNavigate } from "react-router-dom";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { debounce } from "@mui/material";
import moment from "moment-timezone";
import PlayerBetSlip from "../../../components/PlayerBetSlip";

import Sportsbook from "../../Sportsbook";
const MobileBetSlip = (props) => {
  
  // const navigate = useNavigate();
  // const [isLoading, setIsLoadinig] = useState(false);
  // const [showToast, setShowToast] = useState(false);
  // const [variant, setVariant] = useState("success");
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [show, setShow] = useState(false);
  // const [message, setMessage] = useState("");
  // const [validated, setValidated] = useState(false);
  // const [passwordShow, setPasswordShow] = useState(false);

  // const state = useSelector((state) => state);
  // const [sportid, setsportid] = useState(null);
  // const [active, setactive] = useState(false);
  // const [allSportsArray, setallsports] = useState([]);
  // const [showallsport, setshowall] = useState(true);
  // const [wager, setWager] = useState("");
  // const [towin, setTowin] = useState("");
  // const [display, setDisplay] = useState(false);
  // const [errmessage, setErrMessage] = useState("");
  // const [betResponse, setBetResponse] = useState(false);
  // const [betResData, setBetResData] = useState({});
  // const { auth } = state;
  // let betLength = state.betslip.betslips.length;

  const image_Base_Url = "https://sportsfeed.bettgaming.us:5000/api/";

  const [card, setcard] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let betslipLength = state.betslip.betslips.length;
  //  state.betslip.betslips

  const handleRemoveBetslip = () => {
    dispatch({
      type: Actions.REMOVE_SELECTED_BETSLIP,
      removeEleIndex: props.index,
    });
    if (betslipLength <= 2) {
      dispatch({
        type: Actions.PARLAY_BETS,
        data: false,
      });
    }
  };


  return (
    <div>
   <Col md="12" lg="4" sm="12">
      <Row style={{ paddingLeft: "10px", paddingRight: "10px"  }}>
        <div
          className="display height-scroll position-fixed w-25"
          style={{
            backgroundColor: "#000",
            padding: "20px",
            borderRadius: "8px",
            height:"600px"
          }}
        >
          <Row>
            <Col lg="12" className="mb-1">
              <Row>
                <Col lg="2">
              <h5
                className="mainbet"
               style={{ border:"2px solid #F5CB5B" , 
               textAlign:"center" , color:"#F5CB5B" ,
                borderRadius:"50%" , height:"30px",
                 width:"30px" , padding:"4px" }}
              >
                {" "}
                {/* <b>Status : </b> {betslipLength} player selected */}
                <b>{betslipLength}</b>
              </h5>
              </Col>
              <Col lg="6">
                <h5 style={{ color:"white" }}>Betslip</h5>
                </Col>
                <Col lg="4">
                  <h6 style={{ color:"white" , fontSize:"11px" , float:"right" , marginTop:"8px" }}>Clear all</h6>
                </Col>
              </Row>
            </Col>
            <Col lg="12">
              {state.betslip.betslips.map((value, index) => {
                let playerImage = "";
                if (value.image) {
                  playerImage = `${image_Base_Url}${value.image}`;
                } else {
                  playerImage = `${image_Base_Url}${"player/player.png"}`;
                }
                return (
                  <>
                    <Card className="mt-3 mb-3" id="addplayer" style={{ borderRadius:"10px" }}>
                      <Card.Body>
                        <Row>
                            <Col
                              xs="4"
                              lg="4"
                            >
                              <img
                                src={playerImage}
                                alt="palyer"
                                className="player2"
                                style={{ height:"70px" }}
                              />
                              </Col>
                              <Col xs="8">
                              <div>
                                <Row>
                                <Col xs="12" lg="12">
                                <Row>
                                  <Col xs="10" lg="8">
                                   <h6 className="text" style={{ color:"#F5CB5B"}}> {value.name} </h6> 
                                  </Col>

                                  <Col xs="1" lg="2">
                                    <div className="full">
                                  {" "}
                                  <i
                                    className="fa fa-edit"
                                    style={{ color: "#929292" }}
                                  >
                                    {" "}
                                  </i>
                                </div>
                                  </Col>

                                  <Col xs="1" lg="2">
                                    <div className="full">
                                  {" "}
                                  <i
                                    className="fa fa-times"
                                    style={{ color: "#929292" }}
                                    onClick={handleRemoveBetslip}
                                  >
                                    {" "}
                                  </i>
                                </div>
                                  </Col>  
                                </Row>
                                </Col>
                                <Col xs="12" lg="12" style={{ marginTop:"-5px" }}>
                                  <Row>
                                    <Col lg="7">
                                <label className="text cardtext-1" style={{ lineHeight:"1.2" , fontSize:"12px" }}>
                                {" "}
                                  NYI - G{" "}
                                  Fri, Feb 23 5: 38 AM vs WPG{" "}
                                  {" "}
                                </label>
                                    </Col>
                                    <Col xs="12" lg="5">
                              <Row className="playerbox2 mb-0" style={{ marginTop:"0px" , marginLeft:"5px" }}>
                              <Col
                                xs="5"
                                lg="5"
                                style={{
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                }}
                              >
                                <h6 className="points2" style={{ fontSize:"12px" , color:"#F5CB5B" }}> 38.5 </h6>
                              </Col>
                              <Col
                                xs="6"
                                lg="6"
                                className="scores2"
                                style={{
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign:"center"
                                }}
                              >
                                <h6
                                  className="score"
                                  style={{ fontSize:"12px" }}
                                >
                                  {" "}
                                 Point{" "}
                                </h6>
                              </Col>
                            </Row>
                          </Col>
                                  </Row>
                                </Col>
                                </Row>
                                
                              </div>
                              </Col>

                              <Col lg="12" className="mt-2">
                              <Row>
                              <Col lg="6">
                               <h6 className="entrybox"> MORE </h6>
                              </Col>
                              <Col lg="6">
                               <h6 className="entrybox"> LESS </h6>    
                              </Col>  
                              {/* <div lg="12">
                                <div className="more-down mt-3" style={{ marginLeft:"8px" }}>
                                
                                
                                </div>
                              </div> */}
                              </Row>
                            </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </Col>
          </Row>
          <div className="fixed-div" style={{ background:"#000"}}>
            <div className="two-btn-flex mb-4 mt-3">
              <div >
                <div className="main-input-box column-vertical-center-flex">
                  <div className="justify-equaly">
                    <label className="flex-basis-grow mr-8">
                      <div
                        className="flex-basic-grow input-div-border"
                        style={{
                          background: "#242424",
                          borderRadius: "10px",
                          border:"none"
                        }}
                      >
                        <div className="grow-flex-basis-start">
                          <span
                            className="label-name"
                            style={{
                              color: "white",
                            }}
                          >
                            WAGER
                          </span>
                          <div className="input-with-symbol flex-center-start">
                            {/* <span>$</span> */}
                            <input
                              //  value={wager}
                              style={{
                                color: "white",
                              }}
                              className="input-box-no"
                              type="number"
                              placeholder=""
                              // onChange={(e) =>
                              //   handleOnchange(e, "wager")
                              // }
                            />
                          </div>
                        </div>
                      </div>
                    </label>

                    <label className="flex-basis-grow mr-8">
                      <div
                        className="flex-basic-grow input-div-border"
                        style={{
                          borderRadius: "10px",
                          background: "#211B54",
                          opacity:"0.9",
                          border:"none"
                        }}
                      >
                        <div className="grow-flex-basis-start">
                          <span
                            className="label-name"
                            style={{
                              color: "white",
                            }}
                          >
                            {/* Potential Winnings */}
                            TO WIN
                          </span>
                          <div className="input-with-symbol flex-center-start">
                            {/* <span>$</span> */}
                            <input
                              // value={towin}
                              style={{
                                color: "white",
                              }}
                              className="input-box-no"
                              type="text"
                              placeholder=""
                              // onChange={(e) =>
                              //   handleOnchange(e, "towin")
                              // }
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              {/* <input type={Text}
              className="form-control"
              placeholder="Entry" />
              <input
                type={Text}
                placeholder="To win"
                className="form-control"
              /> */}

            </div>
            {/* <button type="button" class="join-btn-text btn btn-primary w-100">
              {" "}
              Login{" "}
            </button> */}
            <div
                      className="btn btn-success p-2 top2 "
                    style={{ backgroundColor:"#75BC3C!important" , width:"100%" }}
                    >
                      <b style={{ fontSize: "17px", fontFamily: "monospace" }}>
                        Submit Entry                      </b>
                    </div>
          </div>
        </div>
      </Row>
    </Col>
    </div>
  );
};

export default MobileBetSlip;
