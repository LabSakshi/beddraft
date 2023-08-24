import React, { useEffect, useState } from "react";
import "./MyBets.css";
import { FaRegUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardSharp, IoIosArrowDown } from "react-icons/io5";
import { CgChevronDown } from "react-icons/cg";
// import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { Form, Button, Table, Row, Col } from "react-bootstrap";
import { fetchAllData, getAllData } from "../../../Utility/API";
import { sportEndPoint } from "../../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../../redux/Actions/Actions";
import void2 from "../../../image/Void.png";

const MyBets = () => {
  const [ALLData, setALLData] = useState([]);
  const [pending, setPending] = useState([]);
  const [history, setHistory] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { auth, sidebar } = state;
  //const [userId, setUserId] = useState(auth?.user?.idUser)
  // const userDeatils = JSON.parse(localStorage.getItem("user"));
  // const userData = userDeatils;
  // const userId = userData?.account?.userId;
  // const [userName, setUserName] = useState(userData?.name || "");
  // const [balance, setBalance] = useState(userData?.account?.balance || "");

  // const date = new Date(userData?.insertionTime);

  useEffect(() => {
    if (auth?.user?.idUser) {
      fetchplayerData(auth?.user?.idUser);
    }
  }, [Object.keys(auth.user).length > 0]);

  const fetchplayerData = (userId) => {
    let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.mybets}/${userId}`; //&status=APPROVED

    // console.log("data" ,  url , userId);

    fetchAllData(url)
      .then((res) => res.json())
      .then((response) => {
        setALLData(response);
        // console.log(response);
        //const pendingData = response.filter((item => item.status.toUpperCase() === 'PENDING'))
        const pendingData = response.filter((item) => {

          // console.log(item.status.toUpperCase());

          return (
            item.status.toUpperCase() == "PREPAYMENT" ||
            item.status.toUpperCase() == "ACTIVE" ||
             item.status.toUpperCase() == "PARTIAL_COMPLETED"
            // item.status.toUpperCase() === "POSTPAYMENT"
          );
        });

        // const historyData = response.filter((item => item.status.toUpperCase() === 'WIN' || item.status.toUpperCase() === 'LOST' | item.status.toUpperCase() === 'LOSE'))
        const historyData = response.filter((item) => {
          return (
            item.status.toUpperCase() === "FINISHED" ||
            item.status.toUpperCase() === "CLOSED"
            // item.status.toUpperCase() === "CANCELLED"
          );
        });
        setPending(pendingData);
        setHistory(historyData);
      });
  };
  const gotoHome = () => {
    dispatch({
      type: Actions.TEST_CASE,
      data: false,
    });
    navigate("/");
  };
  return (
    <div>
      <div className="container bg-color bg-white">
        <div className="inner-small-space">
          <div className="row">
            {/* <div className="col-md-4">
              <div className="my-betuser custom-stickydiv">
                <h3>{userName}</h3>
                <h5>joined {moment(date).format('MMMM, YYYY')}</h5>
                <div className="betuser-input-two">
                  <form class="form-floating betuser-form">
                    <div className="betuser-inputwith mt-4">
                      <div className="float-divbet">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputValue"
                          placeholder="0"
                          disabled={true}
                          value={userData?.totalBetWin}
                        />

                        <label for="floatingInputValue">Entries won</label>
                      </div>
                      <div className="float-divbet">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputValue"
                          placeholder="0.00" 
                          value={userData?.totalWinAmount}
                          disabled={true}
                        />
                        <label for="floatingInputValue">Amount won</label>
                      </div>
                    </div>
                    <div className="betuser-inputwith mt-4">
                      <div className="float-divbet">
                      <label for="floatingInputValue">Amount</label>
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputValue"
                          placeholder="0.00"
                          disabled={true}
                          value={`$ ${balance}`}
                        />

                      </div>
                      <div className="float-divbet">
                      <label for="floatingInputValue">Promo</label>
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInputValue"
                          placeholder="0.00"
                          value={userData?.totalPromo}
                          disabled={true}
                        />

                      </div>
                    </div>
                    <div className="mt-4 mb-4">
                      <button
                        type="button"
                        class=" btn-primary mt-2 btn save-btn"
                        onClick={() => navigate('/userwallet')}
                      >
                        Redeem
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}

            {/* <div className="col-md-4">
                            <div className="form-space-r30">
                                <Form className="my-form-layout1">

                                    <div className="flex-input-design1">
                                        <div className="with-big-input posi-rela">

                                            <span className="under-label">My Bets</span>
                                        </div>

                                    </div>
                                    <div className="flex-div btn-with">
                                        <Button variant="danger" className="cancel-btn" >
                                            Active
                                        </Button>
                                        <Button variant="primary" className="save-btn" >
                                            Settled
                                        </Button>
                                    </div>

                                </Form>
                            </div>

                        </div> */}

            <div className="col-md-12 col-sm-12">
              <div className="row justify-content-center sticky-div2  bg-white">
                <div className="col-md-8">
                  <div class="flex-div btn-with mb-2">
                    <button
                      type="submit"
                      onClick={() => setIsPending(true)}
                      style={{padding:"14px"}}
                      className={
                        isPending
                          ? "save-btn2 green-button btn btn-success btn blue-button "
                          : " green-button btn btn-success btn openbtn"
                      }
                    >
                      Open Entries
                    </button>
                    <button
                      type="submit"
                      onClick={() => setIsPending(false)}
                      style={{padding:"14px"}}
                      className={
                        !isPending
                          ? "save-btn2 green-button btn btn-success btn blue-button"
                          : " green-button btn btn-success btn pastbtn"
                      }
                    >
                       
                      Past Entries
                    </button>
                  </div>
                </div>
              </div>
              <div className="custom-height-scroll gray-blue-border">
                <div className="row">
                  {/* <div className="col-md-12">
                  <div className="null-entries">
                    <p>No Entries placed yet !</p>

                    <button
                      className=" btn-primary mt-2 btn save-btn"
                      href="javascript:void(0)"
                    >
                      Start an entry
                    </button>
                  </div>
                </div> */}



                  {isPending &&
                    pending.length > 0 &&
                    pending.map((item) => {
                      let playerlength = item.playerData.length;

                      let money = item.wager;

                      // console.log(item);

                      return (
                        <div className="col-md-12 mb-4">
                          <form className="static-form form-style-2 wallet-user1 bg-white">
                            <div className="box-label-custom mb-3">
                              <div
                                className="box-label-custom1 blue-box-border normal-text mb-3"
                              >
                                <div>Fantasy: {item.id}</div>
                                <div>
                                  {moment(item?.createdDate).format(
                                    "YYYY-MM-DD HH:mm a "
                                  )}
                                </div>
                              </div>
                            </div>
                            <Form.Group className="mb-3" controlId="Name">
                              <label className="normal-text">
                               <b>CONTEST ({item.playerData.length} Player Team) </b>
                              </label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Name">
                              <label className="normal-text">
                               <b>Contest Entry Fee : ${item.wager}</b>
                              </label>
                            </Form.Group>

                            <div>
                              {playerlength === 2 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                        className="bett-h4 c-green-color"
                                      >
                                        2 Players Correct pays $
                                        {Math.trunc(money * 3 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : playerlength === 3 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                      >
                                        3 Players Correct pays $
                                        {Math.trunc(money * 5 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        // style={{
                                        //   fontWeight: "300!important",
                                        //   color: "#5081B9",
                                        //   fontSize: "17px",
                                        //   marginBottom: "8px",
                                        // }}
                                      >
                                        2 Players Correct pays $
                                        {Math.trunc(money * 1.25 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : playerlength === 4 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        4 Players Correct pays $
                                        {Math.trunc(money * 10 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                       
                                      >
                                        3 Players Correct pays $
                                        {Math.trunc(money * 1.5 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        2 Players Correct pays $
                                        {Math.trunc(money * 1 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : playerlength === 5 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        5 Players Correct pays $
                                        {Math.trunc(money * 15 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        4 Players Correct pays $
                                        {Math.trunc(money * 2 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        3 Players Correct pays $
                                        {Math.trunc(money * 1.25 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : playerlength === 6 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        6 Players Correct pays $
                                        {Math.trunc(money * 25 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        5 Players Correct pays $
                                        {Math.trunc(money * 3 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        4 Players Correct pays $
                                        {Math.trunc(money * 1.5 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : playerlength === 7 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        7 Players Correct pays $
                                        {Math.trunc(money * 40 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        6 Players Correct pays $
                                        {Math.trunc(money * 4 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                       
                                      >
                                        5 Players Correct pays $
                                        {Math.trunc(money * 1.75 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : playerlength === 8 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                       
                                      >
                                        8 Players Correct pays $
                                        {Math.trunc(money * 60 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        7 Players Correct pays $
                                        {Math.trunc(money * 5 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        6 Players Correct pays $
                                        {Math.trunc(money * 2 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : playerlength === 9 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        9 Players Correct pays $
                                        {Math.trunc(money * 80 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                       
                                      >
                                        8 Players Correct pays $
                                        {Math.trunc(money * 10 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                      
                                      >
                                        7 Players Correct pays $
                                        {Math.trunc(money * 2.5 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : playerlength === 10 ? (
                                <div className="maincal">
                                  <Row className="calrow">
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                       
                                      >
                                        10 Players Correct pays $
                                        {Math.trunc(money * 100 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        9 Players Correct pays $
                                        {Math.trunc(money * 15 * 100) / 100}
                                      </label>
                                    </Col>
                                    <Col lg="12">
                                      <label
                                      className="bett-h4 c-green-color"
                                        
                                      >
                                        8 Players Correct pays $
                                        {Math.trunc(money * 3 * 100) / 100}
                                      </label>
                                    </Col>
                                  </Row>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>

                            <Form.Group className="mb-3" controlId="Name">
                              {/* <label style={{ color: "#dcbf5e" }}>
                              {item.type} ({item.playerData.length} TEAMS) ,{" "}
                              {item.stake} to won {item.amount}{" "}
                            </label> */}

                              {item?.playerData?.length > 0 &&
                                item?.playerData?.map((data) => {

                                  let finalpoint = data.finalpoints;

                                  // console.log(item);
                                  // console.log(item.createdDate);

                                  return (
                                    <div>
                                      { 
                                      
                                      // item.status.toUpperCase() == "ACTIVE" ? (
                                      //   <div className="row">
                                      //     <div className="col-lg-1">
                                      //       {finalpoint > 0 ? (
                                      //         <div>
                                      //           {data.defineresult == "lose" ? (
                                      //             <i
                                      //               className="fa fa-2x fa-times"
                                      //               style={{
                                      //                 color: "red",
                                      //                 marginTop: "25px",
                                      //               }}
                                      //             ></i>
                                      //           ) : (
                                      //             <i
                                      //               className="fa fa-2x fa-check"
                                      //               style={{
                                      //                 color: "green",
                                      //                 marginTop: "25px",
                                      //               }}
                                      //             ></i>
                                      //           )}
                                      //         </div>
                                      //       ) : (
                                      //         ""
                                      //       )}
                                      //     </div>
                                      //     <div
                                      //       className="col-lg-11"
                                      //       style={{ marginLeft: "-40px" }}
                                      //     >
                                      //       <ul className="box-label-ul">
                                      //         <li className="normal-text gray-color">
                                      //         <span className="c-red-color"><b> {data?.name}</b></span>  (
                                      //           {data.event_time}{" "}
                                      //           )
                                      //         </li>
                                      //         <li>
                                      //           {data?.odds} {data?.event}{" "}
                                      //         </li>

                                      //         {/* { data.game_type == 2? "" : */}

                                      //         <li 
                                      //         className="normal-text gray-color"
                                      //         style={{ fontSize: "15px" }}>
                                             
                                      //         { data.game_type == 2? 
                                              
                                      //         <span>
                                      //           {data.single_event} 
                                      //         </span>
                                             
                                      //          :
                                      //           <span>
                                      //           {data.position} |{" "}
                                      //           <span>
                                      //             {" "}
                                      //             {data.team ==
                                      //             data?.playerevent?.teamH?.id
                                      //               ? data?.playerevent?.teamH?.abv
                                      //               : data?.playerevent?.teamA
                                      //                   .abv}{" "}
                                      //             {""}
                                      //             {""}
                                      //             {data.team ==
                                      //             data?.playerevent?.teamH?.id
                                      //               ? "vs"
                                      //               : "@"}{" "}
                                      //             {""}
                                      //             {data.team ==
                                      //             data?.playerevent?.teamH?.id
                                      //               ? data?.playerevent?.teamA?.abv
                                      //               : data?.playerevent?.teamH?.abv}
                                      //           </span>
                                      //           </span>
                                      //           }


                                      //           {""}:
                                      //           <span
                                      //             style={{ marginLeft: "5px" }}
                                      //           >
                                      //             {""}
                                      //             {data.isMore == true ||
                                      //             data.isLess == false
                                      //               ? "More"
                                      //               : "Less"}{" "}
                                      //             than {data.points} {""}{" "}
                                      //             {data.statName}
                                      //           </span>
                                      //         </li>

                                      //         {data.defined==true ? (
                                      //           <li
                                      //             style={{
                                      //               fontSize: "16px",
                                      //               color:
                                      //                 data.defineresult == "lose"
                                      //                   ? "red"
                                      //                   : "green",
                                      //             }}
                                      //           >
                                      //             {finalpoint}&nbsp;
                                      //             {data.statName}
                                      //           </li>
                                      //         ) : (
                                      //           ""
                                      //         )}
                                      //       </ul>
                                      //     </div>
                                      //   </div>
                                      // ) :
                                         item.status.toUpperCase() == "PARTIAL_COMPLETED" || "ACTIVE" ? (
                                         <div className="row">
                                          <div className="col-lg-1">
                                            {data.defined == true ? (
                                              <div>
                                                {data.defineresult == "lose" ? (
                                                  <i
                                                    className="fa fa-2x fa-times"
                                                    style={{
                                                      color: "red",
                                                      marginTop: "25px",
                                                    }}
                                                  ></i>
                                                ) : (
                                                  <i
                                                    className="fa fa-2x fa-check"
                                                    style={{
                                                      color: "green",
                                                      marginTop: "25px",
                                                    }}
                                                  ></i>
                                                )}
                                              </div>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                          <div
                                            className="col-lg-11"
                                            style={{ marginLeft: "-40px" }}
                                          >
                                            <ul className="box-label-ul">
                                              <li className="normal-text gray-color">
                                              <span className="c-red-color"><b> {data?.name}</b></span>  (
                                                {data.event_time}{" "}
                                                )
                                              </li>
                                              <li>
                                                {data?.odds} {data?.event}{" "}
                                              </li>

                                              {/* { data.game_type == 2? "" : */}

                                              <li 
                                              className="normal-text gray-color"
                                              style={{ fontSize: "15px" }}>
                                             
                                              { data.game_type == 2? 
                                              
                                              <span>
                                                {data.single_event} 
                                              </span>
                                             
                                               :
                                                <span>
                                                {data.position} |{" "}
                                                <span>
                                                  {" "}
                                                  {data.team ==
                                                  data?.playerevent?.teamH?.id
                                                    ? data?.playerevent?.teamH?.abv
                                                    : data?.playerevent?.teamA
                                                        .abv}{" "}
                                                  {""}
                                                  {""}
                                                  {data.team ==
                                                  data?.playerevent?.teamH?.id
                                                    ? "vs"
                                                    : "@"}{" "}
                                                  {""}
                                                  {data.team ==
                                                  data?.playerevent?.teamH?.id
                                                    ? data?.playerevent?.teamA?.abv
                                                    : data?.playerevent?.teamH?.abv}
                                                </span>
                                                </span>
                                                }


                                                {""}:
                                                <span
                                                  style={{ marginLeft: "5px" }}
                                                >
                                                  {""}
                                                  {data.isMore == true ||
                                                  data.isLess == false
                                                    ? "More"
                                                    : "Less"}{" "}
                                                  than {data.points} {""}{" "}
                                                  {data.statName}
                                                </span>
                                              </li>

                                              {data.defined==true ? (
                                                <li
                                                  style={{
                                                    fontSize: "16px",
                                                    color:
                                                      data.defineresult == "lose"
                                                        ? "red"
                                                        : "green",
                                                  }}
                                                >
                                                  {finalpoint}&nbsp;
                                                  {data.statName}
                                                </li>
                                              ) : (
                                                ""
                                              )}
                                            </ul>
                                          </div>
                                        </div>
                                      ) : (
                                        <ul className="box-label-ul">
                                          <li className="normal-text gray-color">
                                           <span className="c-red-color"><b> {data?.name}</b> </span>(
                                            {data.event_time}{" "}
                                            )
                                          </li>
                                          <li>
                                            {data?.odds} {data?.event}{" "}
                                          </li>
                                          {/* <li>{data?.sports} </li> */}

                                          <li className="normal-text gray-color">
                                          {
                                          data.game_type == 2? 
                                          
                                          <span>
                                          {data.single_event}  
                                          </span>
                                          
                                          :
                                          <span>
                                           {data.position} |{" "}
                                            <span>
                                              {" "}
                                              {data.team ==
                                              data?.playerevent?.teamH?.id
                                                ? data?.playerevent?.teamH?.abv
                                                : data?.playerevent?.teamH?.abv}{" "}
                                              {""}
                                              {""}
                                              {data.team ==
                                              data?.playerevent?.teamH?.id
                                                ? "vs"
                                                : "@"}{" "}
                                              {""}
                                              {data.team ==
                                              data?.playerevent?.teamH?.id
                                                ? data?.playerevent?.teamA?.abv
                                                : data?.playerevent?.teamH?.abv}
                                            </span>
                                            </span>
                                          }
                                            {""}:
                                            <span style={{ marginLeft: "5px" }}><b>
                                              {""}
                                              {data.isMore == true ||
                                              data.isLess == false
                                                ? "More"
                                                : "Less"}{" "}
                                              than {data.points}&nbsp;
                                              {data.statName}
                                              </b>
                                            </span>
                                          </li>

                                          {finalpoint > 0 ? (
                                            <li
                                              style={{
                                                fontSize: "16px",
                                                color:
                                                  finalpoint > data.point
                                                    ? "green"
                                                    : "red",
                                              }}
                                            >
                                              {finalpoint}
                                            </li>
                                          ) : (
                                            ""
                                          )}
                                        </ul>
                                      )
                                     }
                                    </div>
                                  );
                                })}
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}

                              >
                                <label className="normal-text mt-4">
                                  {" "}
                                 <b> Status : {item?.status?.toUpperCase() == "PARTIAL_COMPLETED" ? "PARTIALLY COMPLETE" : item?.status?.toUpperCase()}{" "}</b>
                                </label>
                              </div>
                            </Form.Group>
                          </form>
                        </div>
                      );
                    })}
                  {isPending && pending.length == 0 && (
                    <div className="col-md-12">
                      <div className="null-entries">
                        <p>No Entries placed yet !</p>

                        <button
                          className=" btn-primary mt-2 btn save-btn"
                          onClick={gotoHome}
                        >
                          PLACE BET
                        </button>
                      </div>
                    </div>
                  )}

                  {!isPending &&
                    history.length > 0 &&
                    history.map((item) => {

                      console.log("completed bets", item);
                      
                      return (
                        // <h5 style={{ color:"red" }}>closed entries</h5>

                        <div className="col-md-12 mb-3">
                          <form className="static-form form-style-2 wallet-user1 bg-white">
                            <div className="box-label-custom mb-3">
                              <div
                                className="box-label-custom1 normal-text mb-3"
                                style={{
                                  background:
                                    item.defineresult == "lose" ? "red" : "green",
                                }}
                              >
                                <div>Fantasy: {item.id}</div>
                                <div>
                                  {moment(item?.createdDate).format(
                                    "YYYY-MM-DD HH:mm a "
                                  )}
                                </div>
                              </div>
                            </div>
                            <Form.Group className="mb-3" controlId="Name">
                              <label className="normal-text">
                               <b>CONTEST ({item.playerData.length} Player Team) </b>
                              </label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Name">
                              <label className="normal-text">
                               <b>Contest Entry Fee : ${item.wager}</b>
                              </label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Name">
                              { item.void==true ?
                                <label
                                style={{ color: "blue", fontSize: "16px" }}
                                >
                                  Entry Void, ${item.wager} entry fee refunded.
                                </label>
                               : 
                              <label
                                style={{ color: "blue", fontSize: "16px" }}
                              >
                                {item.winlPlayer} Player Correct -{" "}
                                {item.defineresult == "win" ? (
                                  <sapn>You Win ${item.projectedAmount}</sapn>
                                ) : (
                                  "Entry Lost"
                                )}
                                {/* {item.result === "win" && <p>You won {winningAmount}!</p>}
                             {result !== "win" && <p>You lost.</p>} */}
                              </label>
                             }
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Name">
                              {/* <label style={{ color: "#dcbf5e" }}>
                              {item.type} ({item.playerData.length} TEAMS) ,{" "}
                              {item.stake} to won {item.amount}{" "}
                            </label> */}

                              {item?.playerData?.length > 0 &&
                                item?.playerData?.map((data) => {
                                  let finalpoint = data.finalpoints;

                                  // console.log(data);

                                  // <div style={{ color:"green", marginRight:"30px" , marginTop:"5px" }}>
                                  // <i className="fa fs-3x fa-check" style={{ color:"green", marginRight:"30px" , marginTop:"5px" }}></i>
                                  //  </div>

                                  return (
                                    <div className="row">
                                      
                                      <div className="col-lg-1">
                                        {data.void == true ? 
                                         <div>
                                        <img src={void2} style={{height:"35px" , marginTop:"25px"}}/>
                                        </div>  
                                      :
                                      <div>
                                        {data.defineresult == "lose" ? (
                                          <i
                                            className="fa fa-2x fa-times"
                                            style={{
                                              color: "red",
                                              marginTop: "25px",
                                            }}
                                          ></i>
                                        ) : (
                                          <i
                                            className="fa fa-2x fa-check"
                                            style={{
                                              color: "green",
                                              marginTop: "25px",
                                            }}
                                          ></i>
                                        )}
                                        </div>
                                      }
                                      
                                      </div>

                                      <div
                                        className="col-lg-11"
                                        style={{ marginLeft: "-40px" }}
                                      >
                                        <ul className="box-label-ul">
                                          <li className="normal-text gray-color" style={{ fontSize: "15px" }}>
                                          <span className="c-red-color"><b>{data?.name}</b></span> (
                                            {data.event_time}{" "}
                                            )
                                          </li>
                                          <li>
                                            {data?.odds} {data?.event}{" "}
                                          </li>
                                          <li 
                                          className="normal-text gray-color"
                                          style={{ fontSize: "15px" }}>
                                           
                                          { data.game_type == 2? 
                                          
                                          <span>
                                          {data.single_event}
                                          </span>

                                          :
                                           <span>
                                            {data.position} |{" "}
                                            <span>
                                              {" "}
                                              {data.team ==
                                              data.playerevent.teamH.id
                                                ? data.playerevent.teamH.abv
                                                : data.playerevent.teamH
                                                    .abv}{" "}
                                              {""}
                                              {""}
                                              {data.team ==
                                              data.playerevent.teamH.id
                                                ? "vs"
                                                : "@"}{" "}
                                              {""}
                                              {data.team ==
                                              data.playerevent.teamH.id
                                                ? data.playerevent.teamA.abv
                                                : data.playerevent.teamH.abv}
                                            </span>
                                            </span>
                                         
                                         }

                                            {""}:
                                            <span style={{ marginLeft: "5px" }}>
                                              {""}
                                              {data.isMore == true ||
                                              data.isLess == false
                                                ? "More"
                                                : "Less"}{" "}
                                              than {data.points} {""}{" "}
                                              {data.statName}
                                            </span>
                                          </li>

                                          {/* {finalpoint > 0 ? ( */}
                                            <li
                                              style={{
                                                fontSize: "16px",
                                                color:
                                                  data.defineresult == "lose"
                                                    ? "red"
                                                    : "green",
                                              }}
                                            >
                                              {finalpoint}&nbsp;{data.statName}
                                            </li>

                                          {/* // ) : (
                                          //   ""
                                          // )} */}

                                        </ul>
                                      </div>
                                    </div>
                                  );
                                })}
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                   
                                <label className="normal-text mt-4">
                                  {" "}
                                 <b> Status : {item?.status?.toUpperCase()}{" "}</b>
                                </label>
                              </div>
                            </Form.Group>
                          </form>
                        </div>
                      );
                    })}

                  {/* {!isPending && history.length == 0 && (
                  <div className="col-md-12">
                    <div className="null-entries">
                      <p>No Entries placed yet !</p>

                      <button
                        className=" btn-primary mt-2 btn save-btn"
                        onClick={gotoHome}
                      >
                       PLACE BET
                      </button>
                    </div>
                  </div>
                )} */}

                  {/* <div className="null-entries m-0">
                  <button
                    className=" btn-primary mt-2 btn save-btn"
                    href="javascript:void(0)"
                  >
                    Load more ...
                  </button>
                </div> */}
                </div>
              </div>
            </div>
            {/* <div className="col-md-12">
                            <div className="table-design-one form-space-l30">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Application Name</th>
                                            <th>Stake</th>
                                            <th>Odds</th>
                                            <th>Amount</th>
                                            <th>Type</th>
                                            <th>Cretaed Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="two-table-color">
                                        {bettData.map((item) => {
                                            return (
                                                <tr>
                                                    <td>{item.platform}</td>
                                                    <td>{item.stake}</td>
                                                    <td>{item.odds}</td>
                                                    <td>{item.amount}</td>
                                                    <td>{item.type}</td>
                                                    <td>{moment(item.createdDate).format("YYYY-MM-DD HH:mm:ss")}</td>
                                                </tr>
                                            )
                                        })}


                                        <tr className="expand-tr">
                                            <td colSpan={6}>
                                                <a className="table-expand-button"><CgChevronDown /></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBets;
