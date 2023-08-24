import React, { useState, Suspense, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";

import { FaList } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiWallet } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { endPoints, sportEndPoint } from "./constant/Environment";
import { fetchAllData } from "./Utility/API";
import axios from "axios";
import { Actions } from "./redux/Actions/Actions";
import UserInactive from "./components/UserInactive";
import SportsLeftNav from "./screens/Sportsbook/SportsLeftNav";
import PlayerGames from "./screens/Sportsbook/PlayerGames";
import MainRoutes from "./MainRoutes";
import Slider from "./components/Navbar/slider";
import { useHistory } from "react-router-dom";
import FantasyRoutes from "./FantasyRoutes";
import { Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import { isMobile } from "react-device-detect";
import { createBrowserHistory } from "history";
import { axiosInstance } from "./Utility/axiosInstances";
import { setDispatch } from "./Utility/ConfigData";

const App = () => {
  const state = useSelector((state) => state);
  const [routeList, setRouteList] = useState([
    "/login",
    "/join-now",
    "/info",
    "/personal-information",
    "/change-email",
    "/change-password",
    "/vouchers",
    "/mybets",
    "/my-entries",
    "/userwallet",
    "/terms-conditions",
    "/validity-and-acceptance",
    "/gaming-rules",
    "/privacy-policy",
    "/howtoplay",
    "/scoring",
    "/sports-rules",
    "/live-betting",
    "/responsible-gaming",
    "/odds-soccer",
    "/odds-basket",
    "/odds-hockey",
    "/odds-tennis",
    "/odds-waterPolo",
    "/odds-cricket",
    "/odds-darts",
    "/odds-boxing",
    "/odds-fustal",
    "/odds-aussie",
    "/odds-volley",
    "/odds-handball",
    "/odds-baseball",
    "/odds-beach-volley",
    "/odds-pesapallo",
    "/faq",
    "/about-us",
    "/contact-us",
    "/bettingguide",
    "/termsconditions",
    "/responsiblegaming",
    "/houserules",
    "/change-email",
    "/vouchers",
    "/details/",
    "/cart",
    "/checkout",
    "/orders",
    "/ResetPassword",
    "/resetPassword",
    "/verification",
    "/resetpassword",
    "/verification",
    "/accountverified",
    "/accountSuccess",
    "/activations",
    "/accountCongrats",
    "/fabicash",
    "/enroll",
    "/verificationsteps",
    "/kyc",
    "/geocheck",
  ]);
  //console.log("window.location.pathname", window.location.pathname);
  // console.log('routeList',routeList.includes(window.location.pathname));
  const history = createBrowserHistory();
  const dispatch = useDispatch();
  const { auth, sidebar } = state;
  let length = state.betslip.betslips.length;
  //working  code for back button
  useEffect(() => {
    window.onpopstate = () => {
      // console.log("onpopstate called");
      setRouteList([...routeList]);
    };
    //  console.log("window", window);
    // if (window.history) {
    //   var myOldUrl = window.location.href;
    //   window.addEventListener("hashchange", function () {
    //     window.history.pushState({}, null, myOldUrl);
    //   });
    // }
  }, [window]);
  // useEffect(() => {
  //   window.onhashchange = () => {
  //     console.log("onhashchange called");
  //     setRouteList([...routeList]);
  //   };
  // }, []);
  useEffect(() => {
    setRouteList([...routeList]);
  }, [sidebar]);

  useEffect(() => {
    // localStorage.setItem("license", "");
    defaultBetConfig();

    setDispatch(dispatch);
  }, []);
  function defaultBetConfig() {
    let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.Default_Bet_Config}`;
    fetchAllData(url)
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: Actions.BET_CONFIG, data: response });
        // dispatch({
        //   type: Actions.SET_GAME,
        //   data: "American Football",
        //   Id: "131506",
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  axiosInstance.interceptors.request.use((config) => {
    // console.log("res", config);
    //  console.log("res", config);
    config.headers["SessonId"] = localStorage.getItem("session");
    return config;
  });

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log("error", error);
      if (error.response.status == "401") {
        window.alert("Invalid Session !! Please login again");
        history.replace("/login");
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
      }
      return error;
    }
  );

  const pathname = window.location.pathname;

  let verification = state?.auth?.user?.validation;
  return (
    <BrowserRouter history={history}>
      <ScrollToTop />
      <UserInactive />
      <Navbar />
      <Slider />
      {/* <Header /> */}

      {/* {auth.isAuthenticated && auth?.user?.validation === "1" ? (
        <SideBar />
      ) : (
        ""
      )} */}
      <div style={{ marginBottom: "40px" }}>
        {routeList.includes(window.location.pathname) ? (
          <MainRoutes />
        ) : (
          <div id="Sportbook">
            <div
              className={"container-fluid bg-color-sportbook"}
              style={{
                background: "white",
                marginTop: pathname === "/" ? "2px" : "90px",
              }}
            >
              <div className={"inner-space1"}>
                <div className="row">
                  <FantasyRoutes />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="ipad-sticky-bottom show-ipad">
          {length > 0 && (
            <div className="green-bg">
              <div className="green-maindiv">
                <div className="green-selected">
                  <h5 className="mainbet">
                    <b>{length > 0 && length}</b>
                  </h5>

                  <h5 className="play-s"> player selected </h5>
                </div>
                <div className="flex-aa">
                  <Link to={`/MobileBetSlip`}>
                    <h6 className="font-sticky">
                      Finalize{" "}
                      <i
                        className="fa fa-angle-double-up"
                        style={{ fontSize: "17px", fontWeight: "600" }}
                      ></i>
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="ipad-inner-sticky">
            <Link
              className="sticky_link"
              to={verification == 0 ? "/verification" : `/`}
              onClick={() => {
                dispatch({
                  type: Actions.TEST_CASE,
                  data: false,
                });
              }}
            >
              <FaList size={24} />
              <span>Players</span>
            </Link>

            {state?.auth?.isAuthenticated ? (
              <Link
                className="sticky_link"
                to={verification == 0 ? "/verification" : `/my-entries`}
                onClick={() => {
                  dispatch({
                    type: Actions.TEST_CASE,
                    data: false,
                  });
                }}
              >
                <RiFileList3Line size={24} />
                <span>My Entries</span>
              </Link>
            ) : (
              <Link
                className="sticky_link"
                to={`/login`}
                onClick={() => {
                  dispatch({
                    type: Actions.TEST_CASE,
                    data: false,
                  });
                }}
              >
                <RiFileList3Line size={24} />
                <span>My Entries</span>
              </Link>
            )}

            {state?.auth?.isAuthenticated ? (
              <Link
                className="sticky_link"
                to={verification == 0 ? "/verification" : `/userwallet`}
                onClick={() => {
                  dispatch({
                    type: Actions.TEST_CASE,
                    data: false,
                  });
                }}
              >
                <BiWallet size={24} />
                <span>My Wallet</span>
              </Link>
            ) : (
              <Link
                className="sticky_link"
                to={`/login`}
                onClick={() => {
                  dispatch({
                    type: Actions.TEST_CASE,
                    data: false,
                  });
                }}
              >
                <BiWallet size={24} />
                <span>My Wallet</span>
              </Link>
            )}

            {state?.auth?.isAuthenticated ? (
              <Link
                className="sticky_link"
                to={verification == 0 ? "/verification" : `/profile`}
                onClick={() => {
                  dispatch({
                    type: Actions.TEST_CASE,
                    data: false,
                  });
                }}
              >
                <CgProfile size={24} />
                <span>My Account</span>
              </Link>
            ) : (
              <Link
                className="sticky_link"
                to={`/login`}
                onClick={() => {
                  dispatch({
                    type: Actions.TEST_CASE,
                    data: false,
                  });
                }}
              >
                <AiOutlineLogin />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      {!isMobile && <Footer />}
    </BrowserRouter>
  );
};

export default App;
