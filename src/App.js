import React,{Component} from 'react';
import './App.css';
//create a redux 
import {createStore} from 'redux'
//react-redux - Provider 
import {Provider}  from 'react-redux'

import rootReducer from './rootReducer'

//dev tools extension config
import {composeWithDevTools} from 'redux-devtools-extension'

//import component
import Toggle from './Toggle'
import Counter from './Counter'


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools()
)


class App extends Component {
  render() { 
    return (
      <Provider store={store}>
       <div>
     <Toggle/>
     <hr/>
     <Counter/>
    </div> 
    </Provider>
    );
  }
}



export default App;

