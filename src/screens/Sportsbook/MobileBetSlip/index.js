import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import {
  PlayerCardImageUrl,
  sportEndPoint,
} from "../../../constant/Environment";
import "../../../css/main.css";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../../redux/Actions/Actions";
import axios from "axios";
import noplayer from "../../../image/empty2.png";
import { Spinner } from "react-bootstrap";
import { addData, addBetData } from "../../../Utility/API";
import { GeoComplyKey } from '../../../constant/GeoEnv'
import { Navigate, useNavigate } from "react-router-dom";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { ErrorToast } from "../../../components/Toast/message";
import {
  clientMob,
  decryptUsingAES128,
  client,
} from "../../../Utility/ConfigData";
import { endPoints } from "../../../constant/Environment";
import moment from "moment-timezone";
import { isMobile } from "react-device-detect";
import { getIpAddress } from '../../../Utility/ConfigData'
var client1 = null;
const MobileBetSlip = (props) => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  console.log("state", state);
  const [up, setup] = useState(false);
  const [down, setdown] = useState(false);
  const [card, setcard] = useState([]);
  const [apidata, setapidate] = useState([]);

  const [newvalue, setnewvalue] = useState("");

  const [visible, setvisible] = useState(state?.betslip.isVisible);

  const [isloading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [entry, setentry] = useState(1);

  const [playerlength, setplayerlength] = useState(1);

  const [display, setdisplay] = useState(
    localStorage.getItem("display") || true
  );

  const [err, seterr] = useState(true);

  const [start, setStart] = useState(false);

  const dispatch = useDispatch();

  const [checklength, setchecklength] = useState(
    parseInt(localStorage.getItem("length")) || 0
  );

  const [show, setShow] = useState(true);

  const [loginbtn, setloginbtn] = useState(true);

  let visibility = state?.betslip.isVisible;

  let showerror = state?.betslip.Message;

  let teamchk = state?.betslip.isteam;

  const naviagte3 = () => {
    dispatch({
      type: Actions.TEST_CASE,
      data: false,
    });
    navigate("/fabicash");
  };

  const howtoplay = () => {
    dispatch({
      type: Actions.TEST_CASE,
      data: false,
    });
    navigate("/howtoplay");
  };

  const fantasypts = () => {
    dispatch({
      type: Actions.TEST_CASE,
      data: false,
    });
    navigate("/scoring");
  };

  let isMoreValidation = [];

  let userverification = state?.auth?.user?.validation;

  // console.log(userverification);

  let betslipLength = state.betslip.betslips.length;

  const data = JSON.parse(localStorage.getItem("user"));

  let nation = state?.auth.user.nation;

  let userid = state?.auth.user.idUser;

  let sessionid = state?.auth.user.sessionId || localStorage.getItem("session");

  let balance =
    state.auth.isAuthenticated === false
      ? 0
      : state?.auth.user.account.ubalance;

  let accountid =
    state.auth.isAuthenticated === false
      ? state?.auth.user.accountid
      : state?.auth.user.account.idAccount;
  let minvalue = state?.betslip.betConfiguration.min_wager;

  let maxvalue = state?.betslip.betConfiguration.max_wager;

  let isSelected = state?.betslip?.isSelected;

  let date = new Date();

  const handleRemoveBetslip = (index) => {
    dispatch({
      type: Actions.REMOVE_SELECTED_BETSLIP,
      removeEleIndex: index,
    });
    if (betslipLength <= 2) {
      dispatch({
        type: Actions.PARLAY_BETS,
        data: false,
      });
    }
  };
  const handleRemoveAllBetslips = () => {
    dispatch({
      type: Actions.REMOVE_ALL_BETSLIP,
    });
    dispatch({
      type: Actions.PARLAY_BETS,
      data: false,
    });
  };

  const more = (item) => {
    // checkfunction();
    dispatch({
      type: Actions.SINGLE_BET_UPDATE,
      data: { ...item, isMore: true, isLess: false },
    });
    checkfunction();
  };

  const less = (item) => {
    dispatch({
      type: Actions.SINGLE_BET_UPDATE,
      data: { ...item, isMore: false, isLess: true },
    });
    checkfunction();
  };


  const middleCallback = async (data) => {

    switch (data.type) {
      case "LOG":
        console.log(data.message);
        break;
      case "INTERACTION":

        break;
      default:
        console.log(`Unhandled ${data.type}: ${data.message}`);
    }
  };
  const finalCallback = async (err, data) => {
    setIsLoading(false);

    if (err) {
      console.log("Geolocate failed with error code: " + err.error_code);
      console.log("Geolocate failed with error message: " + err.error_message);
      // ErrorToast('err',err.error_message);
      if (err.error_code == 637) {
        alert(err.error_message)
      } else if (err.error_code == 611) {
        alert('Please enable location permission for GLV Application')
      } else if (err.error_code == 615) {
        //  alert(err.error_code)
        alert(err.error_message)
      }
      return {
        status: "failed",
        message: err.error_message,
      };
    } else {
      console.log("Geolocate succeeded with data: " + data);
      if (data) {

        let decryptResponse = decryptUsingAES128(data);
        if (decryptResponse) {
          let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.fantasy}`;
          setIsLoading(true);
          await addBetData(url, datavalue)
            .then((response) => {
              if (response.data.status === "SUCCESS") {
                setapidate(response.data.playerData);
                setIsLoading(false);
                setentry(response.data.wager);
                setplayerlength(response.data.playerData.length);
                handleRemoveAllBetslips();
                setnewvalue(0);
                setchecklength(0);
                dispatch({
                  type: Actions.RECECIPT_VISIBLE,
                  data: false,
                });
                setIsLoading(false);
              } else {
                setIsLoading(false);
                if (response.data?.code == 401) {
                  alert('Invalid Session !! Please login again')
                  setMessage('Invalid Session !! Please login again');
                  ErrorToast('Invalid Session !! Please login again');
                  dispatch({
                    type: Actions.TEST_CASE,
                    data: false,
                  });

                  dispatch({
                    type: Actions.LOGOUT,
                  });
                  dispatch({
                    type: Actions.REMOVE_ALL_BETSLIP,
                  });
                  dispatch({
                    type: Actions.PARLAY_BETS,
                    data: false,
                  });
                  sessionStorage.clear();
                  window.location.reload();
                  navigate("/");
                } else {
                  setMessage(response.data.message);
                  ErrorToast(response.data.message);
                }
              }
            })
            .catch((error) => {
              setIsLoading(false);
              ErrorToast("Some Thing Went Wrong Please try again");
              console.error(error);
            });
        }
      }
      return {
        status: "success",
        message: "Successfully login",
      };
    }
  };




  const betvalue = (e) => {
    // const regex = /[-+]?([0-9]*[.])?[0-9]+([eE][-+]?\d+)?/;

    const regex = /^\d*\.?\d{0,2}$/;

    // const regex =  /(^\d{10}$)|(^\d{10}$)|(^\d{5}-\d{4}$)/ ;

    const newValue = e.target.value;

    if (regex.test(newValue)) {
      if (
        newValue === "" ||
        newValue === "-" ||
        newValue === "-." ||
        newValue === ".-" ||
        newValue.match(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/)
      ) {
        setnewvalue(newValue);
      }
    }
  };

  let datavalue = {
    platform: "WEB",
    nation: nation,
    userId: userid,
    sessionId: sessionid,
    accountId: accountid,
    context: "string",
    amount: newvalue,
    wager: newvalue,
    toWin: 0,
    type: "STRAIGHT",
    playerData: state.betslip.betslips,
  };

  const betslip = async (event) => {
    // let url = `${sportEndPoint.api.fantasy}`;
    var geolocateOptions = {
      userId: state?.auth.user.idUser,
      phone: "1234567890",
      reason: "login",
      session: state?.auth.user.sessionId,
    };
    setIsLoading(true);
    let geoTime = state?.auth?.geoExpiryTime;
    let currentDateTime = new Date();
    let stateIP = state?.auth?.ip;

    let checkIp = await getIpAddress();

    if (geoTime > currentDateTime && checkIp.ip == stateIP) {
      let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.fantasy}`;
      setIsLoading(true);
      await addBetData(url, datavalue)
        .then((response) => {
          if (response.data.status === "SUCCESS") {
            setapidate(response.data.playerData);
            setIsLoading(false);
            setentry(response.data.wager);
            setplayerlength(response.data.playerData.length);
            handleRemoveAllBetslips();
            setnewvalue(0);
            setchecklength(0);
            dispatch({
              type: Actions.RECECIPT_VISIBLE,
              data: false,
            });
            setIsLoading(false);
          } else {
            setIsLoading(false);
            if (response.data?.code == 401) {
              alert('Invalid Session !! Please login again')
              setMessage('Invalid Session !! Please login again');
              ErrorToast('Invalid Session !! Please login again');
              dispatch({
                type: Actions.TEST_CASE,
                data: false,
              });

              dispatch({
                type: Actions.LOGOUT,
              });
              dispatch({
                type: Actions.REMOVE_ALL_BETSLIP,
              });
              dispatch({
                type: Actions.PARLAY_BETS,
                data: false,
              });
              sessionStorage.clear();
              window.location.reload();
              navigate("/");
            } else {
              setMessage(response.data.message);
              ErrorToast(response.data.message);
            }
          }

        })
        .catch((error) => {
          setIsLoading(false);
          ErrorToast("Some Thing Went Wrong Please try again");
          console.error(error);
        });
    } else {
      // let result = await client.geolocate(
      //   geolocateOptions,
      //   middleCallback,
      //   finalCallback
      // );
      let result = await client1.geolocate(
        geolocateOptions,
        middleCallback,
        finalCallback
      );
      // if (result?.status == "success" || result == undefined ) {
      //   let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.fantasy}`;
      //   setIsLoading(true);
      //   await addBetData(url, datavalue)
      //     .then((response) => {
      //       if (response.data.status === "SUCCESS") {
      //         setapidate(response.data.playerData);
      //         setIsLoading(false);
      //         setentry(response.data.wager);
      //         setplayerlength(response.data.playerData.length);
      //         handleRemoveAllBetslips();
      //         setnewvalue(0);
      //         setchecklength(0);
      //         dispatch({
      //           type: Actions.RECECIPT_VISIBLE,
      //           data: false,
      //         });
      //         setIsLoading(false);
      //       } else {
      //         setMessage(response.data.message);
      //         setIsLoading(false);
      //         ErrorToast(response.data.message);
      //       }
      //     })
      //     .catch((error) => {
      //       setIsLoading(false);
      //       ErrorToast("Some Thing Went Wrong Please try again");
      //       console.error(error);
      //     });
      // } else {
      //   ErrorToast(result.message);
      // }
    }

    // if(isMobile){
    //   let result =  await client.geolocate(geolocateOptions, middleCallback, finalCallback);

    //  }
  };

  useEffect(() => {
    localStorage.setItem("display", display);
    localStorage.setItem("length", checklength);
  }, [display, checklength]);

  const checkfunction = () => {
    const truearray = state.betslip.betslips.filter(function (ele) {
      return ele.isMore == true || ele.isLess == true;
    });

    if (truearray.length == state.betslip.betslips.length - 1) {
      setchecklength(truearray.length);

      setdisplay(false);
    }
  };

  useEffect(() => {
    // mainbetslip = state.betslip.betslips;
    isMoreValidation = [];
    state.betslip.betslips.map((item) => {
      if (item.isMore || item.isLess) {
        isMoreValidation = [...isMoreValidation, true];
        if (isMoreValidation.length == betslipLength && betslipLength > 0) {
          // console.log(isMoreValidation.length);
          dispatch({
            type: Actions.SELECTED,
            data: true,
          });
        } else {
          dispatch({
            type: Actions.SELECTED,
            data: false,
          });
          // console.log("hello");
        }
      }
    });
  }, [state.betslip.betslips]);


  useEffect(() => {

    state.betslip.betslips.map((item) => {

      if (item.game_type == 1) {

        const teamIds = state.betslip.betslips.map((item) => item.team);

        const allDifferent = teamIds.every((item) => item === teamIds[0]);

        if (allDifferent == false) {

          dispatch({
            type: Actions.TEAMCHECK,
            data: true,
          });
        }

      }

      if (item.game_type == 2) {
        dispatch({
          type: Actions.TEAMCHECK,
          data: true,
        });
      }

    });
  }, [state.betslip.betslips]);



  const gotologin = () => {
    dispatch({
      type: Actions.TEST_CASE,
      data: false,
    });
    navigate("/login");
  };

  let morelesscount = 0;

  const betsubmit = async () => {
    debugger
    if (teamchk == true) {
      for (let i = 0; i < state.betslip.betslips.length; i++) {
        // console.log(state.betslip.betslips[i].isMore , state.betslip.betslips[i].isLess , i , state.betslip.betslips.length , morelesscount);
        if (
          state.betslip.betslips[i].isMore == true ||
          state.betslip.betslips[i].isLess == true
        ) {
          morelesscount = morelesscount + 1;
          if (morelesscount == betslipLength) {
            if (datavalue.amount != "") {
              if (parseInt(datavalue.amount) < parseInt(maxvalue)) {
                if (parseInt(datavalue.amount) >= parseInt(minvalue)) {
                  if (datavalue.amount <= balance) {
                    betslip();

                    break;
                  } else {
                    dispatch({
                      type: Actions.CLEAR_MSSG,
                      data: false,
                    });
                  }
                } else {
                  ErrorToast("enter value more than " + minvalue);
                  break;
                }
              } else {
                ErrorToast("enter value less than " + maxvalue);
                break;
              }
            } else {
              ErrorToast("Pls enter the amount");
              break;
            }
          }
        } else {
          ErrorToast("Please select More or Less for all players");

          break;
        }
      }
    }
    else {
      ErrorToast("Please select at least 1 player from another team. Your team cannot consist of all players from the same team.");
    }
  };



  const closeconfirmbox = () => {
    dispatch({
      type: Actions.RECECIPT_VISIBLE,
      data: true,
    });
  };

  return (
    <div
      className="col-lg-4"
    //  style={{maxWidth:'370px'}}
    >
      <Row style={{ paddingLeft: "10px", paddingRight: "12px" }}>
        <div className="display height-scroll team-divmain">
          <Row>
            <Col lg="12" className="mb-1">
              <Row>
                <Col lg="2" className="col-2">
                  <h5
                    className="mainbet"
                    style={{
                      border: "2px solid #C02640",
                      textAlign: "center",
                      color: "#C02640",
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      padding: "3px",
                    }}
                  >
                    {" "}
                    <b>{betslipLength}</b>
                  </h5>
                </Col>
                <Col lg="7" className="col-7">
                  <label className="betslip-heading">Team Selection</label>
                </Col>
                <Col
                  lg="3"
                  className="P-0 col-3"
                  onClick={() => {
                    handleRemoveAllBetslips();
                    setdisplay(true);
                    dispatch({
                      type: Actions.SELECTED,
                      data: false,
                    });
                    // seterr(true);
                    dispatch({
                      type: Actions.CLEAR_MSSG,
                      data: true,
                    });
                    dispatch({
                      type: Actions.RECECIPT_VISIBLE,
                      data: true,
                    });
                    dispatch({
                      type: Actions.TEAMCHECK,
                      data: false,
                    });
                  }}
                >
                  <h6 className="clear_a">Clear all</h6>
                </Col>
              </Row>
            </Col>
            <Col
              lg="12"
              style={{
                padding: visibility ? "" : "18px",
                // borderRadius: visibility ? "" : "15px",
                // background: visibility ? "" : "#E4E4E4",
              }}
            >
              {state.betslip.betslips.map((value, index) => {
                let playerImage = "";
                if (value?.image) {
                  if (value?.image.includes("https://")) {
                    playerImage = value?.image;
                  } else {
                    playerImage = `${PlayerCardImageUrl}/${value.image}`;
                  }
                } else {
                  playerImage = `${PlayerCardImageUrl}${"/player/player.png"}`;
                }

                //  console.log(value.playerevent.league)

                //  console.log(value.game_type);

                // console.log(value.isMore , value.isLess);

                // let mytime = value.event_time

                const date = value?.event_time;

                const betslip_time = moment(date).format("MMM D, h:mm a");

                return (
                  <>
                    <Card
                      className="slip-card"
                      id="addplayer"
                      style={{ borderRadius: "10px", marginBottom: "10px" }}
                    >
                      <Card.Body>
                        <Row>
                          <Col xs="3" lg="3">
                            <img
                              src={playerImage}
                              alt="palyer"
                              className="player2"
                              style={{ height: "60px" }}
                            />
                          </Col>
                          <Col xs="9">
                            <div>
                              <Row>
                                <Col xs="12" lg="12">
                                  <Row>
                                    <Col xs="8" lg="8">
                                      <h6 className="text bet-username p-0">
                                        {" "}
                                        {value?.name}{" "}
                                      </h6>
                                    </Col>

                                    {value?.isMore ? (
                                      <Col
                                        xs="2"
                                        lg="2"
                                        style={{ marginTop: "-8px" }}
                                      >
                                        <div className="full ">
                                          {" "}
                                          <i
                                            className="fa fa-chevron-up"
                                            style={{ color: "#75BC3C" }}
                                          >
                                            {" "}
                                          </i>
                                        </div>
                                      </Col>
                                    ) : (
                                      ""
                                    )}

                                    {value?.isLess ? (
                                      <Col
                                        xs="2"
                                        lg="2"
                                        style={{ marginTop: "-8px" }}
                                      >
                                        <div className="full">
                                          {" "}
                                          <i
                                            className="fa fa-chevron-down"
                                            style={{ color: "#ED1A3B" }}
                                          >
                                            {" "}
                                          </i>
                                        </div>
                                      </Col>
                                    ) : (
                                      ""
                                    )}

                                    <Col xs="2" lg="2">
                                      <div className="full bet-delate">
                                        {" "}
                                        <i
                                          className="fa fa-trash"
                                          style={{
                                            color: "#E43A17",
                                            cursor: "pointer",
                                          }}
                                          onClick={() => {
                                            handleRemoveBetslip(index);
                                            // setchecklength(checklength-1);
                                            dispatch({
                                              type: Actions.SELECTED,
                                              data: false,
                                            });
                                            dispatch({
                                              type: Actions.TEAMCHECK,
                                              data: false,
                                            });
                                          }}
                                        >
                                          {" "}
                                        </i>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col
                                  xs="12"
                                  lg="12"
                                  style={{ marginTop: "-10px" }}
                                >
                                  <Row>
                                    <Col lg="6" xs="6" className="mt-2">
                                      {value?.game_type == 2 ? (
                                        <Row>
                                          <span
                                            style={{
                                              fontWeight: "bold",
                                              color: "#0D3862",
                                              fontSize: "12px",
                                              padding: "0px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {value?.single_event}
                                          </span>
                                        </Row>
                                      ) : (
                                        <Row>
                                          <label
                                            className="text cardtext-1 bettext-1"
                                            style={{ paddingRight: "0px" }}
                                          >
                                            {" "}
                                            {value?.position}{" "}
                                            <span
                                              style={{
                                                color: "#0D3862",
                                                fontWeight: "normal",
                                              }}
                                            >
                                              |
                                            </span>{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {" "}
                                              {value?.team === value?.teamHid
                                                ? value?.teamHname
                                                : value?.teamAname}{" "}
                                              {value?.team ===
                                                value?.teamHid ? (
                                                <span
                                                  style={{
                                                    fontWeight: "normal",
                                                  }}
                                                >
                                                  vs
                                                </span>
                                              ) : (
                                                <span
                                                  style={{
                                                    fontWeight: "normal",
                                                  }}
                                                >
                                                  @
                                                </span>
                                              )}{" "}
                                              {value?.team === value?.teamHid
                                                ? value?.teamAname
                                                : value?.teamHname}
                                            </span>{" "}
                                          </label>
                                        </Row>
                                      )}
                                    </Col>
                                    <Col xs="6" lg="6">
                                      <Row
                                        className="playerbox2 mb-0"
                                        style={{
                                          marginTop: "0px",
                                          marginLeft: "5px",
                                        }}
                                      >
                                        <Col
                                          xs="7"
                                          lg="7"
                                          style={{
                                            paddingRight: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <h6
                                            className="points2"
                                            style={{
                                              fontSize: "14px",
                                              color: "white",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            {" "}
                                            {value?.points}{" "}
                                          </h6>
                                        </Col>
                                        <Col
                                          xs="5"
                                          lg="5"
                                          className="scores2"
                                          style={{
                                            paddingRight: "0px",
                                            paddingLeft: "0px",
                                            textAlign: "center",
                                            color: "white",
                                          }}
                                        >
                                          <h6
                                            className="score new-score"
                                            style={{
                                              fontSize: "12px",
                                              textTransform: "uppercase",
                                              color: "white",
                                            }}
                                          >
                                            {" "}
                                            {value?.statAbv}{" "}
                                          </h6>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>

                                  <Row>
                                    <h6
                                      style={{
                                        color: "#0D3862",
                                        fontSize: "12px",
                                        fontWeight: "normal",
                                        marginTop: "-2px",
                                      }}
                                    >
                                      {betslip_time}
                                    </h6>
                                  </Row>
                                </Col>
                              </Row>
                            </div>
                          </Col>

                          <Col lg="12" className="mt-2">
                            <Row>
                              <Col lg="6" xs="6">
                                <h6
                                  className="entrybox"
                                  onClick={() => {
                                    more(value);
                                    // checkfunction()
                                  }}
                                  // onClick={checkfunction}
                                  style={{
                                    border: "1px solid #0D3862",
                                    background: value.isMore
                                      ? "#C02640"
                                      : "white",
                                    fontWeight: value.isMore ? "700" : "",
                                    color: value.isMore ? "white" : "black",
                                  }}
                                >
                                  {" "}
                                  MORE{" "}
                                </h6>
                              </Col>
                              <Col lg="6" xs="6">
                                <h6
                                  className="entrybox"
                                  onClick={() => {
                                    less(value);
                                    // checkfunction()
                                  }}
                                  style={{
                                    border: "1px solid #0D3862",
                                    background: value?.isLess
                                      ? "#C02640"
                                      : "white",
                                    fontWeight: value?.isLess ? "700" : "",
                                    color: value?.isLess ? "white" : "black",
                                  }}
                                >
                                  {" "}
                                  LESS{" "}
                                </h6>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}

              {/* { betslipLength > 0 ? "" : */}
              <div className="login-betsli">
                <div
                  className="col-lg-12 confirmbet"
                  style={{
                    display: visibility ? "none" : "contents",
                  }}
                >
                  <h6 className="green-heading">Contest Entry Confirmed</h6>

                  {apidata.map((item, value) => {
                    const date = item?.event_time;

                    const confirm_time = moment(date).format("MMM D, h:mm a");

                    let playerImage = "";
                    if (item?.image) {
                      if (item?.image.includes("https://")) {
                        playerImage = item?.image;
                      } else {
                        playerImage = `${PlayerCardImageUrl}/${item.image}`;
                      }
                    } else {
                      playerImage = `${PlayerCardImageUrl}${"/player/player.png"}`;
                    }
                    return (
                      <Row
                        className="border-row"
                        style={{ paddingRight: "5px", paddingLeft: "5px" }}
                      >
                        <Col xs="4" lg="3">
                          <img
                            src={playerImage}
                            alt="palyer"
                            className="player2"
                            style={{ height: "60px" }}
                          />
                        </Col>
                        <Col xs="8">
                          <div>
                            <Row className="mt-2">
                              <Col xs="12" lg="12">
                                <Row>
                                  <Col
                                    xs="10"
                                    lg="7"
                                    style={{ paddingRight: "0px" }}
                                  >
                                    <h6 className="text bet-username">
                                      {" "}
                                      {item?.name}{" "}
                                    </h6>
                                  </Col>

                                  {item?.isMore == true ? (
                                    <Col
                                      xs="1"
                                      lg="5"
                                      style={{
                                        display: "flex",
                                        marginTop: "-5px",
                                      }}
                                    >
                                      <div className="full">
                                        {" "}
                                        <i
                                          className="fa fa-chevron-up"
                                          style={{ color: "#75BC3C" }}
                                        >
                                          {" "}
                                        </i>
                                      </div>
                                      <h6 className="bettext-1 more-6">MORE</h6>
                                    </Col>
                                  ) : (
                                    ""
                                  )}

                                  {item?.isLess == true ? (
                                    <Col
                                      xs="1"
                                      lg="5"
                                      style={{
                                        display: "flex",
                                        marginTop: "-5px",
                                      }}
                                    >
                                      <div className="full">
                                        {" "}
                                        <i
                                          className="fa fa-chevron-down"
                                          style={{ color: "red" }}
                                        >
                                          {" "}
                                        </i>
                                      </div>
                                      <h6
                                        style={{
                                          color: "#0D3862",
                                          fontSize: "12px",
                                          marginLeft: "12px",
                                          marginTop: "6px",
                                        }}
                                      >
                                        LESS
                                      </h6>
                                    </Col>
                                  ) : (
                                    ""
                                  )}
                                </Row>
                              </Col>
                              <Col
                                xs="12"
                                lg="12"
                                style={{ marginTop: "-5px" }}
                              >
                                <Row>
                                  <Col
                                    lg="6"
                                    xs="6"
                                    style={{ marginTop: "0px" }}
                                  >
                                    {item?.game_type == 2 ? (
                                      <Row>
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            color: "#0D3862",
                                            fontSize: "12px",
                                            padding: "0px",
                                            marginLeft: "10px",
                                          }}
                                        >
                                          {item.single_event}
                                        </span>
                                      </Row>
                                    ) : (
                                      <Row>
                                        <label
                                          className="text cardtext-1 bettext-1"
                                          style={{ paddingRight: "0px" }}
                                        >
                                          {" "}
                                          {item?.position}{" "}
                                          <span
                                            style={{
                                              color: "#0D3862",
                                              fontWeight: "normal",
                                            }}
                                          >
                                            |
                                          </span>{" "}
                                          <span>
                                            {" "}
                                            {item?.team ==
                                              item?.playerevent?.teamH?.id
                                              ? item?.playerevent?.teamH?.abv
                                              : item?.playerevent?.teamH
                                                ?.abv}{" "}
                                            {item.team ==
                                              item.playerevent.teamH.id
                                              ? "vs"
                                              : "@"}{" "}
                                            {item?.team ==
                                              item?.playerevent?.teamH?.id
                                              ? item?.playerevent?.teamA?.abv
                                              : item?.playerevent?.teamH?.abv}
                                          </span>{" "}
                                        </label>
                                      </Row>
                                    )}
                                  </Col>
                                  <Col xs="6" lg="6">
                                    <Row
                                      className="playerbox2 mb-0"
                                      style={{
                                        marginTop: "0px",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      <Col
                                        xs="6"
                                        lg="6"
                                        style={{
                                          paddingRight: "0px",
                                          paddingLeft: "0px",
                                        }}
                                      >
                                        <h6 className="points2">
                                          {" "}
                                          {item?.points}{" "}
                                        </h6>
                                      </Col>
                                      <Col xs="6" lg="6" className="scores2">
                                        <h6
                                          className="score"
                                          style={{ fontSize: "12px" }}
                                        >
                                          {" "}
                                          {item?.statAbv}{" "}
                                        </h6>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>

                                <Row>
                                  <h6
                                    style={{
                                      color: "#0D3862",
                                      fontSize: "12px",
                                      fontWeight: "normal",
                                      marginTop: "-14px",
                                      marginLeft: "1px",
                                    }}
                                  >
                                    {confirm_time}
                                  </h6>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    );
                  })}

                  <div className="boxing" style={{ marginTop: "2rem" }}>
                    {playerlength === 2 ? (
                      <div className="payoutbox p-2 mb-2">
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6 class="blue-color">
                              You must at least get 2 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              2 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>3X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 3 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : playerlength === 3 ? (
                      <div
                        className="payoutbox p-2 mb-2"
                        style={{
                          borderRadius: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6>
                              You must at least get 2 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              3 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>5X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 5 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              2 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>1.25X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 1.25 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : playerlength === 4 ? (
                      <div
                        className="payoutbox p-2 mb-2"
                        style={{
                          borderRadius: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6>
                              You must at least get 2 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              4 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>10X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 10 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              3 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>1.5X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 1.5 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              2 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>1X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 1 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : playerlength === 5 ? (
                      <div
                        className="payoutbox p-2 mb-2"
                        style={{
                          borderRadius: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6>
                              You must at least get 3 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              5 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>15X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 15 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              4 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>2X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 2 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              3 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>1.25X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 1.25 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : playerlength === 6 ? (
                      <div
                        className="payoutbox p-2 mb-2"
                        style={{
                          borderRadius: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6>
                              You must at least get 4 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              6 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>25X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 25 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4">
                            <h6 style={{ fontWeight: "300!important" }}>
                              5 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>3X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 3 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4">
                            <h6 style={{ fontWeight: "300!important" }}>
                              4 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>1.5X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 1.5 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : playerlength === 7 ? (
                      <div
                        className="payoutbox p-2 mb-2"
                        style={{
                          borderRadius: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6>
                              You must at least get 5 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              7 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>40X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 40 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              6 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>4X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 4 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              5 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>1.75X</h6>
                          </Col>
                          <Col lg="3" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 1.75 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : playerlength === 8 ? (
                      <div
                        className="payoutbox p-2 mb-2"
                        style={{
                          borderRadius: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6>
                              You must at least get 6 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              8 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>60X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 60 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              7 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>5X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 5 * 100) / 100}</h6>
                          </Col>

                          <Col lg="6" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              6 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>2X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 2 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : playerlength === 9 ? (
                      <div
                        className="payoutbox p-2 mb-2"
                        style={{
                          borderRadius: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6>
                              You must at least get 7 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              9 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>80X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 80 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              8 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>10X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 10 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              7 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>2.5X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 2.5 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : playerlength === 10 ? (
                      <div
                        className="payoutbox p-2 mb-2"
                        style={{
                          borderRadius: "15px",
                          marginBottom: "5px",
                        }}
                      >
                        <Row className="payoutrow">
                          <Col lg="12" style={{ marginBottom: "4px" }}>
                            <h6>
                              You must at least get 8 player selections correct
                              to qualify for a payout
                            </h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              10 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>100X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 100 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              9 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>15X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 15 * 100) / 100}</h6>
                          </Col>

                          <Col lg="4" xs="4" className="nocorrect">
                            <h6 style={{ fontWeight: "300!important" }}>
                              8 Correct
                            </h6>
                          </Col>
                          <Col lg="4" xs="4" className="times">
                            <h6>3X</h6>
                          </Col>
                          <Col lg="4" xs="4" className="amount">
                            <h6>${Math.trunc(entry * 3 * 100) / 100}</h6>
                          </Col>
                        </Row>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <Button
                    className="btn btn-danger mt-4 custom-red"
                    variant="danger"
                    onClick={closeconfirmbox}
                    style={{ width: "100%" }}
                  >
                    Close
                  </Button>
                </div>
              </div>
              {/* } */}
              {isloading && (
                <div className="spintarget">
                  <>
                    <Spinner animation="border" variant="light" />
                  </>
                </div>
              )}

              {state.betslip.betslips.length == 0 && (
                <div style={{ display: visibility ? "contents" : "none" }}>
                  <Col lg="12">
                    <img
                      src={noplayer}
                      alt="noplayer"
                      style={{ height: "250px", marginLeft: "16%" }}
                    />
                  </Col>

                  {/* <Col lg="12" style={{ marginTop: "-10px" }}>
                    <h6 style={{ color: "white", textAlign: "center" }}>
                      No players selected <br /> Click players to select them.
                    </h6>
                  </Col> */}
                </div>
              )}
            </Col>
          </Row>

          <div
            className="fixed-div"
            style={{ background: "#E4E4E4", marginBottom: "-10px" }}
          >
            {betslipLength > 0 && visibility ? (
              <Row
                className="mb-3"
                style={{ paddingLeft: "12px", paddingRight: "12px" }}
              >
                <div
                  style={{
                    borderBottom: "3px solid #ED1A3B",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                ></div>
              </Row>
            ) : (
              ""
            )}

            <div className="two-btn-flex21" style={{ gap: "0rem!important" }}>
              <div>
                {teamchk == false && betslipLength > 1 ?

                  <div className="two-btn-flex2" style={{ marginBottom: "15px" }}>
                    <h6 style={{ color: "#0D3862" }}>
                      Please select at least 1 player from another team. Your team cannot consist of all players from the same team.
                    </h6>
                  </div>
                  :
                  <div>
                    {betslipLength > 1 && isSelected == false ? (
                      <div className="two-btn-flex2">
                        <h6 style={{ color: "#0D3862" }}>
                          To continue, select More or Less for all your selected
                          players.
                        </h6>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                }



                {betslipLength == 0 && (
                  <div
                    className="two-btn-flex2"
                    style={{
                      display: visibility ? "" : "none",
                      marginTop: "20px",
                    }}
                  >
                    <h6 style={{ color: "#0D3862" }}>
                      Select up to 10 players to build you team.
                      <br />
                    </h6>
                    <h6>
                      {" "}
                      <a onClick={howtoplay}>How to play</a>{" "}
                      <span style={{ color: "#0D3862" }}>and</span>{" "}
                      <a onClick={fantasypts}>Fantasy Points</a>
                    </h6>
                  </div>
                )}
                {betslipLength == 1 && (
                  <div className="two-btn-flex2">
                    <h6>
                      {" "}
                      You must get at least 2 player selections correct to
                      qualify for a payout.
                    </h6>
                  </div>
                )}

                {/* { betslipLength > 1 ? <h5 style={{ color:"blue" }}>select more or less for each player to continue.</h5> : " "}    */}

                {userverification === "0" ? (
                  ""
                ) : (
                  <div>
                    {betslipLength < 2 || isSelected == false ? (
                      ""
                    ) : (
                      <div className="main-input-box column-vertical-center-flex">
                        {/* <h1 style={{color:"red!important"}}>{betslipLength}{checklength}{display}</h1> */}
                        <div className="justify-equaly">
                          <label
                            className="flex-basis-grow mr-8"
                          // style={{ display: display?"none":"" }}
                          >
                            <div className="flex-basic-grow input-div-border">
                              <div className="grow-flex-basis-start">
                                <span className="label-name ">ENTRY FEE</span>
                                <div className="input-with-symbol flex-center-start">
                                  <input
                                    className="input-box-no"
                                    type="text"
                                    placeholder=""
                                    min={0}
                                    value={newvalue}
                                    onChange={betvalue}
                                  />
                                  <span className="input-boxsymbol">$</span>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* <h5 style={{ color:"white" }}>{display}</h5> */}
            {isSelected == false ? (
              ""
            ) : (
              <div
                className="yourwinning mt-4"
              // style={{ display:display?"none":"" }}
              >
                {betslipLength === 2 ? (
                  <div className="payoutbox p-2 mb-2">
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 2 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          2 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>3X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 3 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : betslipLength === 3 ? (
                  <div
                    className="payoutbox p-2 mb-2"
                    style={{
                      border: "2px solid $0D3862",
                      borderRadius: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 2 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          3 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>5X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 5 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          2 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>1.25X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 1.25 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : betslipLength === 4 ? (
                  <div
                    className="payoutbox p-2 mb-2"
                    style={{
                      borderRadius: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 2 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          4 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>10X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 10 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          3 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>1.5X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 1.5 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          2 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>1X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 1 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : betslipLength === 5 ? (
                  <div
                    className="payoutbox p-2 mb-2"
                    style={{
                      borderRadius: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 3 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          5 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>15X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 15 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          4 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>2X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 2 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          3 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>1.25X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 1.25 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : betslipLength === 6 ? (
                  <div
                    className="payoutbox p-2 mb-2"
                    style={{
                      borderRadius: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 4 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          6 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>25X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 25 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          5 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>3X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 3 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          4 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>1.5X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 1.5 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : betslipLength === 7 ? (
                  <div
                    className="payoutbox p-2 mb-2"
                    style={{
                      borderRadius: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 5 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          7 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>40X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 40 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          6 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>4X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 4 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          5 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>1.75X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 1.75 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : betslipLength === 8 ? (
                  <div
                    className="payoutbox p-2 mb-2"
                    style={{
                      borderRadius: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 6 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          8 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>60X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 60 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          7 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>5X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 5 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          6 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>2X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 2 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : betslipLength === 9 ? (
                  <div
                    className="payoutbox p-2 mb-2"
                    style={{
                      borderRadius: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 7 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          9 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>80X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 80 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          8 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>10X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 10 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          7 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>2.5X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 2.5 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : betslipLength === 10 ? (
                  <div
                    className="payoutbox p-2 mb-2"
                    style={{
                      borderRadius: "15px",
                      marginBottom: "5px",
                    }}
                  >
                    <Row className="payoutrow">
                      <Col lg="12" style={{ marginBottom: "4px" }}>
                        <h6>
                          You must at least get 8 player selections correct to
                          qualify for a payout
                        </h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          10 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>100X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 100 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          9 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>15X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 15 * 100) / 100}</h6>
                      </Col>

                      <Col lg="4" xs="4" className="oncorrect">
                        <h6 style={{ fontWeight: "300!important" }}>
                          8 Correct
                        </h6>
                      </Col>
                      <Col lg="4" xs="4" className="times">
                        <h6>3X</h6>
                      </Col>
                      <Col lg="4" xs="4" className="amount">
                        <h6>${Math.trunc(newvalue * 3 * 100) / 100}</h6>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}

            {/* {betslipLength > 1 || betslipLength === 0 ? (
              ""
            ) : (
              <Row>
                <Col lg="12" xs="12" className="mb-2">
                  <h6
                    style={{
                      color: "red",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Minimum 2 players required
                  </h6>
                </Col>
              </Row>
            )} */}

            {/* <div className="message" style={{display:start?"":"none"}}> 
                  <div className="column-vertical-left-flex border-top">
                    <div className="column-vertical-left-flex pt-12 pb-12">
                      <div className="column-vertical-left-nobasis bg-space16">
                        <div className="flex-basic-grow">
                          <span className="span-pay">{message}</span>
                        </div>
                        <div className="btn btn-success">OK</div>
                      </div>
                    </div>
                  </div>
                  </div> */}

            {userverification === "0" ? (
              ""
            ) : (
              <div>
                {betslipLength > 1 ? (
                  <div className="bet-buttondiv">
                    {state.auth.isAuthenticated === false ? (
                      <div
                        className="btn btn-success p-2 top2 mt-2 mb-2"
                        style={{
                          background:
                            isloading == false
                              ? "#75BC3C!important"
                              : "lightgreen",
                          width: "100%",
                        }}
                        onClick={gotologin}
                      // disabled={isloading?"true":""}
                      >
                        <b style={{ fontSize: "17px" }}>Login</b>
                      </div>
                    ) : (
                      <button
                        className="btn btn-success p-2 top2 mt-3 mb-3"
                        style={{
                          background:
                            isloading == false ? "#179624" : "lightgreen",
                          width: "100%",
                        }}
                        onClick={betsubmit}
                        disabled={isloading ? true : false}
                      >
                        <b style={{ fontSize: "16px" }}>
                          {isloading == false ? "Submit entry" : "Loading....."}
                        </b>
                      </button>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}

            <Toaster />

            <h6
              style={{
                color: "blue",
                fontSize: "14px",
                marginTop: "16px",
                display: showerror ? "none" : "",
              }}
            >
              You don't have enough funds in your account to complete your
              contest entry.
              <span
                style={{ color: "red", fontSize: "16px", cursor: "pointer" }}
                onClick={naviagte3}
              >
                Click Here
              </span>{" "}
              to add funds to your account.{" "}
            </h6>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default MobileBetSlip;
