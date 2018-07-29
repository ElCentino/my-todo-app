import { Todo } from '../components/Todo'
import { connect } from 'react-redux'
import { addTodo, toggleEditMode, removeTodo, clearTodos, editTodo } from '../actions'

const mapStateToProps = state => {

    return {
        todos: state.todos,
        editMode: state.editMode,
        errors: state.errors
    }
}

const mapDispatchToProps = dispatch => {

    return {

        onAddTodo() {

            return dispatch(addTodo("New Todo"))
        },

        onToggleEditMode() {

            return dispatch(toggleEditMode())
        },

        onRemoveTodo(index) {

            return dispatch(removeTodo(index))
        },

        onClearTodos() {

            return dispatch(clearTodos())
        },

        onEditTodo(index, todo) {

            return dispatch(editTodo(index, todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
