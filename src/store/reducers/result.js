// we are importing everything from the action.js file
import * as actionTypes from '../actions';

// this is the reducer file that will be exported to be used.
// a reducer is just a funciton that retrieves a state and an action.
// this is the initial state which is a js object that reflects the inital state for the reducer.


//  UPDATING DATE IMMUTABLY. WE START WITH ADDING THE RESULTS PROPERTY.
const initialState ={
  results: []
}


//         results: state.results.concat({id: new Date(), value: state.counter}) - DOES NOT WORK
// WHEN WE IN A REDUCER AND WE NEED TO GET A VALUE FROM THE GLOBAL STATE, WE NEED TO GET IT AS AN ACTION PAYLOAD. THIS IS OUR REDUCERS WORK MOST OF THE TIME.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result})
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
