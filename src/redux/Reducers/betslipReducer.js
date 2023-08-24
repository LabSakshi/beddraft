import { Actions } from "../Actions/Actions";

const initialState = {
  betslips: [],
  selectedBetslipBtn: [],
  betConfiguration: {},
  parlayBets: false,
  playerdata: [],
  playerid: "",
  league: [],
  sports: [],
  isVisible: true,
  Message:true,
  isSelected:false,
  isteam:false,
};

export default function selectedBetslipReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SELECTED_BETSLIP:
      return {
        ...state,
        betslips: [...state.betslips, action.data],
        selectedBetslipBtn: [...state.selectedBetslipBtn, action.selectedBtn],
      };
    case Actions.SINGLE_BET_UPDATE: {
      const existingBet = state.betslips.map((item) => {
        // let isMore =  action.data.isMore;
        // let isLess = action.data.isLess;
        // if(item.id == action.data.id){
        //   isMore=  action.data.isMore;
        //   isLess =  action.data.isLess;
        // }
        return {
          ...item,
          isMore: item.id == action.data.id ? action.data.isMore : item.isMore,
          isLess: item.id == action.data.id ? action.data.isLess : item.isLess,
        };

        // if(item.id == action.data.id){
        //   item.isMore =  action.data.isMore;
        //   item.isLess =  action.data.isLess;
        // }
        // return item
      });

      // console.log("existingBet", existingBet);
      return {
        ...state,
        betslips: existingBet,
      };
    }

    case Actions.SELECTED_REFRESH_BETSLIP:
      // console.log('action', action)
      const { fixtureId, odds, betId } = action;
      const existingBet = state.betslips.map((user) => {
        return {
          ...user,
          //t1Spread2 :  odds ,
          [user.t1Spread2
            ? "t1Spread2"
            : user.t1Money2
            ? "t1Money2"
            : user.t1Total2
            ? "t1Total2"
            : user.tHome
            ? "tHome"
            : user.tTie
            ? "tTie"
            : user.tAway
            ? "tAway"
            : "t1Spread2"]:
            user.betId === betId
              ? odds
              : user.t1Spread2 ??
                user.t1Money2 ??
                user.t1Total2 ??
                user.tHome ??
                user.tTie ??
                user.tAway,
        };
      });

      return {
        ...state,
        betslips: existingBet,
      };
    // userUpdated(state, action) {

    // },

    case Actions.REMOVE_SELECTED_BETSLIP:
      let newslipArray = [...state.betslips];
      newslipArray.splice(action.removeEleIndex, 1);

      let newSelectedBetslipBtnArray = [...state.selectedBetslipBtn];
      newSelectedBetslipBtnArray.splice(action.removeEleIndex, 1);
      return {
        ...state,
        betslips: newslipArray,
        selectedBetslipBtn: newSelectedBetslipBtnArray,
      };
    case Actions.REMOVE_ALL_BETSLIP:
      return {
        ...state,
        betslips: [],
        selectedBetslipBtn: [],
      };
    case Actions.BETSLIP_RATES:
      return {
        ...state,
        betslips: action.data,
      };
    case Actions.BET_CONFIG:
      return {
        ...state,
        betConfiguration: action.data,
      };
    case Actions.PARLAY_BETS:
      return {
        ...state,
        parlayBets: action?.data,
      };
      case Actions.RECECIPT_VISIBLE:
        return {
          ...state,
          isVisible: action?.data,
        };
      case Actions.CLEAR_MSSG:
          return {
            ...state,
            Message: action?.data,
          };
      case Actions.SELECTED:
          return {
            ...state,
            isSelected: action?.data,
          };
      case Actions.TEAMCHECK:
          return {
            ...state,
            isteam: action?.data,
          };
    default:
      return {

        ...state
      }

  }
}
