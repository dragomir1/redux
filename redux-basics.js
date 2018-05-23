// executing this file with Node

//  REDUX IS INDEPENDENT OF REACT. THIS FILE CONTAINS NO REACT..AND IT'S SET UP WITH NODE.


// THIS FILE CONTAINS EVERYTHING YOU START USING REDUX.

// SINCE USING NODE..USE THE NODE SYNTAX
const redux = require('redux');
// this ceates a new redux store
const createStore = redux.createStore;
// need to initialize the state.  it's a JS object. SINCE WE CREATED A STORE AND A ROOT REDUCER, WE STILL HAVE NO STATE. WE NEED TO INITIALIZE A STATE OTHER WISE IT WILL BE undefined.
const initialState = {
  counter: 0
}

//  CREATE THE REDUCER FIRST BEFORE CREATEING THE STORE

// reducer**************

// the reducer funcrion recieves two argumemts.  1- the current state, 2-action.  then HAS to return the updated state.
// Use a feature provided by ES6 iniitalize this argument to the function with a default value. whenever this function is now called with this argument being undefined, it will take the default value instead. you assign the default value by adding an equal sign and assigning the value.  so now it will take inital state whenever state is undefined.

// this will be the case when it's creating the store and executing the reducer for the very first time.
// you return a JS object where you first have to copy the old state. ALWAYS HAVE TO DO THIS IMMUTABLY.  NEVER EVER NUTATE THE STATE.

// ES 6 PROVIDES A FEATURE. YOU CAN INITIALLY THIS ARGUMENT TO THE FUNCITON WITH A DEFAULT VALUE.  SO WHENEVER THE FUNCITON IS NOW CALLED WITH THIS ARGUMENT BEING undefined, IT WILL TAKE THE DEFAULT VALUE INSTEAD.
// in the reducer, we get the action as a second argument.
const rootReducer = (state = initialState, action) => {
  if(action.type === "INC_COUNTER") {
    // you need to return a js object and copy the old state with the spread operator,then override the property. then you return the state. YOU NEVER MUTATE ANY DATE..EVER..ALWAYS DO IT IMMUTABLY.
    return {
      ...state,
      // 'STATE.COUNTER' GIVES YOU ACCESS TO THE STATE..YOU'RE NOT CHANGING IT..
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


// STORE-------this creates the state**********

// initilizing createStore wont do much.  A store needs to be initialized with a reducer.  the reducer is the only thing that updates the state.  they are very closely connected and it needs to be passed to the store.

const store = createStore(rootReducer);
// the getState is a function that pulls out the state from the store.
console.log(store.getState());


// Subscription**************

// subscriptions make sure that you dont have to manually call getstate.  it informs you is something changes.
// subscribe takes an argument.  a function that gets executed whenever the state gets updated. so wheever the action reaches the reducer.
// funciton passed to subscribe doesnt get any argumemts
// subscriptions come before the dispatch. so that it gets triggered everytime it updates the state.
// WHEN CONSOLE.LOGGING IN A SUBSCRIBE FUNCITON, YOU WILL KNOW WHEN THE STATE HAS UPDATED.
// SUBSCRIPTIONS COME AFTER THE STORE SO WE CAN GET NOTIFIED WHENEVER THE STATE IS UPDATED.

// THE FUNTION IN THE SUNSCRIV]BE METHOD WILL BE EXECUTED WHEEVER AN ACTION IS DOSPATCHED AND MUTATESE THE STORE.

store.subscribe(() => {
  console.log('Subscription', store.getState());
});


// dispatching action**********

// an action is dispatched by accessing the store.  we access it by caling the function 'dispatch()'.  it takes an argument.a js object that needs to have a "Type property."
// the convention is to use UPPERCASE.
// THS DISPACTCH FUNCTION TAKES AN ARGUMENT.  THE ARGUMENT IS AN ACTION!  IT NEEDS TO BE A JAVASCRIPT BJECT THAT NEEDS TO HAVE A 'TYPE' PROPERTY.  THIS IS AN IMPORTANT BUILDING BLOCK WHEN PASSING IT TO THE REDUCER.
// NAME OF TYPE IS WHAT EVER NAME YOU CHOOSE. IT HAS TO BE UPPERCASE. THAT'S THE NAMING CONVENTION.

// THIS INFO NEEDS TO PASSED TO THE REDUCER. THAT'S WHERE ALL THE LOGIC IS. THE ACTION IS JSUT A MESSAGNER AND PASSES INFO ALONG.
store.dispatch({type: 'INC_COUNTER'});
// THE TYPE PROPTEY HAS TO BE USED LIKE THIS..AFTER THAT YOU CAN ADD AND NAME ANY OTHER PROPERTY YOU WANT.
// YOU CAN ALSO ADD A SINGLE PROPERTY NAMED PAYLOAD: {} WHICH IS ALSO A JS OBJECT AND YOU GROUP ALL THE DATA YOU WANT TO PASS WITH THE ACTION.
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
