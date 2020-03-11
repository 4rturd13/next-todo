import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";
import EditTodo from "../components/EditTodo";

const Home = () => {
    const todoData = [];

    const [todos, setTodos] = useState(todoData);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("data", JSON.stringify(todos));
        }
    });

    useEffect(() => {
        let savedLocal = localStorage.getItem("data");
        setTodos(JSON.parse(savedLocal));
    }, []);

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
                            <EditTodo
                                currentTodo={currentTodo}
                                updateTodo={updateTodo}
                            />
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
                    <Todo
                        todos={todos}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                </div>
            </div>
            <style global jsx>{`
                body {
                    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
                        "Helvetica", "Arial", sans-serif;
                    padding: 20px 20px 60px;
                    width: 100%;
                    margin: 0 auto;
                    line-height: 1.15;
                    background-color: #ebebeb;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </div>
    );
};

export default Home;
