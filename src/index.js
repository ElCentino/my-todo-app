import React from 'react'
import { render } from 'react-dom'
import { Todo } from './components/Todo'

window.React = React

render(
    <Todo />,
    document.getElementById('root-react')
)
