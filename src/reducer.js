const initialState = {
    toggleMessage: false,
    count: 0
}

//reducer
 export default function(state=initialState, action){
    const {type} = action      
    switch(type){
        case 'TOGGLE_MESSAGE':
        return{...state, toggleMessage: !state.toggleMessage }
        case 'INCREMENT_COUNT':
        return {...state , count: state.count + 1}
        case 'DECREMENT_COUNT':
        return {...state, count: state.count - 1}
        default : 
        return state;
    }
}