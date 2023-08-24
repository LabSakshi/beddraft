import { Link } from "react-router-dom";

import React, { useState } from "react";
import "./sideBar.css";
import { useNavigate } from "react-router-dom";
import { FaGreaterThan, FaLessThan, FaRegUser } from "react-icons/fa";
import {
  MdAccountBalance,
} from "react-icons/md";

import { BsPencil } from "react-icons/bs";
import { BiInfoCircle, BiEnvelope } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";

const NewSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { auth, sidebar } = state;
  let navigate = useNavigate();
  const handleTrigger = () => {
    handleSideBar(!isOpen);
    setIsProfile(false);
    setIsAccount(false);
    setIsSport(false);
    setIsLive(false);
    setIsReport(false);
    setIsRule(false);
    setOdds(false);
  };

  const handleSideBar = (flag) => {
    setIsOpen(flag);
    dispatch({
      type: Actions.SIDEBAR_EXPAND,
      data: flag,
    });
  };
  const [about, setAbout] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isAccount, setIsAccount] = useState(false);

  const [isSport, setIsSport] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const [isRule, setIsRule] = useState(false);
  const [Odds, setOdds] = useState(false);
  const [faq, setFaq] = useState(false);
  const [contact, setContact] = useState(false);

  const hideSidebar = () => {
    dispatch({
      type: Actions.HIDE_GAMES_MENU,
    });
  }

  const clearData = () => {
    dispatch({
      type: Actions.TEST_CASE,
      data: false
    });
  }


  return (
    <div >
      <div >
        <div >
          <div className="inner-space">
            <div className="trigger" onClick={handleTrigger}>
              {isOpen ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
            </div>

            <div
              className={
                isProfile ? "sidebar-position active" : "sidebar-position"
              }
              onClick={() => {
                handleSideBar(true);
                setIsProfile(!isProfile);
                setIsAccount(false);
                setIsSport(false);
                setIsLive(false);
                setIsReport(false);
                setIsRule(false);
                setContact(false);
                setFaq(false);
                setAbout(false);
                navigate('/personal-information')
                // dispatch({
                //   type: Actions.HIDE_GAMES_MENU,
                // });
              }}
            >
              <FaRegUser />
              <span>Profile</span>
            </div>
            {isProfile && (
              <div id="submenu-sidebar"
                onClick={hideSidebar}>
                <div className="sidebar-position">
                  <span>
                    <Link to="/personal-information" onClick={clearData}>Personal Information</Link>
                  </span>
                </div>
                {/* <div className="sidebar-position">
                  <span>
                    <Link to="/Account-Data">Account Data</Link>
                  </span>
                </div> */}
                <div className="sidebar-position">
                  <span>
                    <Link to="/change-email" onClick={clearData}>Change Email</Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/change-password" onClick={clearData}>Change Password</Link>
                  </span>
                </div>
                {/* <div className="sidebar-position">
                  <span>
                    <Link to="/vouchers" onClick={clearData}>Vouchers</Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/orders" onClick={clearData}>Voucher Orders</Link>
                  </span>
                </div> */}
                {/* <div className="sidebar-position">
                  <span>
                    <Link to="/change-pin">Change Pin</Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/new-pin">New Pin</Link>
                  </span>
                </div> */}
              </div>
            )}

            <div
              className={
                isAccount ? "sidebar-position active" : "sidebar-position"
              }
              onClick={() => {
                handleSideBar(true);
                setIsAccount(!isAccount);
                setIsProfile(false);
                setIsSport(false);
                setIsLive(false);
                setIsReport(false);
                setIsRule(false);
                setContact(false);
                setFaq(false);
                setAbout(false);
                navigate('/mybets')
              }}
            >
              <MdAccountBalance />
              <span>My Account</span>
            </div>
            {isAccount && (
              <div id="submenu-sidebar" onClick={hideSidebar}    >
                {/* <div className="sidebar-position">
                  <span>
                    <Link to="/Transfer-List">Transfer List</Link>
                  </span>
                </div> */}

                {/* <div className="sidebar-position">
                  <span>Top Up Your Account</span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/Withdraw">Withdraw</Link>
                  </span>
                </div> */}
                {/* <div className="sidebar-position">
                  <span>
                    <Link to="/accountLimit">Account Limit</Link>
                  </span>
                </div> */}
                <div className="sidebar-position">
                  <span>
                    <Link to="/mybets" onClick={clearData}>My Bets</Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/userwallet" onClick={clearData}>Wallet</Link>
                  </span>
                </div>
                {/* <div className="sidebar-position">
                  <span>
                    <Link to="/febicash">Setup Wallet</Link>
                  </span>
                </div> */}
              </div>
            )}
            {/* <div
              className={
                isSport ? "sidebar-position active" : "sidebar-position"
              }
              onClick={() => {
                handleSideBar(true);
                setIsSport(!isSport);
                setIsAccount(false);
                setIsProfile(false);
                setIsLive(false);
                setIsReport(false);
                setIsRule(false);
              }}
            >
              <MdOutlineSportsBaseball />
              <span>Sport</span>
            </div>
            {isSport && (
              <div id="submenu-sidebar">
                <div className="sidebar-position">
                  <span>
                    <Link to="/Bett-List">Bett List</Link>
                  </span>
                </div>

                <div className="sidebar-position">
                  <span>
                    <Link to="/Bett-Report">Bett Report</Link>
                  </span>
                </div>
              </div>
            )} */}

            {/* <div
              onClick={() => {
                handleSideBar(true);
                setIsLive(!isLive);
                setIsSport(false);
                setIsAccount(false);
                setIsProfile(false);
                setIsReport(false);
                setIsRule(false);
              }}
              className={
                isLive ? "sidebar-position active" : "sidebar-position"
              }
            >
              <CgMediaLive />
              <span>Live betting </span>
            </div>
            {isLive && (
              <div id="submenu-sidebar">
                <div className="sidebar-position">
                  <span>
                    <Link to="/Transfer-List">Transfer List</Link>
                  </span>
                </div>
              </div>
            )} */}
            {/* <div
              className="sidebar-position"
              onClick={() => {
                handleSideBar(true);
                setIsReport(!isReport);
                setIsLive(false);
                setIsSport(false);
                setIsAccount(false);
                setIsProfile(false);
                setIsRule(false);
              }}
              className={
                isReport ? "sidebar-position active" : "sidebar-position"
              }
            >
              <BsFileEarmarkPdf />
              <span>Report </span>
            </div> */}
            {isReport && (
              <div id="submenu-sidebar">
                <div className="sidebar-position">
                  <span>
                    <Link to="/Action-List">Action List</Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/Access-List">Access List</Link>
                  </span>
                </div>
              </div>
            )}
            <div
              className={
                isRule ? "sidebar-position active" : "sidebar-position"
              }
              onClick={() => {
                handleSideBar(true);
                setIsRule(!isRule);
                setIsReport(false);
                setIsLive(false);
                setIsSport(false);
                setIsAccount(false);
                setIsProfile(false);
                setContact(false);
                setFaq(false);
                setAbout(false);
                navigate('/terms-conditions');
              }}
            >
              <BsPencil />
              <span>Rules </span>
            </div>
            {isRule && (
              <div id="submenu-sidebar" onClick={hideSidebar} >
                <div className="sidebar-position">
                  <span>
                    <Link to="/terms-conditions" onClick={clearData}>Terms And Conditions</Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/validity-and-acceptance" onClick={clearData}>
                      Validity And Acceptance Of Bets
                    </Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/gaming-rules" onClick={clearData}>Gaming Rules </Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/privacy-policy" onClick={clearData}>Privacy Policy </Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/sports-rules" onClick={clearData}>Sports Rules</Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/live-betting" onClick={clearData}>Live Betting </Link>
                  </span>
                </div>
                <div className="sidebar-position">
                  <span>
                    <Link to="/responsible-gaming" onClick={clearData}>Responsible Gaming</Link>
                  </span>
                </div>
                <div
                  // className="sidebar-position"
                  className={
                    Odds ? "sidebar-position active" : "sidebar-position"
                  }
                  onClick={() => {
                    setOdds(!Odds);
                    // handleSideBar(true);
                    // setIsRule(!isRule);
                    // setIsReport(false);
                    // setIsLive(false);
                    // setIsSport(false);
                    // setIsAccount(false);
                    // setIsProfile(false);
                  }}
                >
                  <span>Odds Glossary +</span>
                </div>

                {Odds && (
                  <div id="submenu-sidebar">
                    <div className="sidebar-position">
                      <span>
                        {" "}
                        <Link to="/odds-soccer" onClick={clearData}>Soccer</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        {" "}
                        <Link to="/odds-basket" onClick={clearData}>Basket</Link>
                      </span>
                    </div>
                    <div className="sidebar-position" onClick={clearData}>
                      <span>
                        <Link to="/odds-hockey" onClick={clearData}>Hockey</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-tennis" onClick={clearData}>Tennis</Link>
                      </span>
                    </div>
                    <div className="sidebar-position" >
                      <span>
                        <Link to="/odds-waterPolo" onClick={clearData}>Waterpolo</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-cricket" onClick={clearData}>Cricket</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-darts" onClick={clearData}>Darts</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-boxing" onClick={clearData}>MMA/Boxing</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-fustal" onClick={clearData}>Fustal</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-aussie">Aussie</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-volley" onClick={clearData}>Volley</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-handball" onClick={clearData}>Handball</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-baseball" onClick={clearData}>Baseball</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-beach-volley" onClick={clearData}>Beach Volley</Link>
                      </span>
                    </div>
                    <div className="sidebar-position">
                      <span>
                        <Link to="/odds-pesapallo" onClick={clearData}>Pesapallo</Link>
                      </span>
                    </div>
                  </div>
                )}
                {/* <div className="sidebar-position">
                  <span>Anti-Money Laundering</span>
                </div> */}
              </div>
            )}
            <div
              //className="sidebar-position"
              className={faq ? "sidebar-position active" : "sidebar-position"}
              onClick={() => {
                setFaq(!faq);
                navigate("/faq");
                handleSideBar(true);
                setAbout(false);
                setIsAccount(false);
                setIsProfile(false);
                setIsSport(false);
                setIsLive(false);
                setIsReport(false);
                setIsRule(false);
                setContact(false);
                hideSidebar()
              }}
            >
              <BiInfoCircle />
              <span>
                <Link to="/faq" onClick={clearData}>FAQ</Link>
              </span>
            </div>
            <div
              className={about ? "sidebar-position active" : "sidebar-position"}
              onClick={() => {
                setAbout(!about);
                navigate("/about-us");
                handleSideBar(true);
                setIsAccount(false);
                setIsProfile(false);
                setIsSport(false);
                setIsLive(false);
                setIsReport(false);
                setIsRule(false);
                setContact(false);
                setFaq(false);
                hideSidebar()
              }}
            >
              <MdOutlineHomeWork />
              <span>

                <Link to="/about-us" onClick={clearData}>About Us</Link>
              </span>
            </div>
            <div
              // className="sidebar-position"
              className={
                contact ? "sidebar-position active" : "sidebar-position"
              }
              onClick={() => {
                handleSideBar(true);
                setContact(!contact);
                setFaq(false);
                navigate("/contact-us");
                setAbout(false);
                setIsAccount(false);
                setIsProfile(false);
                setIsSport(false);
                setIsLive(false);
                setIsReport(false);
                setIsRule(false);
                hideSidebar()
              }}
            >
              <BiEnvelope />
              <span>
                <Link to="/contact-us" onClick={clearData}>Contact Us</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSideBar;
