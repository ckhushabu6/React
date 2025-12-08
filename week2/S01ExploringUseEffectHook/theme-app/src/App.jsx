import './App.css'
import { useState, useEffect } from 'react';

import ThemeBox from './components/themeBoxed'
import ThemApp from './components/themeApp';

function App() {
  
    const [theme, setTheme] = useState("light");
  
  useEffect(()=>{
      const savedTheme = localStorage.getItem("theme");
      if(savedTheme) setTheme(savedTheme);
  },[]);
  useEffect(()=>{
      localStorage.setItem("theme", theme);
  },[theme]);
  
  const appStyle ={
    backgroundColor : theme === "light" ? "#fff" : "#121212",
    color : theme === 'light' ? "#000" : "#fff",
    display : "flex",
    flexDirection : "column",
    alignItems :"center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  }



  const buttonstyle = {
    backgroundColor : theme ==='light' ? "#222" : "#eee",
    color : theme === 'light' ? "#fff" : "#000",
    border : "none",
    padding : "10px 20px",
    borderRadius : "8px",
    transition: "all 0.3s ease",
  }
const toggleTheme = () =>{
    setTheme((prev)=>(prev === "light" ? "dark" : "light"))
}

  return (
    <>
    <ThemApp/>
    </>
    // <div style={appStyle}>
    // <h1>📌Theme Toggle App📌</h1>
    // <button style={buttonstyle} onClick={toggleTheme}>
    //   Switch to {theme === "light" ? "Dark" : "Light"} Mode
    // </button>
    // <ThemeBox theme={theme} text="This is Box 1"/>
    // <ThemeBox theme={theme} text="This is Box 2"/>
    // <ThemeBox theme={theme} text="This is Box 3"/>

    // </div>
  )
}

export default App
