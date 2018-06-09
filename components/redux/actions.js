// action types
export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const RESET_QUESTIONS = "RESET_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const CLEAR_ANSWERS = "CLEAR_ANSWERS";
export const UPDATE_DATA = "UPDATE_DATA"

// action creators
export const loadQuestions = questions => ({
  type: LOAD_QUESTIONS,
  payload: questions,
});

// action creators
export const resetQuestions = questions => ({
  type: RESET_QUESTIONS,
  payload: questions,
});

export const addAnswer = answer => ({
  type: ADD_ANSWER,
  payload: answer,
});

export const clearAnswers = () => ({
  type: CLEAR_ANSWERS,
  payload: [],
});

// action creators
export const updateData = data => ({
  type: UPDATE_DATA,
  payload: data,
});
