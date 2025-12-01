import { useState } from 'react'


import './App.css'
import Display from './components2/Display'
import ButtonOne from './components2/Buttonone';
import ButtonTwo from './components2/ButtonTwo';

function App() {

 const [count, setCount] = useState(0);

  return (
    <>
    <h2> Show count here ...! </h2>
    <Display count = {count}/>
    <ButtonOne setCount = {setCount}/>
    <ButtonTwo setCount = {setCount}/>
    </>
  )
}

export default App
