// executing this file with Node
const redux = require('redux');
// this ceates a new redux store
const createStore = redux.createStore;
// need to initialize the state.  it's a JS object.
const initialState = {
  counter: 0
}

// reducer
// the reducer funcrion recieves two argumemts.  1- the current state, 2-action.  then HAS to return the updated state.
// Use a feature provided by ES6 iniitalize this argument to the function with a default value. whenever this function is now called with this argument being undefined, it will take the default value instead. you assign the default value by adding an equal sign and assigning the value.  so now it will take inital state whenever state is undefined.

// this will be the case when it's creating the store and executing the reducer for the very first time.
// you return a JS object where you first have to copy the old state. ALWAYS HAVE TO DO THIS IMMUTABLY.  NEVER EVER NUTATE THE STATE.
const rootReducer = (state = initialState, action) => {
  if(action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if(action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }

  return state;
}



// store

// initilizing createStore wont do much.  A store needs to be initialized with a reducer.  the reducer is the only thing that updates the state.  they are very closely connected and it needs to be passed to the store.

const store = createStore(rootReducer);
// the getState is a function that pulls out the state from the store.
console.log(store.getState());


// Subscription

// subscriptions make sure that yo udont have to manually call getstate.  it informs you is something changes.
// subscribe takes an argument.  a function that gets executed whenever the state gets updated. so wheever the action reaches the reducer.
// funciton passed to subscribe doesnt get any argumemts
// subscriptions come before the dispatch. so that it gets triggered everytime it updates the state.

store.subscribe(() => {
  console.log('Subscription', store.getState());
});


// dispatching action
// an action is dispatched by accessing the store.  we access it by caling the function 'dispatch()'.  it takes an argument.a js object that needs to have a "Type property."
// the convention is to use UPPERCASE.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
