// we installed redux and with that we can create a store..the store should be create at the very begininging of our application.  where ou application starts.  ths is where we mount our APP component to the dom.
import React from 'react';
import ReactDOM from 'react-dom';
// importing the store function from the redux package we installed.  we need to mount the app as well.
// combineReducers combines multiple reducers into one. this is a function which takes a js object, mapping our reducers to different slices of our state, as input and merges everything into one state and one reducer.
// applyMiddleware allows us to add middleware to the store
// compose allows us to combine enhancers.  this is the native redux soloution.  it doesn' give us dev tools.
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// need to install react-redux;
// connecting redux to react;
// Provider is a helper component that allows us to inject the store into our react components.
// we wrap our App component with the Provider component.
import { Provider } from 'react-redux';
// once we have our reducer, we inport it.
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// creating a root reducer that maps the counterReducer and the resultReducer. this const is telling redux that we have to reducers and to they should be merged into one state, one reducer.
// THIS IS A GLOBAL STATE!! SO WHEN ACCESSING THIS GLOBAL STATE WE NEED TO ADD THE PROPERTYNAME INTO OUT.
 //
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});
// before we mount the app we store in in a fuction and iniitalize it.
// this takes a reducer as an input.
// we need to hook up the Provider component to the store.  we need to set up a property.
// we usually store the reducer logic in its own files.  there is usually a store folder that will contain the reducers necessary.

// this is middleware - a piece of code, a function
// this returns another function.  this returning function recieves an argument. "next" makes sense because this will be a function which you can execute and let the actin continue its journey to the reducer. this function will be exected by redux in the end. the next function also returns a function.
// the action function is what hold that code that gets exected between the action and the reducer
const logger = store => {
  return next => {
    return action => {
      console.log('middleware', action);
      // this will let the action continue to the reducers. we need to pass action as the argument.
      const result = next(action);
      console.log('middleware next state', store.getState());
      return result;
    }
  }
};
// this sets up the redux devtools store in the browser.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// we are adding a second argument, applyMiddleware and passing it the logger function.
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

// use the store property to pass the store that was created with the createStore.  Passing store constant as a value to the prop. now the store is conntect to react application at least a bit..a few morethings to do
// Provider gives us a special property called store that allows us to hook up the Provider component with our store.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
