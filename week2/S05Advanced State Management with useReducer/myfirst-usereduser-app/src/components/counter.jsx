import { useReducer } from "react";
function reducer(state, action){
    switch(action.type){
        case 'increment':
            return{count : state.count + 1} ;
        case 'decrement':
            return{count : state.count - 1};

        default :
            return state;
;    }
}

function Counter(){
    const [state, disptch] = useReducer(reducer, intialvalue = 0 );
return(
    <>
    <h1>Counter Using useReducer</h1>
    <p>{state.count}</p>
    <button onClick={()=> {type:"increment"}}>Increase Count </button>
    </>
)

}
export default Counter;