import React, { useState, useEffect } from 'react'


function ThemApp() {
    const [theme, setTheme] = useState("light");

useEffect(()=>{
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme) setTheme(savedTheme);
},[]);
useEffect(()=>{
    localStorage.setItem("theme", theme);
},[theme]);

function toggelTheme(){
    setTheme(()=> theme === 'light' ? 'dark' : 'light');
}






  return (
    <div >
       
        <h2>ThemApp</h2>
        <button onClick={toggelTheme} style={{ backgroundColor: theme === "light" ? "white" : "black" , color: theme === "light" ? "black" : "white"}}>Click me...</button>
        
    </div>
  )
}

export default ThemApp