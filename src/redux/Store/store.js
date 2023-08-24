import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../Reducers/rootReducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
})
export const persistor = persistStore(store)
export default store