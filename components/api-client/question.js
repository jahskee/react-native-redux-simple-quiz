API = {};

API.getQuestions = async () => {
  response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`);
  if (response.status != 200)
    throw `Server api error reponse.status=${response.status}`;
  questions = await response.json();
  return questions.results;
};

export default API;