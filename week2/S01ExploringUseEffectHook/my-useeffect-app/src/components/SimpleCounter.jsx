
import {useState} from 'react'
import {useEffect} from 'react'
function SimpleCounter(){
  const [count , setCount] = useState(0);
  function handelcount(){
    setCount((count)=> count +1 );
  }
  


  return (
    <>
    <h1>Creating counter App</h1>
    <h5>Count : {count}</h5> 
     <button onClick={handelcount}
    >Simple click me...</button>


    </>
  )
}
export default SimpleCounter
