import * as ActionTypes from "./ActionTypes";

export const conReducer = (state = {inData: []}, action) => {
    switch(action.type) {
        case ActionTypes.GET_CALCULATIONS:
            return {...state, inData: action.payload}
        default:
            return state;
    }
}