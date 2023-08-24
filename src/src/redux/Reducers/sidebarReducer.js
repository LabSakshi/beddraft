import { Actions } from "../Actions/Actions";
const Game = JSON.parse(localStorage.getItem("game"));

const initialState = {
  isSideBarOpen: false,
  game: "Baseball",
  gameId: 154914,
  leagueList: [],
  testFlag:false
  
};

export default function sidebarReducer(state = initialState, action) {

  // console.log(state);

  switch (action.type) {
    case Actions.SIDEBAR_EXPAND:
      return {
        ...state,
        isSideBarOpen: action.data,
      };
    case Actions.LEAGUE_GAMES:
      return {
        ...state,
        leagueList: action.data,
      };
    case Actions.SET_GAME:
      return {
        ...state,
        game: action.data,
        gameId: action.Id,
      };
    case Actions.CLEAR_GAME:
      return {
        ...state,
        // game: null,
        // gameId: null,
      };
      case Actions.TEST_CASE :
        return {
          ...state,
          testFlag:action.data
        }
    default:
      return state;
  }
}
