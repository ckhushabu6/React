import { createContext, useState } from "react";
const DataContext = createContext();
//CREATE CONTEXT
function DataProvider({children}){
    const [state, setState] = useState({
        loading : "false",
        data : null,
        error :null
    })
}
//FEATCH DATA
async function featchData(){
    setState({...state, loading : "true"})
    try{
        let responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        let result = await responce.json();
        setState({...state, loading:false , data:result});

    }catch(error){
        setSate({...state, loading : "false", data : null , error:error.message})
    }
}

//create Provider
return (
    <DataContext.Provider>
        {children}
    </DataContext.Provider>
)