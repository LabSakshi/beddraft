import React, { useState, useRef, useEffect } from "react";
import PlayerBetSlip from "../PlayerBetSlip";
import { FiCheckCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Container,
  OverlayTrigger,
  Popover,
  Tab,
  Tabs,
} from "react-bootstrap";
import NotFound from "../../screens/NotFound";
import "./style.css";
import GamePage from "./GamePage";
import GameList from "./GameList";
import GameBetSlip from "./GameBetSlip";
import NewGamePage from './NewGamePage'

const sampleData = [
  {
    id: 1,
    name: "Hungary",
  },
  {
    id: 2,
    name: "Hungary",
  },
  {
    id: 3,
    name: "Hungary",
  },
  {
    id: 4,
    name: "Hungary",
  },
];

const PlayerSection = (props) => {
  const [gameFlag, setGameFlag] = useState(false);
  const { playerList, searchQuery, activeTabIndex, activeTabName } = props;
  const enterGame = () => {
    setGameFlag(true);
  };

  return (
    <>
      <div className="tab-button">
        <Col md={12}>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="HUN vs POR">
              {/* Tab content for HUN vs SWE */}
            </Tab>
            <Tab eventKey="profile" title="HUN vs SWE">
              {/* Tab content for HUN vs SWE */}
            </Tab>
          </Tabs>
          <Row>
            <Col md={8}>
             {/* <NewGamePage 
                playerList={playerList}
                searchQuery={searchQuery}
                activeTabName={activeTabName}
              /> */}
              {gameFlag ? <GamePage playerList={playerList} /> : <GameList enterGame={enterGame} />}
            </Col> 

            <GameBetSlip />
          </Row>
        </Col>
      </div>
    </>
  );
};

export default PlayerSection;
