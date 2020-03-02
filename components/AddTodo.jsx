import { useForm } from "react-hook-form";

const AddTodo = props => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        props.addTodo(data);
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
            <button>New To Do</button>
        </form>
    );
};

export default AddTodo;
