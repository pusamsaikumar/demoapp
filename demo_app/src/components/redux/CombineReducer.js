import { combineReducers } from "redux";
import { getpostDetailsReducer } from "./Reducer";

export const appReducer = combineReducers({
  getpostDetailsReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
