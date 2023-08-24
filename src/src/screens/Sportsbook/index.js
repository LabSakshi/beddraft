import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Sportsbook.css";
import { Actions } from "../../redux/Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import SportsLeftNav from "./SportsLeftNav";

const Sportsbook = (props) => {
  const [league, setLeague] = useState([]);
  const state = useSelector((state) => state);
  let length = state.betslip.betslips.length;
  const dispatch = useDispatch();
  function handleAllsports(item, index) {
    localStorage.setItem("game", JSON.stringify(item));
    dispatch({
      type: Actions.SET_GAME,
      data: item.name,
      Id: item.id,
    });
  }
  const renderSideBar = useCallback(() => {
    return <SportsLeftNav leagueData={league}></SportsLeftNav>;
  }, []);
  return (
    <div id="Sportbook">
      <div className="container-fluid bg-color-sportbook">
        <div className="inner-space1">
          <div className="row">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sportsbook;
