// this is the reducer file that will be exported to be used.
// a reducer is just a funciton that retrieves a state and an action.
// this is the initial state which is a js object that reflects the inital state for the reducer.

const initialState ={
  counter: 0
}


const reducer = (state = initialState, action) => {
  if(action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  };

  if(action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  };

  if(action.type === 'ADD') {
    return {
      counter: state.counter + 54
    }
  };

  if(action.type === 'SUBTRACT') {
    return {
      counter: state.counter - 36
    }
  };

  return state;
};


export default reducer;
