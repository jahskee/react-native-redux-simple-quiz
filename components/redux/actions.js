// action types
export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const UPDATE_DATA = "UPDATE_DATA"

// action creators
export const loadQuestions = questions => ({
  type: LOAD_QUESTIONS,
  payload: questions,
});

// action creators
export const updateData = data => ({
  type: UPDATE_DATA,
  payload: data,
});
