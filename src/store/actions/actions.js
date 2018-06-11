// we are outsorucing the action types into constants so that you only import and use the constants in the application to eliminate the dangers of typeos. it's useful as application grows
// you give it the same names as the identifer.

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const STORE_DELETE = 'STORE_DELETE';


// we are creating an ACTION CREATOR FOR SYNCH CODE. action creators recieve any payloads you want to pass on. you retrn an JS object.
// we need to export this function.
export const increment = () => {
  return  {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = (value) => {
  return  {
    type: ADD,
    val: value
  };
};

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    val: value
  };
};

export const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    result: result
  };
};

export const storeDelete = (id) => {
  return  {
    type: STORE_DELETE,
    resultElemId: id
  };
};
