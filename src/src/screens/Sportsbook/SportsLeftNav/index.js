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
import { getSportImageUrl } from "../../../Utility/functions/Helper";
const SportsLeftNav = () => {
  const state = useSelector((state) => state);
  const { auth, sidebar } = state;
  const [sportsList, setSportsList] = useState([]);
  const [league, setLeague] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSports();
    fetchPopular();
  }, []);

  function handleAllsports(item, index) {
    localStorage.setItem("game", JSON.stringify(item));
    dispatch({
      type: Actions.SET_GAME,
      data: item.name,
      Id: item.id,
    });
  }
  const fetchPopular = () => {
    let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.leagueList}`;
    fetchAllData(url)
      .then((res) => res.json())
      .then((response) => {
        let updated = response.map((elem) => ({
          ...elem,
          label: elem?.name.replace(/\s/g, "").toLowerCase(),
          //img: getSportImageUrl(elem?.name.replace(/\s/g, "_").toLowerCase()),
        }));
        setLeague(updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchSports = () => {
    let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.sports}`;
    fetchAllData(url)
      .then((res) => res.json())
      .then((response) => {
        let updated = response.map((elem) => ({
          ...elem,
          label: elem?.name.replace(/\s/g, "").toLowerCase(),
          img: getSportImageUrl(elem?.name.replace(/\s/g, "_").toLowerCase()),
        }));
        setSportsList(updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pathname = window.location.pathname;

  return (
    <div
      className="col-md-2 col-lg-2 space-sidebar hide-ipad "
      style={{ backgroundColor:'white' , border:"2px solid #0D3862" , borderRadius:"8px" , width:"220px" , marginTop:pathname==="/"?"12px":"15px" , marginLeft:"10px"}}
    >
      <div  >
      <div >
        <div className="sidebar-header">
          <h2 style={{ marginTop: "30px" , color:"#0D3862" , fontSize:"18px" , fontWeight:"800" }}>Sports</h2>
        </div>
        <div className="sidebar-link-div" >
          {league.map((ele, index) => {
            return (
              <Link
                // to={`/Sports-Book/${ele.name}`}
                to={`/${ele?.label?.replace(/\s/g, "")}`}
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
      </div>

      <div className={ sidebar.isSideBarOpen ? "": "sidebar-Sportbook "  }  >
      <div className ={auth.isAuthenticated  && !sidebar.isSideBarOpen  ? "space-sidebar-collapse" : "sidebar-Sportbook-without-coll"}>
        <div className="sidebar-header">
          {/* <h2 style={{ marginTop: "20px" }}>All Sports</h2> */}
        </div>
        <div className="sidebar-link-div" >
          {sportsList.map((ele, index) => {
            return (
              <Link
                to={`/${ele?.label?.replace(/\s/g, "")}`}
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
      </div>

      {/* <div className={ sidebar.isSideBarOpen ? "": "sidebar-Sportbook "  }  >
        <div className ={auth.isAuthenticated  && !sidebar.isSideBarOpen  ? "space-sidebar-collapse" : "sidebar-Sportbook-without-coll"}>
        <div className="sidebar-header">
          <h2 style={{ marginTop: "20px" }}>Other Links</h2>
        </div>
        <div className="sidebar-link-div">
          {OtherLinks.map((ele, index) => {
            return (
              <Link
                to={`/${ele.label.replace(/\s/g, "")}`}
               // onClick={() => handleAllsports(ele, index)}
                className="sideBar-game"
                target="_blank"
              >
                <LabelWithImage data={ele} />
              </Link>
            );
          })}
        </div>
        </div>
      </div> */}

    </div>
  );
};

export default SportsLeftNav;
