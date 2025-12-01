import React from "react";
function Buttontwo({count, setCount}){
    return (
        <>
        <button onClick={()=>setCount((precount)=>precount -1 ) } disabled={count == 0}>Decrese</button>
        </>
    )
}
export default Buttontwo;