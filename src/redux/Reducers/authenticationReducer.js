import { Actions } from "../Actions/Actions";

const initialState = {
  isAuthenticated: false,
  token: "",
  user: {},
  isModal: false,
  isModalLogin: false,
  geoExpiryTime: "",
  ip:""

};


export default function authenticationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.data.user,

      };
    case Actions.MODAL_LOGIN:
      return {
        ...state,
        isModalLogin: true,
        isAuthenticated: true,
        user: action.data.user,

      };
    case Actions.LOGOUT:
      return {
        isAuthenticated: false,
        isModalLogin: false,
        user: {},
      };
       case Actions.GEOLOCATION:
      return {
        ...state,
        geoExpiryTime: action.data.dateTime,
        ip: action.data.ip,
      };

    default:
      return state;
  }
}
