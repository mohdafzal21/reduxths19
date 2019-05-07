import React from 'react';
import {connect} from 'react-redux'

//functional component
const Toggle =({toggleMessage,dispatch})=>(
  <div>
      {toggleMessage &&   <p>ths19-3 learning redux by </p> }
  
    <button onClick={()=>dispatch({
        type:'TOGGLE_MESSAGE'
    })}>Toggle </button>
    </div>
)

const mapStateToProps = state =>({
    toggleMessage : state.toggleState.toggleMessage
})

export default connect(mapStateToProps)(Toggle)