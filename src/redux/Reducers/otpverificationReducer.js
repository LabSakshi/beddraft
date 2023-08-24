import { Actions } from "../../src/redux/Actions/Actions";
const initialState = {
    userVerified: false
}

export default function otpverificationReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.ADHAROTP:
            return {
                ...state,
                userVerified: true,
                adharNumber: action.data
            }
        default:
            return {

                ...state
            }
    };


}