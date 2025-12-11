import { useState } from "react";
function TodoList(){
     let [todos , setTodos] = useState([]);
     function addTodo(text){
        setTodos([...todos, {id : Date.now(), text, compleated: false}]);
     }

     function toggleTodo(id){
        setTodos(todos.map(todo=>todo.id == id ? {...todo , compleated : !todo.compleated} : todo))
     }


     function deleteTodo(id){
        setTodos(todos.filter((todo)=>todo.id != id));
     }

    return(
        <>
        <button onClick={()=> addTodo("NewTask")}>Add Task </button>
       <ul>
        {todos.map((todo)=>(
            <li key = {todo.id}>
                {/* <span>{todo.text}</span> */}
                <span style={{textDecoration : todo.compleated ? "line-through" : 'none' , cursor:"pointer"}} onClick={()=> toggleTodo(todo.id)}>{todo.text}</span>
                <button onClick={()=>deleteTodo(todo.id)}>❌</button>
            </li>
        ))}
       </ul>
        </>
    )
}
export default TodoList;