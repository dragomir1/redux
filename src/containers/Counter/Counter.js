import React, { Component } from 'react';
// connect is a function. we use it on the export level..see notes below...
import { connect } from 'react-redux';



import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// to connect this container to the store, or
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

// WE ARE USING THE NEW RESULTS PROPERTY IN OUR REDUCER STATE. ADDED A BUTTON ON THE BOTTOM TO MANIPULATE CODE.

// the goal is to dispatch an action whenever the button is clicked, the push the new result to the results array, so the result of the number change, update the array then take current counter as an input.
// additionally, if one the list items is clicked, we should remove it from the array. we first add new methods to mapDispatchToProps function. so we first need to add new duspatches that dicates the action to be taken.

// WHEN THE ONCLICK FUNCTINO IS EXECUTED..THEN THE onDeleteResult FUNCTION IS EXECTUED.  WE CAN PASS THE ID BECUASE SINCE IT'S MAPPED IT WILL NOT BE EXECUTED AT POINT OF TIME THE COMPONENT IS RENDERSD.  WE ARE PASSING ACTION PAYLOADS FROM THE UI OVER MAP THIS PATCH TO PROPS THEN TO THE STORE. ==>This.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddNumber} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractNumber} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResult => (
                    <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                  ))}

                </ul>
            </div>
        );
    }
}
// the const name is clear in its objective.  you store instruction about how the state managed by redux should be maped to props you can use in this container
// it stores a function which expects a state stored in redux and returns a js object which is a map of prop names and slices of the state stored in redux

// this state will be given to you by react redux. it will reach out to your redux state which is the state you set up in your reducer file.  here you'll have access to the counter property.
// state.counter is saying "give me the value in our global state managed by redux". and give it to me in the form of a proptery name ctr, which can then  be used to render
const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  };
};

// the second argument. which kind of actions you want to dispatch in the container.
// we return a js object where we define some prop names which holds a reference to a function which will get executed to dispatch and action.
// "dispatch()" will available throught the onIncrementCounter property. when the property is executed as a function. then the dispatch() is gong to get executed.


// Passing and retrieving data. PAYLOAD object is added as additional information.  It's a javascript object.  it loads all the relevant information to this action.


// adding two new dispatch functions that will dictate what will happen when the button is clicked.
// on onDeleteResult, we pass the 'resultELemId' payload but we need the id. to pass to it. we pass it as a paramter. then we pass it to our render method as an anonymous function so that we may be able to pass it.

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddNumber: () => dispatch({type: 'ADD', val: 10}),
    onSubtractNumber: () => dispatch({type: 'SUBTRACT', val: 15}),
    onStoreResult: () => dispatch({type:'STORE_RESULT'}),
    onDeleteResult: (id) => dispatch({type:'STORE_DELETE', resultElemId: id})
  };
};

// connect is a function that returns a funciton which then takes a component as input.
// it's function which returns a higer order component
// connect can now also be called as a funtion. and since it returns a function, we can execute the result of connect we also execute the second function and pass counter....
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// for the connect fucntion we can pass some configuration for the given container..in this case the counter container.
// we pass two pieces of information to connect. 1. which part of the application state interests us (which slice of the state you want to use in this container 2. which actions you want to dispatch.

// so the state we want to get AND the actions we want to dispatch
