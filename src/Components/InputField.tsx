import { useRef } from "react";

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return ( <form  className="flex justify-center" onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input 
            ref={inputRef}
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