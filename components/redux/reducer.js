import { combineReducers } from "redux";

import {
  LOAD_QUESTIONS,
  RESET_QUESTIONS,
  ADD_ANSWER,
  CLEAR_ANSWERS,
  UPDATE_DATA
} from "./actions";

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

const reducer = combineReducers({
    questions: questionsReducer,
    answers: answersReducer,
    data: dataReducer
});


export default reducer;
