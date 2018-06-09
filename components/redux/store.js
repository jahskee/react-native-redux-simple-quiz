import { createStore } from "redux";

import { loadQuestions, updateData } from "./actions";

import reducer from "./reducer";
import API from "../api-client/question";

const store = createStore(reducer);

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
  //console.log(store.getState());
})();

// ================ End Initialize Store ==================
export default store;
