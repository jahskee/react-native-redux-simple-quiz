/*jshint esversion: 6 */
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';
import { getQuestions, updateData } from "../action/actions";
import rootReducer from "../reducer/reducer";
import API from "../../api-client/question";

export function configureStore(initialState = {}) {  
  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunk)
  );
  return store;
}
const store = configureStore();  

store.dispatch(getQuestions())
store.dispatch(
  updateData({
    questionIndex: 0
  })
);

export default store;
