/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import { Actions } from "../../redux/Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
export default function UserInactive() {

  // console.log("Inactive component is called");
  const timeout = 1800000; //30 min 60000; 1 min  // //300000 5 min  //900000 15 min   //1800000 30 min
  // const timeout = 60000; 
  const [remaining, setRemaining] = useState(timeout);
  const [elapsed, setElapsed] = useState(0);
  const [lastActive, setLastActive] = useState(+new Date());
  const [isIdle, setIsIdle] = useState(false);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => {
    // Logout();
    autoLogout();
    setIsIdle(true);
  };
  
  function Logout() {
    const Session = JSON.parse(localStorage.getItem("session"));
    sessionStorage.clear();
    if (Session != null) {
      console.log("active seession calle");
      navigate("/");
      dispatch({
        type: Actions.LOGOUT,
      });
      dispatch({
        type: Actions.SIDEBAR_EXPAND,
        data: false,
      });
      dispatch({
        type: Actions.REMOVE_ALL_BETSLIP,
      });
      dispatch({
        type: Actions.PARLAY_BETS,
        data: false,
      });
      localStorage.clear();
      ClearGame();
    } else {

      console.log("session not logged out");
    }
  }

  function autoLogout() {

    console.log("logged out");
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
  }
  function ClearGame() {
    dispatch({
      type: Actions.CLEAR_GAME,
    });
  }
  const {
    reset,
    pause,
    resume,
    getRemainingTime,
    getLastActiveTime,
    getElapsedTime,
  } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  const handleReset = () => reset();
  const handlePause = () => pause();
  const handleResume = () => resume();

  useEffect(() => {
    setRemaining(getRemainingTime());
    setLastActive(getLastActiveTime());
    setElapsed(getElapsedTime());

    setInterval(() => {
      setRemaining(getRemainingTime());
      setLastActive(getLastActiveTime());
      setElapsed(getElapsedTime());
    }, 1000);
  }, []);

  return (
    <>
      {/* <div>
        <h1>Timeout: {timeout}ms</h1>
        <h1>Time Remaining: {remaining}</h1>
        <h1>Time Elapsed: {elapsed}</h1>
     
        <h1>Idle: {isIdle.toString()}</h1>
      </div>
      <div>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handlePause}>PAUSE</button>
        <button onClick={handleResume}>RESUME</button>
      </div> */}
    </>
  );
}
