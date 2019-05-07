import React from 'react';
import {connect} from 'react-redux'

const Counter = ({count ,dispatch})=> (
    <div>
        <h1>Count  : {count}</h1>
    <h1>Increment</h1>
    <button onClick={()=>dispatch({
        type: 'INCREMENT_COUNT'
    })}>Increment</button>
    <h1>Decrement</h1>
    <button onClick={()=>dispatch({
        type:'DECREMENT_COUNT'
    })}>Decrement</button>
    </div>
)

const mapStateToProps = state=> ({
    count : state.toggleState.count
})

export default connect(mapStateToProps)(Counter) 