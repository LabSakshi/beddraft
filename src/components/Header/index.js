import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "./header.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CgMathDivide } from "react-icons/cg";
import { BsEnvelopeOpen } from "react-icons/bs";
// import {HiBars3} from "react-icons/hi2";
import {
  GiHamburgerMenu
} from "react-icons/gi"
import {
  FaEnvelopeOpenText,
  FaRegUser,
  FaPowerOff,
  FaShoppingCart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import { ErrorToast } from "../Toast/message";
import { Form, Button } from "react-bootstrap";
import logo from "../../assests/images/DraftlOGO.png";

import NewSideBar from '../SideBar/NewSideBar'


const Header = () => {
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
      data: false
    });
    navigate("/cart");
  }

  function Logout() {
    dispatch({
      type: Actions.LOGOUT,
    });
    dispatch({
      type: Actions.SIDEBAR_EXPAND,
      data: false,
    });
    localStorage.clear();
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
    localStorage.setItem("openDrawer", "0");
    dispatch({
      type: Actions.CLEAR_GAME,
    });
    dispatch({
      type: Actions.SHOW_GAMES_MENU,
    });
    navigate("/");

    //window.open("_blank");
  }
  return (
    <div
      id="header-main"
    // className={sidebar.isSideBarOpen ? "main-content-navexpanded" : "main-content-expandedclose"}
    >
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {
          <div className="show-ipad">
            <Container className="login-top-end ">
              <Nav className="login-header w-100 mb-2">
                {/* <Nav.Link > <span style={{fontSize:'11px'}}
              >Must be 21 years of age or older. If you or someone you know has a gambling problem? Call 1-800 - BETS - OFF</span></Nav.Link> */}
              </Nav>
            </Container>
          </div>
        }
        <Container className="space-logo-info">
          {/* <Navbar.Brand onClick={ClearGame} style={{ marginLeft: "22px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo1">Bett</span>
              <span className="logo2">House</span>
            </Link>
          </Navbar.Brand> */}
          <Navbar.Brand onClick={ClearGame} style={{ marginLeft: "22px" }}>
            {/* <img
           src={require("../../assests/images/logo.png")}
          /> */}
            <img
              src={logo}
              style={{
                width: "auto",
                height: "44px",
                cursor: "pointer",
              }}
              // className="d-inline-block align-top"
              alt="BettDraft"
            />
          </Navbar.Brand>
          {/* <div className="ipad-nav-only show-ipad">
          <div class="navbar-nav">
            <a role="button" data-rr-ui-event-key="2" class="login-btn nav-link" tabindex="0" href="#">Log In</a>
            <a role="button" data-rr-ui-event-key="2" class="join-btn nav-link" tabindex="0" href="#">Join Now</a>
          </div>
        </div> */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="hide-ipad"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="menu_ipad_view"
          >
            <Nav className="login-header hide-ipad">
              {/* <Nav.Link > <span style={{fontSize:'11px'}}>Must be 21 years of age or older. If you or someone you know has a gambling problem? Call 1-800 - BETS - OFF</span></Nav.Link>
               */}
            </Nav>
            {auth.isAuthenticated ? (
              <Nav>
                {/* <Nav.Link eventKey={2} className="nav-icon">
                <FaEnvelopeOpenText />
              </Nav.Link> */}
                {/* <Nav.Link eventKey={2} className="nav-icon nav-icon-count">
                <BsEnvelopeOpen />
                <span>5</span>
              </Nav.Link> */}
                <div className={cart?.cartItems?.length > 0 ? "cart-header-div" : ""} onClick={cart?.cartItems?.length > 0 ? goToCart : ''} >
                  <FaShoppingCart
                    size={20}
                    color="white"
                    style={{ marginTop: "11px" }}
                  ></FaShoppingCart>
                  <label>
                    {cart?.cartItems?.length > 0 ? cart?.cartItems?.length : ''}
                  </label>
                </div>

                <Nav.Link eventKey={2} className="big-nav-div">
                  <span
                    className="user-price hide-ipad"
                    onClick={() => navigate("/userwallet")}
                  >
                    {User?.account?.balance}
                  </span>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="user_dropdown_menu"
                    >
                      <span
                        className="user-profile"
                      // onClick={() => navigate("/personal-information")}
                      >
                        <FaRegUser size={20} id="dropdown-basic" />{" "}
                        {User?.name}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="open_dropdown_p">
                      <section class="profile-dropdown">
                        <div class="user_profile_details">
                          <div
                            class="user_profile_one"
                            onClick={() => {
                              // if (User?.validation === "0") {
                              //   ErrorToast("Please verify your account ");
                              // } else {
                              dispatch({
                                type: Actions.TEST_CASE,
                                data: false
                              });
                              navigate("/personal-information");
                              // }
                            }}
                          >
                            <h2> {User?.name}</h2>
                            {/* <p>$ {auth?.user.data.account.balance}</p> */}
                          </div>
                          <hr className="profile_hr" />
                          <div class="user_profile_two">
                            <div class="user_profile_two_first" onClick={() => {
                              if (User?.validation === "0") {
                                ErrorToast("Please verify your account ");
                              } else {
                                dispatch({
                                  type: Actions.TEST_CASE,
                                  data: false
                                });
                                navigate("/userwallet");
                              }
                            }}>
                              <h2>test</h2>
                              <p>Balance</p>
                            </div>
                            {/* <div class="user_profile_two_first only_hori_border">
                              <h2>$00</h2>
                              <p>Undecide</p>
                            </div> */}
                          </div>
                          <div class="link_user_profile">
                            {/* <a
                              style={{ color: "white" }}
                              onClick={() => {
                                if (User?.data.validation === '0') {
                                  ErrorToast('Please verify your account ')
                                } else {
                                  navigate("/userwallet")
                                }

                              }
                              }
                            >
                              Deposit Funds
                            </a> */}
                            <a
                              onClick={() => {
                                if (User?.validation === "0") {
                                  ErrorToast("Please verify your account ");
                                } else {
                                  dispatch({
                                    type: Actions.TEST_CASE,
                                    data: false
                                  });
                                  navigate("/userwallet");
                                }
                              }}
                              style={{ color: "white" }}
                            >
                              Redeem Points
                            </a>
                            <a
                              onClick={() => {
                                if (User?.validation === "0") {
                                  ErrorToast("Please verify your account ");
                                } else {
                                  dispatch({
                                    type: Actions.TEST_CASE,
                                    data: false
                                  });
                                  navigate("/my-entries");
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
                                  ErrorToast("Please verify your account ");
                                } else {
                                  dispatch({
                                    type: Actions.TEST_CASE,
                                    data: false
                                  });
                                  navigate("/contact-us");
                                }
                              }}
                            >
                              Open Ticket
                            </a>
                            {/* <a style={{ color: "white" }} onClick={() => {
                              if (User?.data.validation === '0') {
                                ErrorToast('Please verify your account ')
                              } else {
                                navigate("/accountLimit")
                              }

                            }

                            }>Account Limit</a> */}
                          </div>

                        </div>
                      </section>
                    </Dropdown.Menu>
                  </Dropdown>

                  <span>
                    <a className="user-out-icon">
                      <FaPowerOff size={20} onClick={Logout} />
                    </a>
                  </span>
                </Nav.Link>
                {/* <span>
                <GiHamburgerMenu onClick={handleShow} color="white" size={30}
                 style={{ marginTop: "6px" }}  
                />
                </span> */}
              </Nav>
            ) : (
              !auth.isModalLogin && (
                <Nav>
                  <Nav.Link
                    eventKey={2}
                    className="login-btn"
                    // onClick={() => {
                    //   navigate("/login");
                    // }}
                    onClick={Logout}
                  >
                    Log In
                  </Nav.Link>
                  <Nav.Link
                    eventKey={2}
                    className="join-btn"
                    onClick={navigateToJoinNow}
                  //  onClick={() => navigate("/join-now")}
                  >
                    Join Now
                  </Nav.Link>
                </Nav>
              )
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      {/* {auth.isAuthenticated && show && (
        <Alert variant="secondary" className="my-custom-notifi" onClose={() => setShow(false)} dismissible>
          <p>
            Must be 21 years of age or older. If you or someone you know has a
            gambling problem? Call 1-800 - BETS - OFF
          </p>
        </Alert>
      )} */}

      {/* <Navbar className="navbar-custom new-navbar">
        <Container>
          <Nav className="navbar">

          </Nav>
          <h3 style={{ color: 'white', fontSize: 14 }}>Must be 21 years of age or older. If you or someone you know has a gambling problem? Call 1-800 - BETS - OFF</h3>

        </Container>
      </Navbar> */}

      {/* <Navbar expand="lg" bg="dark" variant="dark">
        <Container> */}
      {/* </Container>
      </Navbar> */}


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NewSideBar />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
