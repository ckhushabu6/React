import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import {increment , decrement} from './actions'
function Counter(){
  const count = useSelector((state)=> state.count);
  const dispatch = useDispatch()
  return(
    <>                                                                                                              
          <h2>Count : {count}</h2>
         
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>

  )
}

export default Counter