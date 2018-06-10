/*jshint esversion: 6 */
import { addKeys, escapeUnicode } from "../utils/utils";

API = {};

API.getQuestions = async () => {
  response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`);
  if (response.status != 200)
    throw `Server api error reponse.status=${response.status}`;
  questions = await response.json();
  
  questions.results = questions.results
                        .map(question => ({...question, Answer: null}))
                        .map(addKeys)
                        .map(question =>  ({...question, question: question.question.escapeUnicode().trim()}))   
  return questions.results;
};

String.prototype.escapeUnicode = escapeUnicode();

export default API;