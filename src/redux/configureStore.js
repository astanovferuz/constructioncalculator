import { createStore, applyMiddleware, combineReducers } from "redux";
import { conReducer } from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        conReducer,
    }), 
    applyMiddleware(thunk, logger));
    return store;
}