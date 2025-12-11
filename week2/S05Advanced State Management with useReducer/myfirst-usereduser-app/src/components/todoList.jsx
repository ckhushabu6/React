import { useState } from "react"

export default function TodoListOne(){
     let [tasks , setTasks] = useState([])

    function addTask(text){
        setTasks([...tasks ,{ id : Date.now() , text , compleate : false}]);
    }
       
    return(
        <>
        <button onClick={()=>addTask("newTake")}>Add Task here</button>
        <ul>
            {
                tasks.map((task)=>(
                    <li key={task.id}>{task.text}
                    
                    <button>❌</button>
                    </li>
                ))
            }
        </ul>
        </>
    )

}