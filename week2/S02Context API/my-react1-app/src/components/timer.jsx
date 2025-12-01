import React from "react"
import { useState, useEffect } from "react";
function Timer(){
    const [second, setSecond] = useState(0);
    useEffect(()=>{
        console.log("Timer startes")
        const timer = setInterval(()=>{
            setSecond(prev => prev+1);
        },1000)
        console.log(`Second ${second}`);
    },[])
    return(
        <>
        <h1>Timer : {second}</h1>
        </>
    )
}
export default Timer;