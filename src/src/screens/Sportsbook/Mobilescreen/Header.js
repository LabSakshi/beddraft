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
import "../../../css/main.css";
import { sportEndPoint } from "../../../constant/Environment";
import { fetchAllData } from "../../../Utility/API";
import { getSportImageUrl } from "../../../Utility/functions/Helper";
import {Nav , Row , Col} from "react-bootstrap";
import basketball from "../../../assests/games/basketball.svg"
import nfl from "../../../assests/games/nfl.svg"
import football from "../../../assests/games/football.svg"
import mma from "../../../assests/games/mma.svg"
import boxing from "../../../assests/games/boxing.svg"

const Header = () => {
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

        console.log(updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pathname = window.location.pathname;

  return (
    <div className="col-md-12 col-sm-12 space-sidebar" id="mainheader">
      <Nav
      activeKey="/home"
      className="gamenav"
    >
                {sportsList.map((ele, index) => {

                  return(
                    <Link
                    to={`/${ele?.label?.replace(/\s/g, "")}`}
                    onClick={() => handleAllsports(ele, index)}
                    className="sideBar-game"
                    style={{width:"auto"}}
                  >
                    <LabelWithImage
                      data={ele}
                      onClick={() => handleAllsports(ele, index)}
                    />
                  </Link>
                  );
                })}
      {/* <Nav.Item>
      <Nav.Link href="#!" className="gamebox">
          <Row style={{ width:"55px" }}>
            <Col xs="12" style={{ display:"flex" , justifyContent:"center" }}>
            <img src={basketball} alt="img" className="gameimage"/>
            </Col>
            <Col xs="12">
                 <span>NBA1H</span>    
            </Col>
          </Row>
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#!" className="gamebox">
          <Row style={{ width:"55px" }}>
            <Col xs="12" style={{ display:"flex" , justifyContent:"center" }}>
            <img src={basketball} alt="img" className="gameimage"/>
            </Col>
            <Col xs="12">
                 <span>CBB</span>    
            </Col>
          </Row>
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#!" className="gamebox">
          <Row style={{ width:"55px" }}>
            <Col xs="12" style={{ display:"flex" , justifyContent:"center" }}>
            <img src={nfl} alt="img" className="gameimage"/>
            </Col>
            <Col xs="12">
                 <span>NFL</span>    
            </Col>
          </Row>
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="#!" className="gamebox">
          <Row style={{ width:"55px" }}>
            <Col xs="12" style={{ display:"flex" , justifyContent:"center" }}>
            <img src={mma} alt="img" className="gameimage"/>
            </Col>
            <Col xs="12">
                 <span>MMA</span>    
            </Col>
          </Row>
          </Nav.Link>
      </Nav.Item>

      <Nav.Item>
      <Nav.Link href="#!" className="gamebox">
          <Row style={{ width:"55px" }}>
            <Col xs="12" style={{ display:"flex" , justifyContent:"center" }}>
            <img src={football} alt="img" className="gameimage"/>
            </Col>
            <Col xs="12">
                 <span>Soccer</span>    
            </Col>
          </Row>
          </Nav.Link>
      </Nav.Item>

      <Nav.Item>
      <Nav.Link href="#!" className="gamebox">
          <Row style={{ width:"56px" }}>
            <Col xs="12" style={{ display:"flex" , justifyContent:"center" }}>
            <img src={boxing} alt="img" className="gameimage"/>
            </Col>
            <Col xs="12">
                 <span>BOXING</span>    
            </Col>
          </Row>
          </Nav.Link>
      </Nav.Item> */}
    </Nav>
    </div>
  );
};

export default Header;
