import React, { Suspense, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./screens/Loading";
import Login from "./screens/Login";
import PersonalInformation from "./screens/Profile/PersonalInformation";
import ChangeEmail from "./screens/Profile/ChangeEmail";
import ChangePassword from "./screens/Profile/ChangePassword";
import ChangePin from "./screens/Profile/ChangePin";
import NewPin from "./screens/Profile/NewPin";
import Joinnow from "./screens/Joinnow";
import Termsconditions from "./screens/Rules/Termsconditions";
import HouseRules from "./screens/Sportsbook/HouseRules";
import BettingGuide from "./screens/Sportsbook/BettingGuide";
import SportsTermsconditions from "./screens/Sportsbook/TermConditions";
import SportsResponseGame from "./screens/Sportsbook/ResponseGame";
import Faq from "./screens/Faq";
import Contacts from "./screens/Contacts";
import Validity from "./screens/Rules/Validity";
import Gamingrules from "./screens/Rules/Gamingrules";
import Privacypolicy from "./screens/Rules/Privacypolicy";
import Sportsrules from "./screens/Rules/Sportsrules";
import Responsiblegaming from "./screens/Rules/Responsiblegaming";
import Withdraw from "./screens/Accounting/Withdraw";
import { useSelector, useDispatch } from "react-redux";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import Kyc from "./screens/Profile/kyc";
import Geocheck from "./screens/Geocheck";
import MyBets from "./screens/Accounting/MyBets";
import FebiCash from "./screens/Profile/FebiCash";
import Verification from "./screens/Verification";
import LoadingIndicator from "./components/Spinner";
import UserWallet from "./screens/Accounting/Wallet";
import { sportEndPoint } from "./constant/Environment";
import { fetchAllData } from "./Utility/API";
import { Actions } from "./redux/Actions/Actions";
import Enroll from "./screens/Profile/Enroll";
import Wallet from "./screens/Profile/Wallet";
import Activation from "./screens/Profile/Activation";
import AccountLimit from "./screens/Profile/AccountLimit";
import AboutUs from "./screens/AboutUs";

import AccountVerfication from "./screens/AccountVerification";
import AccountSuccess from "./screens/AccountSuccess";
import AccountCongrats from "./screens/AccountCongrats";
import Info from "./screens/Info";
import Scoring from "./screens/Rules/Scoring";
import Howtoplay from "./screens/Rules/howtoplay";
import Verificationsteps from "./screens/Verificationsteps";

const MainRoutes = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { auth, sidebar } = state;
  useEffect(() => {
    defaultBetConfig();
  }, []);
  function defaultBetConfig() {
    let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.Default_Bet_Config}`;
    fetchAllData(url)
      .then((res) => res.json())
      .then((response) => {
        dispatch({ type: Actions.BET_CONFIG, data: response });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const tokenCheck = auth?.user?.idUser ? true : false;
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div>
          <Routes>
            <Route exact path="/Spinner" element={<LoadingIndicator />} />

            <Route exact path="/join-now" element={<Joinnow />} />
            <Route exact path="/login" element={<Login />} />
            {/* profile routes list */}

            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route exact path="/verification" element={<Verification />} />
            <Route exact path="/howtoplay" element={<Howtoplay />} />

            <Route
              exact
              path="/verificationsteps"
              element={<Verificationsteps />}
            />

            <Route exact path="/geocheck" element={<Geocheck />} />

            <Route exact path="/scoring" element={<Scoring />} />
            <Route
              exact
              path="/responsiblegaming"
              element={<SportsResponseGame />}
            />
            <Route exact path="/bettingguide" element={<BettingGuide />} />
            <Route
              exact
              path="/termsconditions"
              element={<SportsTermsconditions />}
            />

            <Route exact path="/houserules" element={<HouseRules />} />

            <Route path="/enroll" element={<Enroll />} />
            <Route path="/Wallet" element={<Wallet />} />
            <Route path="/kyc" element={<Kyc />} />

            <Route path="/my-entries" element={<MyBets />} />
            <Route
              path="/activations/:userName/:token"
              element={<Activation />}
            />

            <Route
              path="/personal-information"
              element={<PersonalInformation />}
            />
            <Route path="/fabicash" element={<FebiCash />} />
            <Route exact path="/Account-Data" element={<ChangeEmail />} />
            <Route exact path="/change-email" element={<ChangeEmail />} />
            <Route exact path="/change-password" element={<ChangePassword />} />
            <Route exact path="/change-pin" element={<ChangePin />} />
            <Route exact path="/new-pin" element={<NewPin />} />

            <Route exact path="/userwallet" element={<UserWallet />} />

            <Route
              exact
              path="/terms-conditions"
              element={<Termsconditions />}
            />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/contact-us" element={<Contacts />} />
            <Route
              exact
              path="/validity-and-acceptance"
              element={<Validity />}
            />
            <Route exact path="/gaming-rules" element={<Gamingrules />} />
            <Route exact path="/privacy-policy" element={<Privacypolicy />} />
            <Route exact path="/sports-rules" element={<Sportsrules />} />
            <Route
              exact
              path="/responsible-gaming"
              element={<Responsiblegaming />}
            />
            <Route exact path="/Withdraw" element={<Withdraw />} />

            <Route exact path="/accountLimit" element={<AccountLimit />} />

            <Route
              exact
              path="/accountverified"
              element={<AccountVerfication />}
            />

            <Route exact path="/info" element={<Info />} />

            <Route exact path="/accountSuccess" element={<AccountSuccess />} />
            <Route
              exact
              path="/accountCongrats"
              element={<AccountCongrats />}
            />

            <Route exact path="/about-us" element={<AboutUs />} />

            {/* sport routelist */}
          </Routes>
        </div>
      </Suspense>
    </div>
  );
  function PrivateRoute({ children }) {
    // const userSession = auth?.user?.idUser ? true : false;
    // return userSession ? children : <Navigate to="/login" replace />;
    const User = JSON.parse(sessionStorage.getItem("user"));
    return User != null ? children : <Navigate to="/login" replace />;
  }
};

export default MainRoutes;
