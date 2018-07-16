import C from '../constants'
import { combineReducers } from 'redux'

export const todos = (state = [], action) => {
    
    switch(action.type) {

        case C.ADD_TODO:
            return [
                ...state,
                action.payload
            ]

        case C.EDIT_TODO: 
            let arr = state.slice()
            arr[action.payload.index] = action.payload.data
            return arr

        case C.REMOVE_TODO: 
            return state.slice().splice(action.payload, 1)

        case C.CLEAR_TODO:
            return []

        default: 
            return state
    }
}

export const errors = (state = [], action) => {

    switch(action.type) {

        case C.REMOVE_ERROS:
            return state.splice(action.payload)

        case C.ADD_ERRORS:
            return [
                ...state,
                action.payload
            ]

        default:
            return state
    }
}

export const editMode = (state = false, action) => {

    return action.type === C.TOGGLE_EDIT_MODE ? !state : null
}

export default combineReducers({
    todos,
    errors,
    editMode
})