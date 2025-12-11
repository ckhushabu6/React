// learning
//always return object in switch case



import { useEffect, useReducer } from "react";
function Counter(){
    function reducer(state , action){
        switch(action.type){
            case 'increment' : 
            return {count : state.count + 1};

            case 'decrement' :
                return {count : state.count -1};
                
            default :
            return state;
        }
    }
                                      //function , intiallalStage
     const [state, dispatch] = useReducer(reducer, {count : 0});
    // useEffect(()=>{
    //     reducer();
    // },[]);
    return(
        <>
        <h1>Counter use useReduser...😎</h1>
        <h3>state: {state.count}</h3>
                        {/* dispatch action in object */}
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </>
    )
}
export default Counter;