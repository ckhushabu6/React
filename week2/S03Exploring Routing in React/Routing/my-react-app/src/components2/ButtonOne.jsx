import React from "react";
function ButtonOne({setCount}){
    return (
        <button onClick={()=>setCount(prev => prev + 1) }>increment</button>
    )
}
export default ButtonOne;