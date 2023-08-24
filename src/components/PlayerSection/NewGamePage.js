import React, { useState, useRef, useEffect } from "react";
import "../../screens/Sportsbook/Sportsbook.css"; //"../Sportsbook.css";
import { Row, Col, Card, Button, Form, Container } from "react-bootstrap";
import "../../css/main.css"; ///"../../css/main.css"
import { useNavigate } from "react-router-dom";
import PlayerBetSlip from "../PlayerBetSlip";
import Checkbox from "@mui/material/Checkbox";

import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import NotFound from "../../screens/NotFound";
import { PlayerCardImageUrl } from "../../constant/Environment";
import Toaster from "../../components/Toast";
import { isMobile } from "react-device-detect";

import { ErrorToast } from "../../components/Toast/message";

import { FiCheckCircle } from "react-icons/fi";
import medalImage from "../../assests/indiaImages/medal.png";
import img1 from "../../assests/indiaImages/img1.png";
import p11 from "../../assests/indiaImages/p-11.png";
import ticket from "../../assests/indiaImages/ticket.png";
import winner from "../../assests/indiaImages/winner.png";
import flexImage from "../../assests/indiaImages/flex.png";
import PlayerImage from "../../assests/indiaImages/player.jpeg";

const NewGamePage = (props) => {
  const { playerList, searchQuery, activeTabIndex, activeTabName } = props;
  const [card, setcard] = useState([]);
  const dispatch = useDispatch();
  const [counter, setcounter] = useState(1);
  const state = useSelector((state) => state);
  const { selectedBetslipBtn } = state.betslip;

  const handlechangePlayer = (btnName, element, playerId, eventId) => {
    if (state?.betslip?.isVisible == false) {
      dispatch({
        type: Actions.RECECIPT_VISIBLE,
        data: true,
      });
    }

    if (state?.betslip?.isSelected == true) {
      dispatch({
        type: Actions.SELECTED,
        data: false,
      });
    }

    if (state?.betslip.isteam == true && state?.betslip.betslips.length < 10) {
      dispatch({
        type: Actions.TEAMCHECK,
        data: false,
      });
    }

    if (state?.betslip.Message == false) {
      dispatch({
        type: Actions.CLEAR_MSSG,
        data: true,
      });
    }

    let index = selectedBetslipBtn.indexOf(btnName);
    setcounter(1);

    if (index == -1) {
      if (length <= 9) {
        /**
         * If element is not in selected then will insert it
         * otherwise already in array it will remove it
         */
        console.log(length, index);

        if (index > -1) {
          dispatch({
            type: Actions.REMOVE_SELECTED_BETSLIP,
            removeEleIndex: index,
          });
        } else {
          dispatch({
            type: Actions.SELECTED_BETSLIP,
            data: {
              ...element,
              displayName: "",
              isMore: false,
              isLess: false,
              playerId,
              eventId,
            },
            selectedBtn: btnName,
          });
        }
      } else {
        ErrorToast("Maximum of 10 players allowed per contest.");
      }
    } else {
      dispatch({
        type: Actions.REMOVE_SELECTED_BETSLIP,
        removeEleIndex: index,
      });
    }
  };

  let length = state.betslip.betslips.length;

  useEffect(() => {
    setTimeout(() => {
      setcounter(0);
    }, 2000);
  }, [counter]);
  return (
    <Row>
      <Toaster />
      {playerList.length > 0 ? (
        <Col sm="12" lg="12">
          <div
            className="midbody bodyborder"
            style={{
              backgroundColor: "#E4E4E4",
              borderRadius: "10px",
              // padding: "20px",
              border: "2px solid #546779",
              marginLeft: "10px",
              // paddingLeft: '10px',
              // paddingRight: '10px',
              // paddingTop: '10px'
              maxWidth: " 790px",
            }}
          >
            <div className="tab-content" style={{ padding: "0px" }}>
              <div className="gyuse-4">
                <Col lg="12" xs="12" className="smallbetoption m-hide">
                  <Row style={{ marginTop: "3px" }}>
                    <Col lg="2" xs="2"></Col>
                    <Col lg="2" xs="1">
                      <h5
                        className="mainbet"
                        style={{
                          border: "2px solid black",
                          textAlign: "center",
                          color: "black",
                          borderRadius: "50%",
                          height: "30px",
                          width: "30px",
                          padding: "4px",
                        }}
                      >
                        {" "}
                        <b>{length > 0 && length}</b>
                      </h5>
                    </Col>
                    <Col lg="6" xs="5">
                      <h5
                        style={{
                          color: "black",
                          marginTop: "7px",
                          fontWeight: "500",
                          fontSize: "17px",
                        }}
                      >
                        player selected
                      </h5>
                    </Col>
                    <Col lg="4" xs="3">
                      <Link to={`/MobileBetSlip`}>
                        <h6
                          style={{
                            color: "black",
                            fontSize: "15px",
                            float: "right",
                            marginTop: "8px",
                            fontWeight: "600",
                          }}
                        >
                          Finalize{" "}
                          <i
                            className="fa fa-angle-double-up"
                            style={{ fontSize: "17px", fontWeight: "600" }}
                          ></i>
                        </h6>
                      </Link>
                    </Col>
                    <Col lg="2" xs="1"></Col>
                  </Row>
                </Col>

                {playerList.map((mainitem, index) => {
                  const awayteam = mainitem?.teamA?.abv || "";
                  const hometeam = mainitem?.teamH?.abv || "";
                  const teamid = mainitem?.teamH?.id || "";
                  var d = mainitem.openDate;
                  var gameTime = `${moment(d).format("LLL")}`;
                  return (
                    <div>
                      <div className="top-headercard">
                        <Row>
                          <Col md={6}>
                            <p>
                              {" "}
                              ECI Hungary T10 | <span>HUN</span> vs{" "}
                              <span>POR</span>
                            </p>
                          </Col>

                          <Col md={6}>
                            <p className="text-md-right">
                              {" "}
                              Sat, Jul 15, 12:00 PM |{" "}
                              <span> 1D : 4h : 29m</span>
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
                              <span className="border-button">Home</span>{" "}
                              Hungary{" "}
                            </p>
                          </Col>

                          <Col md={4} className="text-center">
                            <p> vs </p>
                          </Col>
                          <Col md={4}>
                            <p className="flex-centert flex-md-right">
                              {" "}
                              Portugal{" "}
                              <span className="border-button border-red">
                                Away
                              </span>
                            </p>
                          </Col>
                        </Row>
                      </div>
                      {mainitem.markets.map((item, index) => {
                        const away = item?.players?.away || [];
                        const home = item?.players.home;
                        const fullist = home.concat(away);
                        const CombineId = `${mainitem.id}_${index}`;
                        return (
                            <div className="custom-scrolling">
                            {fullist
                              ?.filter((player) =>
                                player?.name
                                  ?.toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                              .map((item2, index) => {
                                const mainid = `${item2?.id}_${CombineId}`;

                                let playerImage = "";
                                let btn11Name = `${item2?.id}${CombineId}_btn11`;
                                let cardClassName = selectedBetslipBtn.includes(
                                  btn11Name
                                )
                                  ? "player-card card-active"
                                  : "player-card ";
                                let cardClassText = selectedBetslipBtn.includes(
                                  btn11Name
                                )
                                  ? "cardtext cardtext-1"
                                  : "cardtext cardtext-1";
                                let playerNameClass =
                                  selectedBetslipBtn.includes(btn11Name)
                                    ? "cardtext"
                                    : "cardtext";
                                let scoreClass = selectedBetslipBtn.includes(
                                  btn11Name
                                )
                                  ? "score"
                                  : "score";
                                let pointClass = selectedBetslipBtn.includes(
                                  btn11Name
                                )
                                  ? "point"
                                  : "point";
                                let dividerClass = selectedBetslipBtn.includes(
                                  btn11Name
                                )
                                  ? "divider-score-active"
                                  : "divider-score";
                                let playerboxClass =
                                  selectedBetslipBtn.includes(btn11Name)
                                    ? true
                                    : false;

                                if (item2.image) {
                                  if (item2?.image.includes("https://")) {
                                    playerImage = item2?.image;
                                  } else {
                                    playerImage = `${PlayerCardImageUrl}/${item2?.image}`;
                                  }
                                } else {
                                  playerImage = `${PlayerCardImageUrl}${"/player/player.png"}`;
                                }

                                // console.log(item2.team , teamid , awayteam , hometeam);

                                let playervalue = {
                                  id: mainid,
                                  teamAid: mainitem?.teamA?.id || "",
                                  teamAname: mainitem?.teamA?.abv || "",
                                  teamHid: mainitem?.teamH?.id || "",
                                  teamHname: mainitem?.teamH?.abv || "",
                                  single_event: mainitem?.eventName,
                                  game_type: mainitem?.type,
                                  name: item2?.name,
                                  position: item2?.positionAbv,
                                  team2: item2?.team,
                                  teamName: item2?.teamAbv,
                                  image: item2?.image,
                                  points: item2?.point,
                                  statName: item?.statName,
                                  team: item2?.team,
                                  event_time: gameTime,
                                  // date: new Date(),
                                  event: mainitem?.startDate,
                                  sports: item2?.sport,
                                  league: item2?.league,
                                  marketId: item?.id,
                                  marketname: item?.name,
                                  statAbv: item?.statAbv,
                                  playerevent: {
                                    type: mainitem?.type,
                                    id: mainitem?.id,
                                    extId: mainitem?.extId,
                                    league: mainitem?.league,
                                    sport: mainitem?.sport,
                                    teamA: mainitem?.teamA,
                                    teamH: mainitem?.teamH,
                                  },
                                };
                                if (activeTabName == item.statName) {
                                  return (
                                    <>
                                      {/* <Col
                                        xs="12"
                                        lg="6"
                                        md="6"
                                        className="allplayers"
                                        style={{
                                          padding: "5px",
                                        }}
                                      >
                                        <Card
                                          className={cardClassName}
                                          onClick={() =>
                                            handlechangePlayer(
                                              btn11Name,
                                              playervalue,
                                              item2.id,
                                              mainitem.id
                                            )
                                          }
                                          style={{
                                            borderRadius: "10px",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <Card.Body>
                                            <Row>
                                              <Col lg="4" xs="3">
                                                <img
                                                  src={playerImage}
                                                  alt="palyer"
                                                  className="player"
                                                  style={{ marginTop: "-8px" }}
                                                />
                                              </Col>

                                              <Col
                                                lg="8"
                                                xs="6"
                                                className="mid-section"
                                              >
                                                <h5
                                                  className={playerNameClass}
                                                  style={{
                                                    color: "#C02640",
                                                    textTransform: "capitalize",
                                                    fontWeight: "bold",
                                                    fontSize: "20px",
                                                  }}
                                                >
                                                  {" "}
                                                  {item2?.name}{" "}
                                                </h5>

                                                {mainitem?.type == 2 ? (
                                                  <h6
                                                    className={cardClassText}
                                                    style={{
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    {mainitem?.eventName}
                                                  </h6>
                                                ) : (
                                                  <h6
                                                    style={{
                                                      // marginTop: "6%",
                                                      fontWeight: "bold",
                                                    }}
                                                    className={cardClassText}
                                                  >
                                                    <span className="red-player">
                                                      {item2?.positionAbv}{" "}
                                                    </span>
                                                    <span>
                                                      <span
                                                        style={{
                                                          fontWeight: "normal",
                                                        }}
                                                      >
                                                        |{" "}
                                                      </span>
                                                      {item2?.team === teamid
                                                        ? hometeam
                                                        : awayteam}{" "}
                                                      {item2?.team ===
                                                      teamid ? (
                                                        <span
                                                          style={{
                                                            fontWeight:
                                                              "normal",
                                                          }}
                                                        >
                                                          vs
                                                        </span>
                                                      ) : (
                                                        <span
                                                          style={{
                                                            fontWeight:
                                                              "normal",
                                                          }}
                                                        >
                                                          @
                                                        </span>
                                                      )}{" "}
                                                      {item2?.team === teamid
                                                        ? awayteam
                                                        : hometeam}
                                                    </span>
                                                  </h6>
                                                )}

                                                <h6
                                                  style={{
                                                    //  marginTop: "8%"
                                                    fontWeight: "normal",
                                                  }}
                                                  className={cardClassText}
                                                >
                                                  {" "}
                                                  {gameTime}{" "}
                                                </h6>
                                              </Col>

                                              <Col lg="12" xs="3">
                                                <Row
                                                  className={"playerbox"}
                                                  style={{
                                                    backgroundColor:
                                                      playerboxClass
                                                        ? "#179624"
                                                        : "#0D3862",
                                                  }}
                                                >
                                                  <Col
                                                    xs="12"
                                                    lg="6"
                                                    className="points"
                                                  >
                                                    <h3 className={pointClass}>
                                                      {item2?.point}
                                                    </h3>
                                                  </Col>

                                                  <Col
                                                    xs="12"
                                                    lg="6"
                                                    className="scores smallscreen"
                                                  >
                                                    <h6
                                                      className={scoreClass}
                                                      style={{
                                                        marginTop: "10px",
                                                      }}
                                                    >
                                                      {isMobile
                                                        ? item?.statAbv
                                                        : item?.statName}
                                                    </h6>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Card>
                                      </Col> */}
                                    
                                        <div className="card-group-player">
                                          <Row className="g-3">
                                            <Col md={12}>
                                              <div className="custom-check-div m-0">
                                                Wicket Keeper <FiCheckCircle />
                                              </div>
                                            </Col>
                                   
                                            <Col md="6">
                                              <div
                                                className="player-card-main non-selected"
                                                onClick={() =>
                                                  handlechangePlayer(
                                                    btn11Name,
                                                    playervalue,
                                                    item2.id,
                                                    mainitem.id
                                                  )
                                                }
                                              >
                                                <div className="player-member-img">
                                                  <img src={playerImage} />
                                                </div>
                                                <div className="player-info-div">
                                                  <h3>{item2.name}</h3>
                                                  <p>
                                                    {" "}
                                                    <span className="f-red">
                                                      WK
                                                    </span>{" "}
                                                    | POR <span>@</span> HUN
                                                  </p>
                                                  <p className="flex-p">
                                                    <span>Point Proj:</span> 120
                                                    |{" "}
                                                    <span className="f-red">
                                                      Credits: <b>9.0</b>
                                                    </span>
                                                  </p>
                                                </div>
                                              </div>
                                            </Col>
                                          </Row>
                                        </div>
                                     
                                    </>
                                  );
                                } else {
                                  return null;
                                }
                              })}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Col>
      ) : (
        <Col sm="12" lg="8">
          <div
            className="midbody bodyborder shail"
            style={{
              backgroundColor: "#E4E4E4",
              borderRadius: "10px",
              paddingTop: "5px",
              border: "2px solid #546779",
              marginLeft: "5px",
            }}
          >
            <NotFound />
          </div>
        </Col>
      )}
      {/* <PlayerBetSlip /> */}
    </Row>
  );
};

export default NewGamePage;
