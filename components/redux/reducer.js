
import { combineReducers } from "redux";

import {
  UPDATE_QUESTIONS,
 
} from "./actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const questionsReducer = (state = [], action) => {
  //console.log(action.payload)
  if (action.type === UPDATE_QUESTIONS) {
    thequestion = [...state, ...action.payload];
    
    //console.log(thequestion)
    
    return thequestion;
  }
  return state;
};


const reducer = combineReducers({
  questions: questionsReducer,
});

export default reducer;