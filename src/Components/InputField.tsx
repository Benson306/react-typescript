interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({todo, setTodo}: Props) => {
    return ( <form  className="flex justify-center">
        <input 
            type="text" 
            name="" 
            placeholder="Enter a Task" 
            className=" p-3 w-4/6 rounded"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
            id="" 
        />

        <input 
            type="submit" 
            className="bg-red-900 p-3 text-white rounded" 
            value="Add Task" 
        />
    </form> );
}
 
export default InputField;