import React, { useState, useRef, useEffect, useMemo, memo } from "react";
import LabelWithImage from "../../../components/LabelWithImage";
import { Actions } from "../../../redux/Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  AllSports,
  OtherLinks,
  popularArray,

} from "../../../constant/commonArrray";
import { useNavigate } from "react-router-dom";

import { sportEndPoint } from "../../../constant/Environment";
import { fetchAllData } from "../../../Utility/API";
const LeftNav = (props) => {
  const { onClick } = props;
  const selectedGame = useSelector((state) => state.sidebar);
  const { game, leagueList } = selectedGame;
  const state = useSelector((state) => state);
  const {  sidebar } = state;

  const [league, setLeague] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [sportid, setsportid] = useState(null);
  const [active, setactive] = useState(false);
  const [allSportsArray, setallsports] = useState([]);
  const [showallsport, setshowall] = useState(true);
  const handleRemoveAllBetslips = () => {
    dispatch({
      type: Actions.REMOVE_ALL_BETSLIP,
    });
  };


  function handleAllsports(item, index) {
    localStorage.setItem("game", JSON.stringify(item));
    dispatch({
      type: Actions.SET_GAME,
      data: item.name,
      Id: item.id,
    });
  }


  return (
    <div className="col-md-2 mt-4 hide-ipad" style={ { marginLeft: sidebar.isSideBarOpen ?'' :'40px'}}>
      <div className="sidebar-Sportbook">
        <div className="sidebar-header mt-4">
          <h2>Popular</h2>
        </div>
        <div className="sidebar-link-div">
          {popularArray.map((ele, index) => {
            return (
              <Link
                // to={`/Sports-Book/${ele.name}`}
                to={`/${ele.label.replace(/\s/g, "")}`}
                onClick={() => handleAllsports(ele, index)}
                className="sideBar-game"
              >
                <LabelWithImage
                  data={ele}
                  onClick={() => handleAllsports(ele, index)}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="sidebar-Sportbook">
        <div className="sidebar-header">
          <h2 style={{ marginTop: "20px" }}>All Sports</h2>
        </div>
        <div className="sidebar-link-div">
          {AllSports.map((ele, index) => {
            return (
              <Link
                to={`/${ele.label.replace(/\s/g, "")}`}
                onClick={() => handleAllsports(ele, index)}
                className="sideBar-game"
              >
                <LabelWithImage
                  data={ele}
                  onClick={() => handleAllsports(ele, index)}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="sidebar-Sportbook">
        <div className="sidebar-header">
          <h2 style={{ marginTop: "20px" }}>Other Links</h2>
        </div>
        <div className="sidebar-link-div">
          {OtherLinks.map((ele, index) => {
            return (
              <Link
                to={`/${ele.label.replace(/\s/g, "")}`}
                onClick={() => handleAllsports(ele, index)}
                className="sideBar-game"
              >
                <LabelWithImage data={ele} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
