
export const ClearTodos = ({ clear, todos }) => (

    <div className="todo-item"  style={{
        textAlign: 'center'
    }}>
        <button className="btn-clear" style={{
            padding: 10,
            width: 100 + '%',
            border: 'none',
            background: 'var(--bluecolor)',
            fontSize: 20

        }} onClick={() => clear()} disabled={todos.length > 0 ? false : true}>
            Clear Todos
        </button>
    </div>
)