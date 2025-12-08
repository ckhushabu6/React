import React from 'react'


function ThemeBox({theme, text}) {
    const boXstyle = {
        backgroundColor: theme === 'light' ? "#f9f9f9" : "#333",
        color : theme === "light" ? "#222" : "#f9f9f9",
        border : theme === "light" ? "2px solid #ddd" : "2px solid #666",
        padding :"20px",
        borderRadius :'10px',
        margin : '10px 0',
        textAlign : "center",
        transition: "all 5s ease",

    }
  return (
    <div style={boXstyle}>{text}</div>
    
  )
}

export default ThemeBox