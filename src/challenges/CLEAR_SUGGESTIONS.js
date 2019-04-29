import C from "../constants";
import { suggestions } from "../store/reducers";
import expect from "expect";

const state = ["Heavenly Ski Resort", "Heavens Sonohara"];
const action = {
  type: C.CLEAR_SUGGESTIONS
};

const expectedState = [];
const actualState = suggestions(state, action);

expect(actualState).toEqual(expectedState);

console.log(`
    Challenge C: CLEAR_SUGGESTIUONS PASSED!!!
`);
