// we are importing everything from the action.js file
import * as actionTypes from './actions';

// this is the reducer file that will be exported to be used.
// a reducer is just a funciton that retrieves a state and an action.
// this is the initial state which is a js object that reflects the inital state for the reducer.


//  UPDATING DATE IMMUTABLY. WE START WITH ADDING THE RESULTS PROPERTY.
const initialState ={
  counter: 0,
  results: []
}

// UNLIKE REACT, THIS STATE DOES NOT MERGE WITH THE OLD STATE.  THIS IS THE NEW STATE.  SO IN OUR STORE WE HAVE COUNTER AND RESULTS.  SIMCE IN THE SWITCH STATMENT, WE ONLY HAVE COUNTER AND NOT RESULT, THIS BEOCMES THE NEW STATE AND RESULT IS IN A WAY DELETED...SINCE WE'RE ONLY UPDATED THE COUNTER AND NOT THE RESULT. SO THE NEW STATE WILL NOT HAVE RESULT ANYMORE.

// we do not mutate the original state!! we need to do this IMMUTABLY!!! for that we need to return a JS object, distribute the properties of the old state, with the spread operator:
// this says, return a JS object, take the properties and values of the old state and distribute them in the new object, and since we defined an additional proptery in the new JS object, override the counter property and only that...leave everything else untouched.

//  DO THIS IMMUTALBY, DONT RETURN A NEW OBJECT WITHOUT DISTRUBUTING THE OLD STATE.

// the CONCAT METHOD ADDS ITEMS TO THE END OF ARRAY1.  IT COMBINES TWO OR MORE ARRAYS..ITS A COMBINER. CONCAT RETURNS A NEW ARRAY + A NEW VALUE ADDED TO THE END OF THAT ARRAY.
// IF YOU USE PUSH, YOU'RE ATTACHED THE ORIGINAL RESULTS FROM THE ORIGINAL STATE. DONT USE PUSH.

// results: state.results.concat(state.counter) -- this updates the array in the state IMMUTABLY. you work with arrays in states using concat.
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
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }

      // we use the filter method returns a new array, it takes a function as an input, the function is executed on each element in the array, and determines if the element fulfills a certain condition to make it into a new array which is returned by filter.

      // IT'S SAYING RETUEN TRUE IF THE ID OF THE CURRENT ELEMENT WE ARE LOOKING ATI NOT EQUAL TO THE ID WE'RE GETTING WITH THIS ACTION
      // resultELemId is a payload for this action and we need to pass this payload.
      // updated array is a new array due to the filter method, which returns true for all the elements where the id is not the id we pass with the action.
    case actionTypes.STORE_DELETE:
    const updatedArray = state.results.filter(result => result.id !== action.resultElemId);
    return {
      ...state,
      results: updatedArray
    }
  }
  return state;
};



export default reducer;
