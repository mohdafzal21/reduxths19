import {TOGGLE_MESSAGE ,INCREMENT_COUNT ,DECREMENT_COUNT} from './action'

const initialState = {
    toggleMessageShow: false,
    count: 0,
    name : "Afzal"
}

//reducer
 export default function(state=initialState, action){
    const {type} = action      
    switch(type){
        case TOGGLE_MESSAGE:
        return{...state, toggleMessageShow: !state.toggleMessageShow }
        case INCREMENT_COUNT:
        return {...state , count: state.count + 1}
        case DECREMENT_COUNT:
        return {...state, count: state.count - 1}
        default : 
        return state;
    }
}