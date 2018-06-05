// we are outsorucing the action types into constants so that you only import and use the constants in the application to eliminate the dangers of typeos. it's useful as application grows
// you give it the same names as the identifer.

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const STORE_DELETE = 'STORE_DELETE';
