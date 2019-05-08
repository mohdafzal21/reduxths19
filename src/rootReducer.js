import {combineReducers} from 'redux'

import toggle from './Toggle/reducer'
import counter from './Counter/reducer'

const rootReducer = combineReducers({
    toggle,
    counter
})

export default rootReducer 