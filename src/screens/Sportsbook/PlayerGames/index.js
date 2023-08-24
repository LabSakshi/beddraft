import React, { useState, useRef, useEffect } from "react";
import "../Sportsbook.css";
import { API_URL, sportEndPoint } from "../../../constant/Environment";
import { useSelector, useDispatch } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { fetchAllData } from "../../../Utility/API";
import Loader from "../../../components/Loader";
import { TabPanel, a11yProps } from "../../../Utility/functions/Helper";
import PlayerCard from "../../../components/PlayerCard";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getSportImageUrl,
  getMarketSingleData,
} from "../../../Utility/functions/Helper";
import { Actions } from "../../../redux/Actions/Actions";
import LabelWithImage from "../../../components/LabelWithImage";
import PlayerSection from "../../../components/PlayerSection";
const PlayerGames = (props) => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [activeIndex, setActiveIndex] = useState("");
  const [activeTabName, setActiveTabName] = useState("");

  const [tabList, setTabList] = useState([  {
    name: "Sat, Jul 15",
    id: "1",
  },
  {
    name: "Sun, Jul 16",
    id: "2",
  },
  {
    name: "Mon, Jul 17",
    id: "3",
  }]);
  const game = useSelector((state) => state).sidebar.game;
  const selectedGameId = useSelector((state) => state).sidebar.gameId;
  const selectedGame = useSelector((state) => state).sidebar.game;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  const state = useSelector((state) => state);

  const { auth, sidebar } = state;
  const [sportsList, setSportsList] = useState([]);
  const [league, setLeague] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSports();
    fetchPopular();
  }, []);

  function fetchPlayerData(selectedGameId, name) {
    if (selectedGameId != "") {
      let url =
        name == "league"
          ? `${
              sportEndPoint.apiBaseUrl +
              sportEndPoint.api.playerleagueData +
              selectedGameId
            }`
          : `${
              sportEndPoint.apiBaseUrl +
              sportEndPoint.api.playersportsData +
              selectedGameId
            }`;
      setIsLoading(true);
      fetchAllData(url)
        .then((res) => res.json())
        .then((response) => {
          setIsLoading(false);

          const staticData =[
            {
              "_id": "64d0c7ad87f7de1ddcaeb43b",
              "type": 1,
              "id": 44832612,
              "extId": "10069897",
              "sport": {
                "id": 154914,
                "name": "Baseball"
              },
              "league": {
                "id": 41662737,
                "name": "MLB"
              },
              "teamH": {
                "id": 27715331,
                "abv": "CIN",
                "name": "Reds"
              },
              "teamA": {
                "id": 87768456,
                "abv": "MIA",
                "name": "Marlins"
              },
              "startDate": "2023-08-09T12:35:00",
              "updated": "2023-08-08T12:22:17",
              "updatedBy": "by sport data",
              "openDate": "2023-08-09T12:35:00",
              "eventName": "Reds v/s Marlins",
              "active": true,
              "markets": [
                {
                  "statAbv": "WLKS",
                  "statlbl": "Walks",
                  "statName": "Walks",
                  "active": true,
                  "id": "39957234",
                  "players": {
                    "home": [
                      {
                        "_id": "6490197d8054886a39dc07cf",
                        "id": 10000312,
                        "name": "Joey Votto",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-votto-10000312-fcf00684.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 80050051,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Wicket Keeper",
                        "positionAbv": "WK",
                        "injuryStatus": "Out",
                        "extId": 10000312,
                        "status": 1,
                        "point": 0.46,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "649019808054886a39dc20e3",
                        "id": 10010446,
                        "name": "Spencer Steer",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/spencer-steer-10010446-53bd676c.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 64484089,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Wicket Keeper",
                        "positionAbv": "WK",
                        "extId": 10010446,
                        "status": 1,
                        "point": 0.44,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "649019818054886a39dc3103",
                        "id": 10012535,
                        "name": "Christian Encarnacion-Strand",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/christian-encarnacion-strand-10012535-d97aab07.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 64484089,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Wicket Keeper",
                        "positionAbv": "WK",
                        "extId": 10012535,
                        "status": 1,
                        "point": 0.34,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ],
                    "away": [
                      {
                        "_id": "6490197d8054886a39dc079c",
                        "id": 10000225,
                        "name": "Jorge Soler",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/jorge-soler-10000225-f12c9c43.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 94439009,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Batters",
                        "positionAbv": "BAT",
                        "extId": 10000225,
                        "status": 1,
                        "point": 0.49,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0a96",
                        "id": 10001946,
                        "name": "Joey Wendle",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-wendle-10001946-0ac5e98d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 64484089,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Batters",
                        "positionAbv": "BAT",
                        "extId": 10001946,
                        "status": 1,
                        "point": 0.19,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0cc1",
                        "id": 10005493,
                        "name": "Luis Arraez",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/luis-arraez-10005493-2ab2b06d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 86039635,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Batters",
                        "positionAbv": "BAT",
                        "extId": 10005493,
                        "status": 1,
                        "point": 0.37,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ]
                  },
                  "settlement": 0,
                  "status": 1,
                  "name": "Fantasy MLB Walks"
                },
                {
                  "statAbv": "FPTS",
                  "statlbl": "FantasyPoints",
                  "statName": "Fantasy Points",
                  "active": true,
                  "id": "50786319",
                  "players": {
                    "home": [
                      {
                        "_id": "6490197d8054886a39dc07cf",
                        "id": 10000312,
                        "name": "Joey Votto",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-votto-10000312-fcf00684.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 80050051,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "First Baseman",
                        "positionAbv": "1B",
                        "injuryStatus": "Out",
                        "extId": 10000312,
                        "status": 1,
                        "point": 3.13,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197e8054886a39dc10f3",
                        "id": 10007012,
                        "name": "Will Benson",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/will-benson-10007012-13ae6156.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 75453434,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Right fielder",
                        "positionAbv": "RF",
                        "extId": 10007012,
                        "status": 1,
                        "point": 3.49,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197e8054886a39dc11cb",
                        "id": 10007121,
                        "name": "Nick Senzel",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/nick-senzel-10007121-98b9d782.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 59846107,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Center Fielder",
                        "positionAbv": "CF",
                        "extId": 10007121,
                        "status": 1,
                        "point": 2.89,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197e8054886a39dc128e",
                        "id": 10007252,
                        "name": "TJ Friedl",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/tj-friedl-10007252-43c249c0.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 18632252,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Left Fielder",
                        "positionAbv": "LF",
                        "extId": 10007252,
                        "status": 1,
                        "point": 3.54,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ],
                    "away": [
                      {
                        "_id": "6490197d8054886a39dc079c",
                        "id": 10000225,
                        "name": "Jorge Soler",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/jorge-soler-10000225-f12c9c43.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 94439009,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Disignated Hitter",
                        "positionAbv": "DH",
                        "extId": 10000225,
                        "status": 1,
                        "point": 3.46,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc07c0",
                        "id": 10000282,
                        "name": "Johnny Cueto",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/johnny-cueto-10000282-a05007a1.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 79629756,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Starting Pitcher",
                        "positionAbv": "SP",
                        "injuryStatus": "Out",
                        "extId": 10000282,
                        "status": 1,
                        "point": 3.74,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0a96",
                        "id": 10001946,
                        "name": "Joey Wendle",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-wendle-10001946-0ac5e98d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 64484089,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10001946,
                        "status": 1,
                        "point": 2.46,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0be6",
                        "id": 10005191,
                        "name": "Jesús Sánchez",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/jesus-sanchez-10005191-fa72a7a4.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 75453434,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Right fielder",
                        "positionAbv": "RF",
                        "extId": 10005191,
                        "status": 1,
                        "point": 2.89,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ]
                  },
                  "settlement": 0,
                  "status": 1,
                  "name": "Fantasy MLB Fantasy Points"
                },
                {
                  "statAbv": "RUNS",
                  "statlbl": "Runs",
                  "statName": "Runs",
                  "active": true,
                  "id": "15291237",
                  "players": {
                    "home": [
                      {
                        "_id": "6490197d8054886a39dc07cf",
                        "id": 10000312,
                        "name": "Joey Votto",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-votto-10000312-fcf00684.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 80050051,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "First Baseman",
                        "positionAbv": "1B",
                        "injuryStatus": "Out",
                        "extId": 10000312,
                        "status": 1,
                        "point": 0.48,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "649019808054886a39dc20e3",
                        "id": 10010446,
                        "name": "Spencer Steer",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/spencer-steer-10010446-53bd676c.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 64484089,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10010446,
                        "status": 1,
                        "point": 0.55,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "649019818054886a39dc3103",
                        "id": 10012535,
                        "name": "Christian Encarnacion-Strand",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/christian-encarnacion-strand-10012535-d97aab07.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 64484089,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10012535,
                        "status": 1,
                        "point": 0.49,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ],
                    "away": [
                      {
                        "_id": "6490197d8054886a39dc079c",
                        "id": 10000225,
                        "name": "Jorge Soler",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/jorge-soler-10000225-f12c9c43.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 94439009,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Disignated Hitter",
                        "positionAbv": "DH",
                        "extId": 10000225,
                        "status": 1,
                        "point": 0.58,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0a96",
                        "id": 10001946,
                        "name": "Joey Wendle",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-wendle-10001946-0ac5e98d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 64484089,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10001946,
                        "status": 1,
                        "point": 0.44,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0cc1",
                        "id": 10005493,
                        "name": "Luis Arraez",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/luis-arraez-10005493-2ab2b06d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 86039635,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Second Baseman",
                        "positionAbv": "2B",
                        "extId": 10005493,
                        "status": 1,
                        "point": 0.55,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ]
                  },
                  "settlement": 0,
                  "status": 1,
                  "name": "Fantasy MLB Runs"
                },
                {
                  "statAbv": "Hits",
                  "statlbl": "Hits",
                  "statName": "Hits",
                  "active": true,
                  "id": "53096319",
                  "players": {
                    "home": [
                      {
                        "_id": "6490197d8054886a39dc07cf",
                        "id": 10000312,
                        "name": "Joey Votto",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-votto-10000312-fcf00684.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 80050051,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "First Baseman",
                        "positionAbv": "1B",
                        "injuryStatus": "Out",
                        "extId": 10000312,
                        "status": 1,
                        "point": 0.81,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "649019808054886a39dc20e3",
                        "id": 10010446,
                        "name": "Spencer Steer",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/spencer-steer-10010446-53bd676c.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 64484089,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10010446,
                        "status": 1,
                        "point": 1.03,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "649019818054886a39dc3103",
                        "id": 10012535,
                        "name": "Christian Encarnacion-Strand",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/christian-encarnacion-strand-10012535-d97aab07.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 64484089,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10012535,
                        "status": 1,
                        "point": 0.94,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ],
                    "away": [
                      {
                        "_id": "6490197d8054886a39dc079c",
                        "id": 10000225,
                        "name": "Jorge Soler",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/jorge-soler-10000225-f12c9c43.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 94439009,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Disignated Hitter",
                        "positionAbv": "DH",
                        "extId": 10000225,
                        "status": 1,
                        "point": 0.92,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0a96",
                        "id": 10001946,
                        "name": "Joey Wendle",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-wendle-10001946-0ac5e98d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 64484089,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10001946,
                        "status": 1,
                        "point": 0.87,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0cc1",
                        "id": 10005493,
                        "name": "Luis Arraez",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/luis-arraez-10005493-2ab2b06d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 86039635,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Second Baseman",
                        "positionAbv": "2B",
                        "extId": 10005493,
                        "status": 1,
                        "point": 1.35,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ]
                  },
                  "settlement": 0,
                  "status": 1,
                  "name": "Fantasy MLB Hits"
                },
                {
                  "statAbv": "STRK",
                  "statlbl": "Strikeouts",
                  "statName": "Strikeouts",
                  "active": true,
                  "id": "53179368",
                  "players": {
                    "home": [
                      {
                        "_id": "6490197d8054886a39dc07cf",
                        "id": 10000312,
                        "name": "Joey Votto",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-votto-10000312-fcf00684.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 80050051,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "First Baseman",
                        "positionAbv": "1B",
                        "injuryStatus": "Out",
                        "extId": 10000312,
                        "status": 1,
                        "point": 1.01,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "649019808054886a39dc20e3",
                        "id": 10010446,
                        "name": "Spencer Steer",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/spencer-steer-10010446-53bd676c.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 64484089,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10010446,
                        "status": 1,
                        "point": 0.81,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "649019818054886a39dc3103",
                        "id": 10012535,
                        "name": "Christian Encarnacion-Strand",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/christian-encarnacion-strand-10012535-d97aab07.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 64484089,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10012535,
                        "status": 1,
                        "point": 0.84,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ],
                    "away": [
                      {
                        "_id": "6490197d8054886a39dc079c",
                        "id": 10000225,
                        "name": "Jorge Soler",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/jorge-soler-10000225-f12c9c43.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 94439009,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Disignated Hitter",
                        "positionAbv": "DH",
                        "extId": 10000225,
                        "status": 1,
                        "point": 1.05,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0a96",
                        "id": 10001946,
                        "name": "Joey Wendle",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/joey-wendle-10001946-0ac5e98d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 64484089,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Third Baseman",
                        "positionAbv": "3B",
                        "extId": 10001946,
                        "status": 1,
                        "point": 0.75,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      },
                      {
                        "_id": "6490197d8054886a39dc0cc1",
                        "id": 10005493,
                        "name": "Luis Arraez",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/luis-arraez-10005493-2ab2b06d.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 86039635,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Second Baseman",
                        "positionAbv": "2B",
                        "extId": 10005493,
                        "status": 1,
                        "point": 0.31,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ]
                  },
                  "settlement": 0,
                  "status": 1,
                  "name": "Fantasy MLB Strikeouts"
                },
                {
                  "statAbv": "OUTP",
                  "statlbl": "TotalOutsPitched",
                  "statName": "Outs Pitched",
                  "active": true,
                  "id": "85842868",
                  "players": {
                    "home": [
                      {
                        "_id": "649019808054886a39dc20fe",
                        "id": 10010455,
                        "name": "Graham Ashcraft",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/graham-ashcraft-10010455-5a65f172.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 27715331,
                        "position": 79629756,
                        "teamName": "Reds",
                        "teamAbv": "CIN",
                        "positionName": "Starting Pitcher",
                        "positionAbv": "SP",
                        "injuryStatus": "Out",
                        "extId": 10010455,
                        "status": 1,
                        "point": 16.59,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ],
                    "away": [
                      {
                        "_id": "6490197d8054886a39dc07c0",
                        "id": 10000282,
                        "name": "Johnny Cueto",
                        "image": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/usa-today/headshots/mlb/johnny-cueto-10000282-a05007a1.png",
                        "sport": 154914,
                        "league": 41662737,
                        "sportName": "Baseball",
                        "leagueName": "MLB",
                        "team": 87768456,
                        "position": 79629756,
                        "teamName": "Marlins",
                        "teamAbv": "MIA",
                        "positionName": "Starting Pitcher",
                        "positionAbv": "SP",
                        "injuryStatus": "Out",
                        "extId": 10000282,
                        "status": 1,
                        "point": 16.53,
                        "manual": "",
                        "adds": 0,
                        "win": 0,
                        "loss": 0,
                        "finalStat": 0,
                        "active": true
                      }
                    ]
                  },
                  "settlement": 0,
                  "status": 1,
                  "name": "Fantasy MLB Total Outs Pitched"
                }
              ],
              "status": 1,
              "cutOffDate": "2023-08-09T12:35:00"
            }
          ]
          setPlayerList(staticData);
          if (staticData.length > 0) {
            let result = getMarketSingleData(staticData);
           // setTabList(result);   // uncommenty for binfing
            setActiveTabName(result[0]?.name);
            let id = `${staticData[0]?.id}_0`;
            // console.log("id" , id);
            setActiveIndex(id);
            setValue(0);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    }
  }

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  function handleAllsports(item, index, name) {
    dispatch({
      type: Actions.SET_GAME,
      data: item?.name,
      Id: item?.id,
    });
   // setTabList([]);
    setPlayerList([]);
    fetchPlayerData(item.id, name);
  }

  const fetchPopular = () => {
    let url = `${sportEndPoint.apiBaseUrl}${sportEndPoint.api.leagueList}`;
    fetchAllData(url)
      .then((res) => res.json())
      .then((response) => {
        let updated = response.map((elem) => ({
          ...elem,
          label: elem?.name?.replace(/\s/g, "").toLowerCase(),
          //img: getSportImageUrl(elem?.name.replace(/\s/g, "_").toLowerCase()),
        }));
        setLeague(updated);

        if (updated.length > 0) {
          dispatch({
            type: Actions.SET_GAME,
            data: updated[0]?.name,
            Id: updated[0]?.id,
          });
          fetchPlayerData(updated[0]?.id, "league");
        }
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
          label: elem?.name?.replace(/\s/g, "").toLowerCase(),
          img: getSportImageUrl(elem?.name?.replace(/\s/g, "_").toLowerCase()),
        }));
        setSportsList(updated);
        if (league.length === 0) {
          dispatch({
            type: Actions.SET_GAME,
            data: updated[0]?.name,
            Id: updated[0]?.id,
          });
          fetchPlayerData(updated[0]?.id, "sport");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearall = () => {
    //  alert("hello");

    setSearchQuery("");
  };

  const pathname = window.location.pathname;

  return (
    <div fluid style={{ display: "flex" }}>
      <div
        className="col-md-2 col-lg-2 space-sidebar hide-ipad "
        style={{
          marginTop: pathname === "/" ? "12px" : "15px",
          marginLeft: "10px",
        }}
      >
        <div>
          <div>
            <div className="sidebar-header">
              <h2
                style={{
                  marginTop: "14px",
                  color: "#0D3862",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginLeft: "14px",
                }}
              >
                Sports
              </h2>
            </div>
            <div className="sidebar-link-div">
              {league.map((ele, index) => {
                return (
                  <div
                    className="sideBar-game"
                    onClick={() => handleAllsports(ele, index, "league")}
                  >
                    <LabelWithImage
                      data={ele}
                      onClick={() => handleAllsports(ele, index, "league")}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={"sidebar-Sportbook "}>
          <div
            className={
              auth.isAuthenticated && !sidebar.isSideBarOpen
                ? "space-sidebar-collapse"
                : "sidebar-Sportbook-without-coll"
            }
          >
            <div className="sidebar-header"></div>
            <div className="sidebar-link-div">
              {sportsList.map((ele, index) => {
                return (
                  <div
                    className="sideBar-game"
                    onClick={() => handleAllsports(ele, index, "sport")}
                  >
                    <LabelWithImage
                      data={ele}
                      onClick={() => handleAllsports(ele, index, "sport")}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={"col-md-10 mt-4 ipad-w100"}>
        <div className="sidebar-link-div nav-tab-div mobile-sidebar show-ipad">
          <div className="d-flex ">
            {league.map((ele, index) => {
              const activeClass = selectedGame == ele?.name ? "active" : "";

              return (
                <div
                  className={activeClass}
                  onClick={() => handleAllsports(ele, index, "league")}
                >
                  <img src={ele?.img} style={{ height: "18px" }} />
                  <h1>{ele?.name}</h1>
                </div>
              );
            })}
            {sportsList.map((ele, index) => {
              const activeClass = selectedGame == ele?.name ? "active" : "";

              return (
                <div
                  className={activeClass}
                  onClick={() => handleAllsports(ele, index, "sport")}
                >
                  <img src={ele?.img} style={{ height: "18px" }} />
                  <h1>{ele?.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tab-section-div">
          <Row>
            <Col lg="9">
              <div className="nav-tab-div mt-2">
                <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    {tabList.map((item, index) => {
                      return (
                        <Tab
                          data="Points"
                          label={item?.name}
                          key={item?.id}
                          onClick={() => {
                            setActiveIndex(item?.id);
                            setActiveTabName(item?.name);
                          }}
                        />
                      );
                    })}
                  </Tabs>
                </Box>
              </div>
            </Col>

            {/* <Col lg="3">
              <InputGroup className="mb-3 search-border">
                <InputGroup.Text
                  className="searchplayer"
                  style={{ borderLeft: "none!important" }}
                >
                  <i className="fa fa-search" />
                </InputGroup.Text>
                <Form.Control
                  className="searchplayer"
                  style={{ borderRight: "none!important" }}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Player Search"
                />
                <InputGroup.Text className="searchplayer">
                  <i
                    class="fa fa-times icon"
                    style={{ display: searchQuery == "" ? "none" : "" }}
                    onClick={clearall}
                  />
                </InputGroup.Text>
              </InputGroup>
            </Col> */}
          </Row>
        </div>
        {isLoading && <Loader spinner={false} visible={isLoading} />}

        {tabList.map((item, index) => {
          return (
            <TabPanel value={value} index={index}>
              {/* <PlayerCard
                playerList={playerList}
                searchQuery={searchQuery}
                activeTabIndex={activeIndex}
                activeTabName={activeTabName}
              /> */}
              <PlayerSection
               playerList={playerList}
               searchQuery={searchQuery}
               activeTabIndex={activeIndex}
               activeTabName={activeTabName}
              />
            
            </TabPanel>
          );
        })}
        {/* {tabList.length == 0 && (
          <PlayerCard
            playerList={playerList}
            searchQuery={searchQuery}
            activeTabIndex={activeIndex}
          />
        )} */}
      </div>
    </div>
  );
};

export default PlayerGames;
