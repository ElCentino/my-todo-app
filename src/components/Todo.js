import { Component } from 'react'
import { TopBar } from './TopBar'
import { TodoItem } from './TodoItem'
import { ClearTodos } from './ClearTodos'
import uuid from 'uuid/v4'
import { addTodo, addError } from '../actions'
import storeFactory from '../store'
import initialState from '../initialState'
import { editTodo, removeTodo, clearTodos } from '../actions';

export class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            editMode: false, 
            errors: []
        }

        this.store = storeFactory(initialState)
    }

    componentWillMount() {

        if(localStorage['todos']) {
            this.setState({
                todos: JSON.parse(localStorage.getItem('todos') || [])
            })
        }
    }

    toggleEditMode() {

       this.store.dispactch(this.toggleEditMode())
       this.setState({ editMode: !this.state.editMode })
    }

    update(i, note) {

        this.store.dispatch(editTodo(note))

        let arr = this.state.todos
        arr[i].note = note
        this.setState({ todos: arr})
    }

    addNote() {

        this.store.dispatch(addTodo('New Todo ' + (this.state.todos.length + 1)))

        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    note: 'New Todo ' + (this.state.todos.length + 1)
                }
            ]
        })

        
    }

    remove(i) {

        this.store.dispatch(removeTodo(i))

        let arr = this.state.todos
        arr.splice(i, 1)

        this.setState({ todos : arr })
    }

    clearTodos() {
        this.store.dispatch(clearTodos([]))
        localStorage.setItem('todos', JSON.stringify([]))
        this.setState({ todos: [] })
    }

    render() {

        return (
            <div>
                <TopBar listCount={this.state.todos.length} addNote={this.addNote.bind(this)}/>
                <ul>
                    {this.state.todos.map((todo, count) => (
                        <TodoItem todos={this.state.todos} key={todo.id} index={count} todo={todo.note} editMode={this.state.editMode} remove={this.remove.bind(this)} update={this.update.bind(this)} toggleEditMode={this.toggleEditMode.bind(this)}/>
                    ))}
                </ul>
                <ClearTodos clear={this.clearTodos.bind(this)} todos={this.state.todos}/>
            </div>
        )
    }
}