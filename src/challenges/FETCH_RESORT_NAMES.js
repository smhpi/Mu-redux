import C from "../constants";
import expect from "expect";
import { fetching } from "../store/reducers";

const state = false;

const action = {
  type: C.FETCH_RESORT_NAMES
};

const expectedState = true;

const actualState = fetching(state, action);

expect(actualState).toEqual(expectedState);

console.log(`
    Challenge A: FETCH_RESORT_NAMES PASSED!!!
`);
