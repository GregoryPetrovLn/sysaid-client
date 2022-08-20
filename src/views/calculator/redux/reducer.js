import {SET_CALC_HISTORY} from "./actionTypes";

const initialState = {
    history: []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CALC_HISTORY:
            return {...state,}
        default:
            return state
    }
}