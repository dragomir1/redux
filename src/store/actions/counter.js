import * as actionTypes from './actionTypes';


// we are creating an ACTION CREATOR FOR SYNCH CODE. action creators recieve any payloads you want to pass on. you retrn an JS object.
// we need to export this function.
export const increment = () => {
  return  {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = (value) => {
  return  {
    type: actionTypes.ADD,
    val: value
  };
};

export const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value
  };
};
