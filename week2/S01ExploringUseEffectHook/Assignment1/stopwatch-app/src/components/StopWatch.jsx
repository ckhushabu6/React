import { useState, useEffect } from "react";
function StopWatch(){
    const [seconds, setSeconds] = useState(0);
    const[isRunning , setIsRunning] = useState(false);
    const[targetTime, setTargetTime]= useState(10);

    useEffect(()=>{
        let timer;
        if(isRunning){
            timer = setInterval(()=>{
                setSeconds(prev => prev + 1);
            }, 1000);
        }


        return ()=> clearInterval(timer);
    }, [isRunning]);

useEffect(()=>{
    if(seconds === targetTime){
    console.log("⌚Targetb reached!")
    setIsRunning(false);
    setSeconds(0);
    }
},[seconds, targetTime]);

const handleStart = ()=> setIsRunning(true);
const handleStop = ()=> setIsRunning(false);
const handleReset = ()=> {
    setIsRunning(false);
    setSeconds(0);
}



    return (
        <>
        <h1>⏱ Stop Watch : {seconds} sec</h1>
        <input 
        type="number"
        value={targetTime}
        onChange={e=>setTargetTime(Number(e.target.value))}
        placeholder="Set Target Time"/>
        <br></br><br></br>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default StopWatch;