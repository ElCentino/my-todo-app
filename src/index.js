import React from 'react'
import { render } from 'react-dom'
import Todo from './container/Todo'
import { Provider } from 'react-redux'
import storeFactory from './store'

window.React = React

const store = storeFactory();

store.subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(store.getState.todos))
});

render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('root-react')
)
