
import { combineReducers } from "redux";

import {
  LOAD_QUESTIONS,
  UPDATE_DATA,
 } from "./actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const questionsReducer = (state = [], action) => {
  if (action.type === LOAD_QUESTIONS) {
    return [...state, ...action.payload];   
  }
  return state;
};

// store.data is anything not yet categorized
const dataReducer = (state = {}, action) => {
  if (action.type === UPDATE_DATA) return merge(state, action.payload);
  return state;
};

const reducer = combineReducers({
  questions: questionsReducer,
  data: dataReducer,
});

export default reducer;