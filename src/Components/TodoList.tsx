import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
    return ( <div className="md:flex justify-center mx-4 mt-6">
    {
        todos.map(todo => (
            <SingleTodo 
            todo={todo} 
            key={todo.id} 
            todos={todos}
            setTodos={setTodos}
            />
        ))
    }
    </div> );
}
 
export default TodoList;