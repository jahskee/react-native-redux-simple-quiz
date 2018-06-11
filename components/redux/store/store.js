/*jshint esversion: 6 */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';
import { call, put, takeEvery } from 'redux-saga/effects';
import { loadQuestions, updateData } from "../action/actions";
import rootReducer from "../reducer/reducer";
import API from "../../api-client/question";


//const sagaMiddleware = createSagaMiddleware();
//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer);

// ================ Start Initialize Store ==================

// load initial chunk of data to redux store
(async () => {
  const questions = await API.getQuestions();

  store.dispatch(loadQuestions(questions));

  store.dispatch(
    updateData({
      questionIndex: 0
    })
  );
})();

// ================ End Initialize Store ==================
export default store;
