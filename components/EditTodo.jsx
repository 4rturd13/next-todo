import { useForm } from "react-hook-form";

const EditTodo = props => {
    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentTodo
    });

    setValue("type", props.currentTodo.type);
    setValue("todo", props.currentTodo.todo);

    const onSubmit = (data, e) => {
        data.id = props.currentTodo.id;

        props.updateTodo(props.currentTodo.id, data);

        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Type</label>
            <input
                type="text"
                name="type"
                placeholder="Home, Work..."
                ref={register({
                    required: { value: true, message: "Required field" }
                })}
            />
            <>{errors?.type?.message}</>

            <label>To Do</label>
            <input
                type="text"
                name="todo"
                placeholder="Buy avocado"
                ref={register({
                    required: { value: true, message: "Required field" }
                })}
            />
            <>{errors?.todo?.message}</>
            <button>Edit To Do</button>
            <style jsx>{`
                form {
                    display: flex;
                    flex-direction: column;
                }
                label {
                    padding: 1rem 0;
                }
                input {
                    padding: 0.3rem 0.5rem;
                    border: none;
                    border-radius: 0.2rem;
                    font-size: 1rem;
                }
                button {
                    margin: 1rem 0.5rem;
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 0.2rem;
                    margin-left: 0.5rem;
                    background-color: #69c776;
                    color: #fff;
                    font-weight: bold;
                    font-size: 1rem;
                }
            `}</style>
        </form>
    );
};

export default EditTodo;
