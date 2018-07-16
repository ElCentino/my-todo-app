import React from 'react'
import { render } from 'react-dom'
import { Todo } from './components/Todo'
import { addTodo, addError } from './actions'
import storeFactor from './store'
import initialState from './initialState'

const store = storeFactor(initialState);

store.dispatch(addTodo('Get some drinks'))
store.dispatch(addTodo('Get some food'))
store.dispatch(addError('Something went wrong'))

window.React = React

render(
    <Todo />,
    document.getElementById('root-react')
)
