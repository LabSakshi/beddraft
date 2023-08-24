import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import sidebarReducer from './sidebarReducer';
import betslipReducer from './betslipReducer';
import shoppingReducer from "./shoppingReducer";

const rootReducer = combineReducers({
  auth: authenticationReducer,
  sidebar: sidebarReducer,
  betslip: betslipReducer,
  cart: shoppingReducer
});

export default rootReducer;
