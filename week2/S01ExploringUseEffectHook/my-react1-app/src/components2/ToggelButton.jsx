import React , {useState} from 'react'
function ToggelButton(){
    const [isON , setIsoN] = useState(true);
    function change(){
        setIsoN(!isON);
    }
    return (
        <>
        <button 
        onClick={change}
        style = {
            {
                backgroundColor : isON ? "green" : "red",
                color : "white",
                padding : " 10px 20px",
                border : "none",
                borderRadius : "10px" 
            }
            
        }
            
        >
            {isON ? "ON" : "OFF"}
            
            </button>
        </>
    )
}
export default ToggelButton