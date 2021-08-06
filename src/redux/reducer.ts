import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "../Counter/slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
