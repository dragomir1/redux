import * as actionTypes from  './actionTypes';


// due to redux thunk, we're able to return a function and pass dispatch as an argument.
// here, we want to return the acton after 2 seconds.
//you need to pass something to the dispatch in the setTimeout function.

// you create asynch action creators, which in the end dispatch actions created by synch ones.
// action creators together with redux-thunk, a middleware, we can execute asynch code when dispatching an action, and block that original dispatching to then just dispatch another action, handled by thunk, once that asych task is done.

export const saveResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  };
}

export const storeResult = (result) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  }
};

export const storeDelete = (id) => {
  return  {
    type: actionTypes.STORE_DELETE,
    resultElemId: id
  };
};
