import { useState } from 'react'
import Buttonone from './components1/Buttonone'
import Buttontwo from './components1/Buttontwo'
import Display from './components1/Display'
import './App.css'
import ToggelButton from './components2/ToggelButton'

function App() {
  const [count , setCount]= useState(0);
  const [changeColor, setColor] = useState(true);
 

  return (
    <>
    <h2>Count-App</h2>
     <Display count = {count}/>
     <Buttonone setCount = {setCount}/>
     <Buttontwo count = {count} setCount = {setCount}/>
     <ToggelButton color = {changeColor} setColor={setColor}/>


    </>
  )
}

export default App
