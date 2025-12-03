//set time 
import{useRef, useState} from 'react'
function TimerApp(){
let [time, setTime] = useState(0);
let timeRef = useRef
   function start(){
    if(timeRef.current) return;
    timeRef.current = setInterval(()=>{
        setTime((t)=>t +1);
    },1000)

   }

   function stop(){
    clearInterval(timeRef.current);
    timeRef.current = null;

   }

   function reset(){
    stop();
    setTime(0);
   }
    return(
        <>
        <h2>{time}</h2>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </>
       
    )
}
export default TimerApp;