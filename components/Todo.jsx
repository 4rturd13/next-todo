const Todo = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>To Do</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.length > 0 ? (
                    props.todos.map(type => (
                        <tr key={type.id}>
                            <td>{type.type}</td>
                            <td>{type.todo}</td>
                            <td>
                                <button
                                    className="button muted-button"
                                    onClick={() => {
                                        props.editTodo(type);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="button muted-button"
                                    onClick={() => {
                                        props.deleteTodo(type.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No To Do avalible</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Todo;
