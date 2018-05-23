import React from 'react';
import ReactDOM from 'react-dom';
// importing the store
import { createStore } from 'redux';
// connecting redux to react;
// Provider is a helper component that allows us to inject the store into our react components
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// this takes a reducer as an input.
// we need to hook up the Provider component to the store.  we need to set up a property.
const store = createStore(reducer);

// use the store property to pass the store that was created with the createStore.  Passing store constant as a value to the prop. now the store is conntect to react application at least a bit..a few morethings to do.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
