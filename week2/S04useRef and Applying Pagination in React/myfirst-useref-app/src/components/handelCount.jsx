import { useRef, useEffect, useState } from "react";

function HandelCount(){

    const [count , setCount]= useState(0);
    const [prevalue, setPrevalue] = useState(0);
    const renderCount = useRef(1);
    const prevCount = useRef(0);
    useEffect(()=>{
        renderCount.current +=1 ;
        setPrevalue(count);
        prevCount.current = count;
        console.log("prevCount.current : " , count);
        
    })
    return(
        <>
        <div>
            <h1>Count : {count}</h1>
            <h2>previous value : {prevCount.current}</h2>
            <h1>{prevalue}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Increse Number</button>
            <p>Value of useRef apper{renderCount.current}time</p>
        </div>
        </>
    )
}
export default HandelCount;