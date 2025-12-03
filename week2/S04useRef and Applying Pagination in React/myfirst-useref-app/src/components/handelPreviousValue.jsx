import { useState, useRef, useEffect } from "react";
function HandelPreviousValue(){
    const [value, setValue] = useState("");
    const prevValue  = useRef("");


    useEffect(()=>{
        prevValue.current = value;
    },[value]);
    return(
        <>
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <p>Current : {value}</p>
        <p>Privous : {prevValue.current}</p>
        </>
    )
}
export default HandelPreviousValue;