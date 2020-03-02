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
                            <td className="item">{type.type}</td>
                            <td className="item">{type.todo}</td>
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
            <style jsx>{`
                .item {
                    padding: 0.5rem 1rem;
                    border-radius: 1rem;
                    background-color: white;
                }

                button {
                    margin: 0.1rem 0.1rem;
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 0.2rem;
                    margin-left: 0.5rem;
                    background-color: gray;
                    color: #fff;
                    font-weight: bold;
                    font-size: 0.8rem;
                }
            `}</style>
        </table>
    );
};

export default Todo;
