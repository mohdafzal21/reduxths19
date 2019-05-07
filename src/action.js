//action type constants
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'
export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'
// action creators


export function toggleMessage(){
    return{
        type :TOGGLE_MESSAGE
    }
}

export function incrementCounter(){
    return{
        type: INCREMENT_COUNT
    }
}

export function decrementCounter(){
    return{
        type: DECREMENT_COUNT
    }
}