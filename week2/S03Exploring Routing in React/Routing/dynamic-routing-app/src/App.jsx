import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Unknow from './components/unknow'
import Navbar from './components/navbar'
import ProductDetail from './components/productDetail'
function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='*' element={<Unknow/>}/>
      
    </Routes>
    
     
    </>
  )
}

export default App
