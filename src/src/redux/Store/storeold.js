import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from '../Reducers/rootReducer'

const store = createStore(
    rootReducer,

)

export default store;