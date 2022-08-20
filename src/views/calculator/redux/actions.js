import {RESET_CALC_HISTORY, SET_CALC_HISTORY, SET_CALC_RESULT} from "./actionTypes";

export const setCalcHistory = (payload) => ({type: SET_CALC_HISTORY, payload})
export const resetCalcHistory = () => ({type: RESET_CALC_HISTORY})

export const setCalcResult = (payload) => ({type: SET_CALC_RESULT, payload})