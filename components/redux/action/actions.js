
/* jshint esversion: 6 */
import API from "../../api-client/question";

/*
Please Note: When action scales up, we need to break-down to different action files.
*/

// action types
export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";
export const REQUEST_QUESTIONS_SUCCEED = "REQUEST_QUESTIONS_SUCCEED";
export const REQUEST_QUESTIONS_ERROR = "REQUEST_QUESTIONS_ERROR";

export const ADD_ANSWER = "ADD_ANSWER";
export const CLEAR_ANSWERS = "CLEAR_ANSWERS";
export const UPDATE_DATA = "UPDATE_DATA";


// action creators
export const addAnswer = answer => ({
  type: ADD_ANSWER,
  payload: answer
});

export const clearAnswers = () => ({
  type: CLEAR_ANSWERS,
  payload: []
});

export const updateData = data => ({
  type: UPDATE_DATA,
  payload: data
});

export const requestQuestions = () => ({
  type: REQUEST_QUESTIONS, 
});

export const requestQuestionsSucceed = questions => ({
  type: REQUEST_QUESTIONS_SUCCEED,
  payload: questions,
});

export const requestQuestionsError = () => ({
  type: REQUEST_QUESTIONS_ERROR,
});

// async actions creators
export const getQuestions = () => async dispatch => {   
  try {
    dispatch(requestQuestions())
    const questions = await API.getQuestions();
    dispatch(requestQuestionsSucceed(questions));
  } catch (error) {
    console.error(error);
    dispatch(requestQuestionsError());
  }
}