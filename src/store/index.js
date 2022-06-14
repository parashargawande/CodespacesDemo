import { createStore } from 'redux'
import * as ActionTypes from './actionTypes'

const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.increment:
            return {
                ...state,
                counter: state.counter + 1
            };
        case ActionTypes.decrement:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return {
                ...state
            }
    }
}

const store = createStore(counterReducer)



export default store;