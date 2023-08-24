import React, { useState } from "react";
// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
// ROUTING
import { Link } from "react-router-dom";
// DATA FILE
import { SidebarData } from "./SidebarData";
import Promotions from "../../screens/Sportsbook/Promotions";
// STYLES
import "./Navbar.css";
import logo from "../../assests/images/bdlogo.png";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar as NavbarContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { Row, Col } from "react-bootstrap";
import logout from "../../assests/new/Exit.png";
import user from "../../assests/new/My_Account.png";
  
import {
  FaEnvelopeOpenText,
  FaRegUser,
  FaPowerOff,
  FaShoppingCart,
} from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { ErrorToast } from "../Toast/message";
export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    if (User?.validation === "0") {
      ErrorToast("Please update your profile");
    } else {
      setSidebar(!sidebar);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const state = useSelector((state) => state);
  const { auth, cart } = state;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const User = auth.user;

  function goToCart() {
    dispatch({
      type: Actions.TEST_CASE,
      data: false,
    });
    navigate("/cart");
  }

  function Logout() {
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
    navigate("/login");
  }
  function navigateToJoinNow() {
    dispatch({
      type: Actions.LOGOUT,
    });
    dispatch({
      type: Actions.SIDEBAR_EXPAND,
      data: false,
    });
    localStorage.clear();
    navigate("/join-now");
  }
  function ClearGame() {
    dispatch({
      type: Actions.CLEAR_GAME,
    });
    dispatch({
      type: Actions.SHOW_GAMES_MENU,
    });
    if(verification==="0"){
      navigate("/verification");
    }
    else{
      navigate("/");
    }
    
  }
  const clearData = () => {
    dispatch({
      type: Actions.TEST_CASE,
      data: false,
    });
    if(verification==="0"){
      navigate("/verification");
    }
    
  };

  const pathname = window.location.pathname;

  // console.log(state.auth.user.validation);

  let verification = state?.auth?.user?.validation;

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}

        <div
          className="navbar"
          style={{ height: pathname === "/" ? "300px!important" : "" }}
        >
          <Row style={{ width: "100%" }}>
            <div className="mainhead">
              <img
                src={logo}
                className="logo"
                style={{
                  width: "auto",
                  height: "44px",
                  cursor: "pointer",
                  marginLeft: "15px",
                }}
                alt="BettDraft"
                onClick={ClearGame}
              />

              {auth.isAuthenticated ? (
                <div style={{ display: "flex", justifyContent: "end" }}>
                  {/* <div
                style={{ marginRight: '1rem' }}
                className={cart?.cartItems?.length > 0 ? "cart-header-div" : ""}
                onClick={cart?.cartItems?.length > 0 ? goToCart : ""}
              >
                <FaShoppingCart
                  size={20}
                  color="white"
                  style={{ marginTop: "11px" }}
                ></FaShoppingCart>
                <label>
                  {cart?.cartItems?.length > 0 ? cart?.cartItems?.length : ""}
                </label>
              </div> */}
                  <div className="big-nav-div">
                    <span
                      className="user-price hide-ipad"
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      onClick={() => {

                        if(verification === "0"){
                          navigate("/verification");
                        }

                        else if (User?.validation === "0") {
                          ErrorToast("Please update your profile");
                        } else {
                          dispatch({
                            type: Actions.TEST_CASE,
                            data: false,
                          });
                          navigate("/userwallet");
                        }
                      }}
                    >
                      {"$"} {User?.account?.balance}
                    </span>

                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="user_dropdown_menu m-hide"
                      >
                        <span className="user-profile">
                          {/* <FaRegUser size={20} id="dropdown-basic" className="bigscreen"/> */}

                          <img
                            src={user}
                            className="fa fa-2x fa-user-plus"
                            id="dropdown-basic"
                            style={{
                              color: "#0D3862",
                              marginRight: "18%",
                              cursor: "pointer",
                              height: "30px",
                            }}
                          />

                          {/* <i className="fa fa-2x fa-user-circle smalldisplay" style={{ color:"#0D3862" , marginLeft:"-8px" }} id="dropdown-basic" /> */}

                          <p
                            className="mt-1"
                            style={{
                              color: "#0D3862",
                              fontWeight: "600",
                              marginTop: "15px!important",
                            }}
                          >
                            {User?.name}
                          </p>
                        </span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="open_dropdown_p">
                        <section className="profile-dropdown">
                          <div className="user_profile_details">
                            <div
                              className="user_profile_one"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                if(verification === "0"){
                                  navigate("/verification");
                                }
                                else if (User?.validation === "0") {
                                  ErrorToast("Please update your profile");
                                } else {
                                  dispatch({
                                    type: Actions.TEST_CASE,
                                    data: false,
                                  });
                                  navigate("/personal-information");
                                }
                              }}
                            >
                              <h2
                                style={{
                                  color: "#0D3862",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                }}
                              >
                                {" "}
                                {User?.name}
                              </h2>
                            </div>
                            <hr className="profile_hr" />

                            {/* <div className="user_profile_two">
                          <div
                            className="user_profile_two_first"
                            onClick={() => {

                              if (User?.validation === "0") {
                                ErrorToast("Please update your profile");
                              } else {
                                dispatch({
                                  type: Actions.TEST_CASE,
                                  data: false,
                                });
                                navigate("/userwallet");
                              }
                            }}
                          >
                            <h2> {'$'} {User?.account?.balance}</h2>
                            <p>Balance</p>
                          </div>
                        </div> */}

                            {/* <div className="link_user_profile">
                          <a
                            onClick={() => {
                              if (User?.validation === "0") {
                                ErrorToast("Please update your profile");
                              } else {
                                dispatch({
                                  type: Actions.TEST_CASE,
                                  data: false,
                                });
                                navigate("/userwallet");
                              }
                            }}
                            style={{ color: "white" }}
                          >
                            Redeem Amount
                          </a>
                          <a
                            onClick={() => {
                              if (User?.validation === "0") {
                                ErrorToast("Please update your profile");
                              } else {
                                dispatch({
                                  type: Actions.TEST_CASE,
                                  data: false,
                                });
                                navigate("/mybets");
                              }
                            }}
                            style={{ color: "white" }}
                          >
                            Account History
                          </a>

                          <a
                            style={{ color: "white" }}
                            onClick={() => {
                              if (User?.validation === "0") {
                                ErrorToast("Please update your profile");
                              } else {
                                dispatch({
                                  type: Actions.TEST_CASE,
                                  data: false,
                                });
                                navigate("/contact-us");
                              }
                            }}
                          >
                            Open Ticket
                          </a>
                        </div> */}
                          </div>
                          
                          {/* {verification ==="0" ? "" : */}
                    <div>
                          {SidebarData.map((item, index) => {
                            return (
                              <div className="navbaritem">
                                <li
                                  key={index}
                                  className={item.cName}
                                  onClick={clearData}
                                >

                                  <Link to={item.path}>
                                    {/* {item.icon} */}
                                    <span className="title-text">
                                      {item.title}
                                    </span>
                                  </Link>

                                </li>
                              </div>
                            );
                          })}
                          </div>
                          
                          {/* } */}
                        

                        </section>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* <span>
                  <a className="user-out-icon">
                    <FaPowerOff size={20} onClick={Logout} />
                  </a>
                </span> */}
                  </div>

                  <div className="exit">
                    <img
                      src={logout}
                      style={{
                        height: "35px",
                        marginLeft: "5px",
                        cursor: "pointer",
                      }}
                      onClick={Logout}
                    />
                  </div>

                  {/* <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link> */}
                </div>
              ) : (
                !auth.isModalLogin && (
                  <div style={{ display: "flex", marginRight: "15px" }}>
                    <Button
                      className="join-btn-text loginbtn"
                      onClick={Logout}
                      style={{ marginRight: "1rem", background: "#0D3862" }}
                    >
                      Login
                    </Button>
                    <Button
                      className="join-btn-text"
                      onClick={navigateToJoinNow}
                      style={{ background: "#179624" }}
                    >
                      Join Now
                    </Button>
                  </div>
                )
              )}
            </div>
          </Row>
        </div>

           
        
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={clearData}>
                  <Link to={item.path}>
                    {item.icon}
                    <span
                      className={
                        item.path === "/contact-us"
                          ? "title-contact-us"
                          : "title-text "
                      }
                       style={{color:item.path == "/contact-us"?"red":"#0D3862" }}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}

            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
