import { Component } from 'react'
import { TopBar } from './TopBar'
import { TodoItem } from './TodoItem'
import { ClearTodos } from './ClearTodos'

export class Todo extends Component {

    render() {

        return (
            <div>
                <TopBar listCount={this.props.todos.length} addNote={this.props.onAddTodo}/>
                <ul>
                    {this.props.todos.map((todo, count) => (
                        <TodoItem todos={this.props.todos} key={todo.id} index={count} todo={todo.note} editMode={this.props.editMode} remove={this.props.onRemoveTodo} update={this.props.onEditTodo} toggleEditMode={this.props.onToggleEditMode}/>
                    ))}
                </ul>
                <ClearTodos clear={this.props.onClearTodos} todos={this.props.todos}/>
            </div>
        )
    }
}