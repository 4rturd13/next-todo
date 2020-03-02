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

            <label>Todo</label>
            <input
                type="text"
                name="todo"
                placeholder="Buy avocado"
                ref={register({
                    required: { value: true, message: "Required field" }
                })}
            />
            <>{errors?.todo?.message}</>
            <button>Edit Todo</button>
        </form>
    );
};

export default EditTodo;
