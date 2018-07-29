import C from '../constants'
import uuid from 'uuid/v4'

export const addTodo = note => {

    return {
        type: C.ADD_TODO,
        payload: {
            id: uuid(),
            note
        }
    }
}

export const removeTodo = index => {

    return {
        type: C.REMOVE_TODO,
        payload: index
    }
}

export const editTodo = (index, data) => {

    return {
        type: C.EDIT_TODO,
        payload: { index, data }
    }
}

export const clearTodos = () => {

    return {
        type: C.CLEAR_TODO,
        payload: []
    }
}

export const toggleEditMode = mode => (dispatch, getState) => {

    dispatch({
        type: C.TOGGLE_EDIT_MODE
    })
}

export const addError = error => {

    return {
        type: C.ADD_ERRORS,
        payload: {
            message: error
        }
    }
}

export const removeError = index => {

    return {
        type: C.REMOVE_ERROS,
        payload: index
    }
}