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

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 54" clicked={this.props.onAddNumber}  />
                <CounterControl label="Subtract 36" clicked={this.props.onSubtractNumber}  />
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
    ctr: state.counter
  };
};

// the second argument. which kind of actions you want to dispatch in the container.
// we return a js object where we define some prop names which holds a reference to a function which will get executed to dispatch and action.
// "dispatch()" will available throught the onIncrementCounter property. when the property is executed as a function. then the dispatch() is gong to get executed.
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddNumber: () => dispatch({type: 'ADD'}),
    onSubtractNumber: () => dispatch({type: 'SUBTRACT'}),
  };
};

// connect is a function that returns a funciton which then takes a component as input.
// it's function which returns a higer order component
// connect can now also be called as a funtion. and since it returns a function, we can execute the result of connect we also execute the second function and pass counter....
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// for the connect fucntion we can pass some configuration for the given container..in this case the counter container.
// we pass two pieces of information to connect. 1. which part of the application state interests us (which slice of the state you want to use in this container 2. which actions you want to dispatch.

// so the state we want to get AND the actions we want to dispatch
