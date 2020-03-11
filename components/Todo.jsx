import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const editIcon = <FontAwesomeIcon icon={faEdit} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

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
                                    className="button "
                                    onClick={() => {
                                        props.editTodo(type);
                                    }}
                                >
                                    {editIcon}
                                </button>
                                <button
                                    className="button delete"
                                    onClick={() => {
                                        props.deleteTodo(type.id);
                                    }}
                                >
                                    {deleteIcon}
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
                    background-color: #fff;
                }
                .delete {
                    background-color: #ff5a5f;
                }

                button {
                    margin: 0.1rem 0.1rem;
                    padding: 0.7rem auto;
                    border: none;
                    border-radius: 0.2rem;
                    margin-left: 0.5rem;
                    background-color: gray;
                    color: #fff;
                    font-size: 1rem;
                }
            `}</style>
        </table>
    );
};

export default Todo;
