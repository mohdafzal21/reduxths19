import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link , Route ,Switch} from 'react-router-dom'
//create a redux 
import {createStore} from 'redux'
//react-redux - Provider 
import {Provider}  from 'react-redux'

import rootReducer from './rootReducer'

//dev tools extension config
import {composeWithDevTools} from 'redux-devtools-extension'

//import component
import Toggle from './Toggle/Toggle'
import Counter from './Counter/Counter'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools()
)


class App extends Component {
  render() { 
    return (
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={MovieList}/>
          <Route path='/:id' component={MovieDetail}/>

         
        </Switch>
      </Router>
    </Provider>
    );
  }
}



export default App;

