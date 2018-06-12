/* jshint esversion: 6 */
import { combineReducers } from "redux";
import { addKeys } from "../../utils/utils";

import {
  REQUEST_QUESTIONS,
  REQUEST_QUESTIONS_SUCCEED,
  REQUEST_QUESTIONS_ERROR,
  ADD_ANSWER,
  CLEAR_ANSWERS,
  UPDATE_DATA
} from "../action/actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const questionsReducer = (prevQuestions = [], action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS_SUCCEED:
      return action.payload;
    case REQUEST_QUESTIONS_ERROR:
      return [];
  }
  return prevQuestions;
};

const answersReducer = (prevAnswers = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return [...prevAnswers, action.payload];
    case CLEAR_ANSWERS:
      return [];
  }
  return prevAnswers;
};

// store.data is anything not yet categorized
const dataReducer = (prevData = {}, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return merge(prevData, action.payload);
  }
  return prevData;
};

/* Keep the reducer as pure function - do not mutate the original state. */
// const nextState = Object.assign({}, state);
const reducer = combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
  data: dataReducer
});

export default reducer;
