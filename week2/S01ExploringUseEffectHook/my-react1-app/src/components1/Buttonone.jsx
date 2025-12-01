import React from "react";
function Buttonone({ setCount}){
    return(
        <>
            <button onClick={()=>setCount(precount => precount + 1)}>Increace</button>
        </>
    )
}
export default Buttonone;