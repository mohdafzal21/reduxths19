import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {incrementCounter ,decrementCounter } from './action'
const Counter = ({count,name ,incrementCounter,decrementCounter})=> (
    <div>
        <p>{name}</p>
        <h1>Count  : {count}</h1>
    <h1>Increment</h1>
    <button onClick={incrementCounter}>Increment</button>
    <h1>Decrement</h1>
    <button onClick={decrementCounter}>Decrement</button>
    </div>
)

const mapStateToProps = state=> ({
    count : state.toggleState.count,
    name : state.toggleState.name
})

const mapDispatchToProps = dispatch => bindActionCreators({
    incrementCounter, 
    decrementCounter 
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Counter) 