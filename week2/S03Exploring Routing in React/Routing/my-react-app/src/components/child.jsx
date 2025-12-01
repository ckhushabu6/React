import React from "react";
function Child({msg}){
    return(
        <>
        <h1> i am child component..</h1>
        <h4>This msg from main component...{msg}</h4>
        </>
    )
}
export default Child;
