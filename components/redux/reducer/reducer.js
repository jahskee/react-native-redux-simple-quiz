/*jshint esversion: 6 */
import { combineReducers } from "redux";
import { addKeys } from "../../utils/utils";

import {
  LOAD_QUESTIONS,
  RESET_QUESTIONS,
  ADD_ANSWER,
  CLEAR_ANSWERS,
  UPDATE_DATA
} from "../action/actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const questionsReducer = (prevQuestions = [], action) => {
  if (action.type === LOAD_QUESTIONS) {
    return [...prevQuestions, ...action.payload];
  } else if (action.type === RESET_QUESTIONS) {
    return action.payload;
  }
  return prevQuestions;
};

const answersReducer = (prevAnswers = [], action) => {
  if (action.type === ADD_ANSWER) {
    return [...prevAnswers, action.payload];
  } else if (action.type === CLEAR_ANSWERS) {
    return [];
  }

  return prevAnswers;
};

// store.data is anything not yet categorized
const dataReducer = (prevData = {}, action) => {
  if (action.type === UPDATE_DATA) return merge(prevData, action.payload);
  return prevData;
};

 /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);
const reducer = combineReducers({
    questions: questionsReducer,
    answers: answersReducer,
    data: dataReducer
});


export default reducer;
