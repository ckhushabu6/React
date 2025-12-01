
import Home from "./components/Home";
import About from "./components/About";
import Contect from "./components/Contect";
import LoginPage from "./components/LoginPage";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Unknow from "./components/Unknow";

function App() {

  return (
    <>
  
   <Navbar/>
   <Routes>
          
          <Route path='/' element={<LoginPage/>}/>

          <Route path='/home' element={<Home/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/contect' element={<Contect/>}/>

          <Route  path='*'  element={<Unknow/>}/> 

   </Routes>
   
   
  
    </>
  )
}

export default App
