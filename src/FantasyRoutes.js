import React, { Suspense, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./screens/Loading";
import { sportEndPoint } from "./constant/Environment";
import { fetchAllData } from "./Utility/API";
import { Actions } from "./redux/Actions/Actions";
import MobileBetSlip from "./screens/Sportsbook/MobileBetSlip";
import MobileProfile from "./screens/Sportsbook/MobileProfile";
import NotFound from "./screens/NotFound";
import Activation from "./screens/Profile/Activation";
import PlayerGames from './screens/Sportsbook/PlayerGames'
import UserWallet from "./screens/Accounting/Wallet";
import Login from "./screens/Login";


const FantasyRoutes = (props) => {
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

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div>
          <Routes>
            {/* <Route exact path="/" element={<AllGames />} />  */}
            <Route exact path="/" element={<PlayerGames />} />

            <Route
              path="/activations/:userName/:token"
              element={<Activation />}

            />
            <Route path="*" element={<Navigate to="/" replace />} />

            <Route exact path="/userwallet" element={<UserWallet />} />
            <Route exact path="/login" element={<Login />} />
            {/* {!auth.isAuthenticated && (
            <Route path="*" element={<Navigate to="/login" replace />} />
            )}
             {auth.isAuthenticated && (
            <Route path="*" element={<Navigate to="/" replace />} />
            )} */}

            {/* <Route exact path="/" element={<PrivateRoute><AllGames /></PrivateRoute>} /> 
            <Route exact path="/americanfootball" element={ <PrivateRoute><Football /></PrivateRoute>} />
            <Route exact path="/australianrules" element={<PrivateRoute><AussieRules /></PrivateRoute>} />
            <Route exact path="/basketball" element={<PrivateRoute><Basketball /></PrivateRoute>} />
            <Route exact path="/boxing"  element={<PrivateRoute><Boxing /></PrivateRoute>} />
            <Route exact path="/golf" element={<PrivateRoute><Golf /></PrivateRoute>}  />
            <Route exact path="/icehockey" element={<PrivateRoute><IceHockey /></PrivateRoute>}  />
            <Route exact path="/mma" element={<PrivateRoute><MMA /></PrivateRoute>}  />
            <Route exact path="/soccer" element={<PrivateRoute><Soccer /></PrivateRoute>}  />
            <Route exact path="/motorsports" element={<PrivateRoute><MotorSport /></PrivateRoute>}  />
            <Route exact path="/rugbyleague" element={<PrivateRoute><RubyLeague /></PrivateRoute>} />
            <Route exact path="/tennis" element={<PrivateRoute><Tennis /></PrivateRoute>} />
            <Route exact path="/nfl" element={<PrivateRoute><NFL /></PrivateRoute>} />
            <Route exact path="/nhl" element={<PrivateRoute><NHL /></PrivateRoute>}/>
            <Route exact path="/nba" element={<PrivateRoute><NBA /></PrivateRoute>}/>
            <Route exact path="/ncaaf" element={<PrivateRoute><NCAAF /></PrivateRoute>}  />
            <Route exact path="/notfound" element={<PrivateRoute><NotFound /></PrivateRoute>}  /> */}
            {/* {
              auth.isAuthenticated && 
              (<> */}


            {/* <Route exact path="/americanfootball" element={ <Football />} />
                <Route exact path="/australianrules" element={<AussieRules />} />
                <Route exact path="/basketball" element={<Basketball />} />
                <Route exact path="/baseball" element={<BaseBall />} />
                <Route exact path="/boxing"  element={<Boxing />} />
                <Route exact path="/golf" element={<Golf />}  />
                <Route exact path="/icehockey" element={<IceHockey />}  />
                <Route exact path="/mma" element={<MMA />}  />
                <Route exact path="/soccer" element={<Soccer />}  />
                <Route exact path="/motorsports" element={<MotorSport />}  />
                <Route exact path="/rugbyleague" element={<RubyLeague />} />
                <Route exact path="/tennis" element={<Tennis />} />
                <Route exact path="/nfl" element={<NFL />} />
                <Route exact path="/nhl" element={<NHL />}/>
                <Route exact path="/nba" element={<NBA />}/>
                <Route exact path="/ncaaf" element={<NCAAF />}  /> */}
            <Route exact path="/notfound" element={<NotFound />} />
            {/* </>
              )
            } */}



            <Route exact path="/MobileBetSlip" element={<MobileBetSlip />} />
            <Route exact path="/profile" element={<MobileProfile />} />
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

export default FantasyRoutes;
