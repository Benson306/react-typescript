const InputField = () => {
    return ( <form  className="flex justify-center">
        <input 
            type="text" 
            name="" 
            placeholder="Enter a Task" 
            className=" p-3 w-4/6 rounded"
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