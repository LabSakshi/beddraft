import { Actions } from "../Actions/Actions";

const initialState = {
    cartItems: []
};

export default function shoppingReducer(
    state = initialState,
    action
) {
    switch (action.type) {

        case Actions.CART_ITEMS:
            return {
                ...state,
                cartItems: state.cartItems.length > 0 ? [...state.cartItems, action.data] : [action.data]
            };
        case Actions.UPDATE_CART_ITEMS:

            return {
                cartItems: action.data
            };
            case Actions.CLEAR_CART:

            return {
                cartItems: []
            };
        default:
            return state;
    }
}
