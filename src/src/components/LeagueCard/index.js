import React, { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
const LeagueCard = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateCard = (item) => {
    // console.log('leagueData',item)
    // if (item.name === "NBA") {
    //   dispatch({
    //     type: Actions.SET_GAME,
    //     data: item.name,
    //     Id: item.id,
    //   });
    //   navigate(`${item.path}`);
    // } else
    if (item.name === "Mexican Pacific League") {
      dispatch({
        type: Actions.SET_GAME,
        data: item.name,
        Id: item.id,
      });
      navigate(`${item.path}`);
    }
    else {
      navigate(`${item.path}`);
    }
  };

  return (
    <div className="custom-fff-div">
      <div className="flex-column-hidden">
        <div style={{ padding: "9px" }}>
          <h5 >{props.leagueName}</h5>
        </div>
        {props.leagueData.length > 0 &&
          props.leagueData.map((item) => {
            return (
              <div
                className="linkdiv-box"
                onClick={() => {
                  navigateCard(item);
                }}
              >
                <div className="flex-start-colum">
                  <a className="link-according">
                    <span>{item.name}</span>
                    <CgChevronRight />
                  </a>
                  <div className="link-according-border"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LeagueCard;
