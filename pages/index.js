import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";
import EditTodo from "../components/EditTodo";

const Home = () => {
    const todoData = [
        { id: 1, type: "Home", todo: "Rapair door" },
        { id: 2, type: "Work", todo: "Send slides" },
        { id: 3, type: "Market", todo: "Buy avocados" }
    ];

    const [todos, setTodos] = useState(todoData);

    const addTodo = todo => {
        todo.id = uuidv4();

        setTodos([...todos, todo]);
    };

    const deleteTodo = id => {
        const filterTodo = todos.filter(todo => todo.id !== id);

        setTodos(filterTodo);
    };

    const [edit, setEdit] = useState(false);

    const [currentTodo, setCurrentTodo] = useState({
        id: null,
        type: "",
        todo: ""
    });

    const editTodo = todo => {
        setEdit(true);

        setCurrentTodo({
            id: todo.id,
            type: todo.type,
            todo: todo.todo
        });
    };

    const updateTodo = (id, updateTodo) => {
        setEdit(false);
        setTodos(todos.map(todo => (todo.id === id ? updateTodo : todo)));
    };

    return (
        <div className="container">
            <h1>To Do App</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {edit ? (
                        <>
                            <h2>Edit To Do</h2>
                            <EditTodo currentTodo={currentTodo} updateTodo={updateTodo} />
                        </>
                    ) : (
                        <>
                            <h2>Add To Do</h2>
                            <AddTodo addTodo={addTodo} />
                        </>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View To Do's</h2>
                    <Todo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
                </div>
            </div>
            <style global jsx>{`
                body {
                    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
                        "Arial", sans-serif;
                    padding: 20px 20px 60px;
                    max-width: 680px;
                    margin: 0 auto;
                    background-color: #ebebeb;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .flex-row {
                }
            `}</style>
        </div>
    );
};

export default Home;
