import React, { useState, useRef, useEffect } from "react";
import "../../screens/Sportsbook/Sportsbook.css"; //"../Sportsbook.css";

import { Row, Col, Card, Button, Form, Container } from "react-bootstrap";  
import "../../css/main.css"; ///"../../css/main.css"
import { useNavigate } from "react-router-dom";
//import player from "../../assests/players/player1.webp"
//const player="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2566769.png"
import PlayerBetSlip from "../PlayerBetSlip";
import Checkbox from "@mui/material/Checkbox";

import { useSelector, useDispatch } from "react-redux";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Actions } from "../../redux/Actions/Actions";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import NotFound from "../../screens/NotFound";
import { PlayerCardImageUrl } from "../../constant/Environment";
import Toaster from "../../components/Toast";
import Loader from "../../components/Loader";   

import { ErrorToast } from "../../components/Toast/message";  


const PlayerCard = (props) => {
  const { playerList, searchQuery, activeTabIndex } = props;
  const [card, setcard] = useState([]);
  const dispatch = useDispatch();
  const [counter, setcounter] = useState(1);
  const state = useSelector((state) => state);
  const { selectedBetslipBtn } = state.betslip;

  const handlechangePlayer = (btnName, element, displayName = "") => {
    if (state?.betslip?.isVisible == false) {
      dispatch({
        type: Actions.RECECIPT_VISIBLE,
        data: true,
      });
    }

    if(state?.betslip.Message==false){
      dispatch({
        type: Actions.CLEAR_MSSG,
        data:true,
      });
    }

    if (length <= 9) {
      let index = selectedBetslipBtn.indexOf(btnName);
      setcounter(1);
      /**
       * If element is not in selected then will insert it
       * otherwise already in array it will remove it
       */
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
            displayName: displayName,
            isMore: false,
            isLess: false,
          },
          selectedBtn: btnName,
          // playerid : playerid,
          // playername: playername,
          // point:playerpoints,
          // position:playerposition,
          // time:timing,
          // img:playerpic
        });
      }
    } else {
      // alert("only add ten players at a time");
      ErrorToast("only add ten players at a time");
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
            <Toaster/> 
      {
      playerList.length > 0 ?
      <Col sm="12" lg="8">
        <Row
          className="midbody bodyborder"
          style={{
            backgroundColor: "#E4E4E4",
            borderRadius: "10px",
            // padding: "20px",
            border: "2px solid #546779",
             marginLeft: "5px",
            // paddingLeft: '10px',
            // paddingRight: '10px',
            // paddingTop: '10px'
            maxWidth:' 790px'
        
          }}
        >
          <div className="tab-content" style={{padding: '0px'}}>
            <div className="gyuse-4">
              <Col lg="12" xs="12" className="smallbetoption">
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

             console.log("all data" , mainitem);

                const awayteam = mainitem?.teamA?.abv || "";
 
                const hometeam = mainitem?.teamH?.abv || "";
 
                const teamid = mainitem?.teamH?.id || "";
 
                var d = new Date(mainitem.openDate);
 
                // var gameTime = d.toLocaleString("en-US", {
                //   timeZone: "America/New_York",
                // });

                var gameTime = d.toLocaleString("en-US", {
                  timeZone: "America/Chicago",
                });

                
                //  var Live = goLive;
                gameTime = `${moment(gameTime).format("LL")} ${moment(gameTime).format(
                  "h:mm a"
                )}`;

                return (
                  <div>
                    {mainitem.markets.map((item, index) => {
                      const away = item?.players?.away || [];
                      const home = item.players.home;
                      const fullist = home.concat(away);
                      // console.log('activeTabIndex',activeTabIndex,'item.id',item.id,'cobmbine',
                      // `${mainitem.id}_${index}`,)
                      const CombineId = `${mainitem.id}_${index}`;

                      return (
                        <Row style={{
                        paddingRight: '15px',
                        paddingLeft: '15px'
                        }}>
                          {fullist
                            ?.filter((player) =>
                              player.name
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                            )
                            .map((item2, index) => {
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
                              let playerNameClass = selectedBetslipBtn.includes(
                                btn11Name
                              )
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
                              let playerboxClass = selectedBetslipBtn.includes(
                                btn11Name
                              )
                                ? true
                                : false;

                              if (item2.image) {
                                if (item2.image.includes("https://")) {
                                  playerImage = item2.image;
                                } else {
                                  playerImage = `${PlayerCardImageUrl}/${item2.image}`;
                                }
                                // playerImage = `${image_Base_Url}${item2.image}`; //`${item2.image}`; //
                              } else {
                                playerImage = `${PlayerCardImageUrl}${"/player/player.png"}`;
                              }

                              // console.log(item.statAbv)

                              let playervalue = {
                                id: item2._id,
                                teamAid: mainitem?.teamA?.id || "",
                                teamAname: mainitem?.teamA?.abv || "",
                                teamHid: mainitem?.teamH?.id || "",
                                teamHname: mainitem?.teamH?.abv || "",
                                single_event:item2.leagueName,
                                name: item2.name,
                                position: item2.positionAbv,
                                team2: item2.team,
                                teamName: item2.teamAbv,
                                image: item2.image,
                                points: item2.point,
                                statName: item.statName,
                                team: item2.team,
                                betslip_time:gameTime,
                                // date: new Date(),
                                event: mainitem.startDate,
                                sports: item2.sport,
                                league: item2.league,
                                marketId: item.id,
                                marketname: item.name,
                                statAbv: item.statAbv,
                                playerevent: {
                                  type: mainitem.type,
                                  id: mainitem.id,
                                  extId: mainitem.extId,
                                  league: mainitem.league,
                                  sport: mainitem.sport,
                                  teamA: mainitem.teamA,
                                  teamH: mainitem.teamH,
                                },
                              };
                              if (activeTabIndex == CombineId) {
                                return (
                                  <>
                                    <Col
                                      xs="12"
                                      lg="6"
                                      md="6"
                                      className="allplayers"
                                      style={{
                                        // marginBottom: "10px",
                                        // paddingBottom:"10px",
                                        // marginTop: "0px",
                                        // paddingRight:'0px !important'
                                         padding: '5px',
                                        // paddingRight: '0px',
                                        // paddingLeft: '0px'
                                      }}
                                    >
                                      <Card
                                        className={cardClassName}
                                        onClick={() =>
                                          handlechangePlayer(
                                            btn11Name,
                                            playervalue
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
                                           
                                           { mainitem.sport.name == "Golf" ? <h6
                                            className={cardClassText}
                                           style={{ fontWeight: "bold"}}
                                           >{item2.leagueName}
                                           </h6> :
                                              <h6
                                                style={{
                                                  // marginTop: "6%",
                                                  fontWeight: "bold",
                                                }}
                                                className={cardClassText}
                                              >
                                                <span className="red-player">
                                                  {item2.positionAbv}{" "}
                                                </span>
                                                <span>
                                                <span
                                                style={{
                                                  fontWeight:"normal"
                                                }}
                                                >
                                                  |{" "}
                                                  </span>

                                                  {item2.team === teamid
                                                    ? hometeam
                                                    : awayteam}{" "}
                                                  {item2.team === teamid
                                                    ? <span
                                                    style={{
                                                      fontWeight:"normal"
                                                    }}
                                                    >vs</span>
                                                    : <span
                                                    style={{
                                                      fontWeight:"normal"
                                                    }}
                                                    >@</span> }{" "}
                                                  {item2.team === teamid
                                                    ? awayteam
                                                    : hometeam}
                                                </span>
                                              </h6>
                                           }

                                              <h6
                                                style={{
                                                  //  marginTop: "8%"
                                                   fontWeight:"normal"
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
                                                    {" "}
                                                    {item2.point}{" "}
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
                                                    {" "}
                                                    {item.statName}{" "}
                                                  </h6>
                                                </Col>
                                              </Row>
                                            </Col>
                                          </Row>
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                  </>
                                );
                              } else {
                                return null;
                              }
                            })}
                        </Row>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </Row>
      </Col>: 
       <Col sm="12" lg="8">
               <Row
          className="midbody bodyborder"
          style={{
            backgroundColor: "#E4E4E4",
            borderRadius: "10px",
            paddingTop: "5px",
            border: "2px solid #546779",
            marginLeft: "5px",
          }}
        >
        <NotFound/></Row></Col>
      }
      <PlayerBetSlip />
    </Row>
  );
};

export default PlayerCard;
