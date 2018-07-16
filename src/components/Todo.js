import { Component } from 'react'
import { TopBar } from './TopBar'
import { TodoItem } from './TodoItem'
import uuid from 'uuid/v4'
import { ClearTodos } from './ClearTodos';

export class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            editMode: false, 
            errors: []
        }
    }

    componentWillMount() {

        if(localStorage['todos']) {
            this.setState({
                todos: JSON.parse(localStorage.getItem('todos') || [])
            })
        }
    }

    toggleEditMode() {

       this.setState({ editMode: !this.state.editMode })
    }

    update(i, note) {

        let arr = this.state.todos
        arr[i].note = note
        this.setState({ todos: arr})
    }

    addNote() {

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

        let arr = this.state.todos
        arr.splice(i, 1)

        this.setState({ todos : arr })
    }

    clearTodos() {
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