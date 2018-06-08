import { createStore } from "redux";

import {
  updateQuestions,
} from "./actions";

import reducer from "./reducer";
import API from "../api-client/question";
import { addKeys } from "../utils/utils";

const store = createStore(reducer);

// ================ Start Initialize Store ==================

// load initial chunk of data to redux store
(async () => {

  // https://api.stratteos.us/api/questions/science
  const questions = await API.getQuestions();
 // console.log(questions.results)
  store.dispatch(updateQuestions(questions));
  console.log(store.getState());
})();

// ================ End Initialize Store ==================

export default store;