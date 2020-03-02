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
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {edit ? (
                        <>
                            <h2>Edit Todo</h2>
                            <EditTodo currentTodo={currentTodo} updateTodo={updateTodo} />
                        </>
                    ) : (
                        <>
                            <h2>Add TODO</h2>
                            <AddTodo addTodo={addTodo} />
                        </>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View todos</h2>
                    <Todo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
                </div>
            </div>
        </div>
    );
};

export default Home;
