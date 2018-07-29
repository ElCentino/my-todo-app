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
            arr[action.payload.index].note = action.payload.data
            return arr

        case C.REMOVE_TODO: 

            let temp = state.slice()
            temp.splice(action.payload, 1)
            return temp

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

    switch(action.type) {

        case C.TOGGLE_EDIT_MODE:
            return !state
        default:
            return state
    }
}

export const editing = (state = false, action) => {

    switch(action.type) {

        case C.EDITING:
            return !state
        default: 
            return state
    }
}

export const saved = (state = true, action) => {

    switch(action.type) {

        case C.SAVED:
            return !state
        default:
            return state
    }
}

export default combineReducers({
    todos,
    errors,
    editMode,
    editing,
    saved
})