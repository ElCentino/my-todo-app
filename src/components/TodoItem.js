import { Component } from 'react'
import Edit from 'react-icons/lib/fa/edit'
import Save from 'react-icons/lib/md/save'
import Delete from 'react-icons/lib/md/delete-forever'

export class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            saved: true
        }

        this.Edit = this.Edit.bind(this)
        this.Save = this.Save.bind(this)
        this.Remove = this.Remove.bind(this)
    }

    componentDidMount() {

        localStorage.setItem('todos', JSON.stringify(this.props.todos))
    }

    componentWillUnmount() {

        localStorage.setItem('todos', JSON.stringify(this.props.todos))
    }

    Edit() {

        if(!this.props.editMode) {

            this.setState({
                editing: true,
                saved: false
            })

            this.props.toggleEditMode()
        }
    }

    Save() {
        this.setState({
            editing: false,
            saved: true
        })

        this.props.update(this.props.index, this.refs.inputdialog.value)

        this.props.toggleEditMode()
    }

    Remove() {
        this.props.remove(this.props.index)
    }

    render() {

        if(this.state.editing) {

            return (
                <li className="todo-item">
                    <input type="text" className="input-box" ref="inputdialog" defaultValue={this.refs.todotext.innerHTML}/>
                    <span className="button-pane">
                        <Save onClick={this.Save}/>
                    </span>
                </li>
            )

        } else {
            
            return (
                <li className="todo-item">
                    <span ref="todotext">{this.props.todo}</span>
                    <span className="button-pane">
                        <div> <Edit className="edit-pane" onClick={this.Edit}/> <Delete onClick={this.Remove} className="delete-pane"/> </div>
                    </span>
                </li>
            )
        }
    }
}