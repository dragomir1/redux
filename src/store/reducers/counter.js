// we are importing everything from the action.js file
import * as actionTypes from '../actions';

// this is the reducer file that will be exported to be used.
// a reducer is just a funciton that retrieves a state and an action.
// this is the initial state which is a js object that reflects the inital state for the reducer.

const initialState ={
  counter: 0
}

// UNLIKE REACT, THIS STATE DOES NOT MERGE WITH THE OLD STATE.  THIS IS THE NEW STATE.  SO IN OUR STORE WE HAVE COUNTER AND RESULTS.  SIMCE IN THE SWITCH STATMENT, WE ONLY HAVE COUNTER AND NOT RESULT, THIS BEOCMES THE NEW STATE AND RESULT IS IN A WAY DELETED...SINCE WE'RE ONLY UPDATED THE COUNTER AND NOT THE RESULT. SO THE NEW STATE WILL NOT HAVE RESULT ANYMORE.

// we do not mutate the original state!! we need to do this IMMUTABLY!!! for that we need to return a JS object, distribute the properties of the old state, with the spread operator:
// this says, return a JS object, take the properties and values of the old state and distribute them in the new object, and since we defined an additional proptery in the new JS object, override the counter property and only that...leave everything else untouched.

//  DO THIS IMMUTALBY, DONT RETURN A NEW OBJECT WITHOUT DISTRUBUTING THE OLD STATE.



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      }
  }
  return state;
};



export default reducer;
