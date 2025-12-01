
import {useState} from 'react'

import {useEffect} from 'react'
function UseEffectCounter(){
  const [count , setCount] = useState(0);
     useEffect(()=>{
    document.title = `you clicked ${count} times`;
  })



  return (
    <>

    <p>You clicked {count} times</p>
    <button onClick={()=> setCount(count +1)}>Click me useeffect</button>
    </>
  )
}
export default UseEffectCounter
