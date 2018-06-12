/* global test, expect, describe, it */
import * as actions from './actions.js';

/* I only did unit test on action.js for now */
describe("addAnswer returns actions", ()=>{
    it("returns an action ", ()=>{
        expect(actions.addAnswer({
               "answer": "False",
               "correct": "True",
               "index": 0,
               "isCorrect": false,
               "question": "In \"The Sims\" series, the most members in a household you can have is 8."
            })).toMatchSnapshot();
    })

    it("handles empty object", ()=>{
        expect(actions.addAnswer({})).toMatchSnapshot();
    })

    it("handles empty properties", ()=>{
        expect(actions.addAnswer({  
            "answer": "",
            "correct": "",
            "index": 0,
            "isCorrect": false,
            "question": ""
        })).toMatchSnapshot();
    })

})