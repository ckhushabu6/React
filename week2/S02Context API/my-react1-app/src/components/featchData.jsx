import React from "react";
import { useState, useEffect } from "react";

function FeatchData(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
             try{
                let response = await fetch('http://jsonplaceholder.typicode.com/posts');
                console.log(response);
                if(!response.ok){
                    throw new Error('fetching is fail');
                }
                
                let result = await response.json();
                
                console.log(result);
                setData(result);
             }catch(error){
                console.log("error : " , error.message)
                setError(error.message);

             }finally{
                setLoading(false)
             }
             
        }
        
       fetchData()

    },[]);
    if(loading){
            return(
                <h1>Loading...</h1>
            )
        }
    if(error){
        return(<h1>Featching is fail...</h1>)
    }

    return(
        <>  
        <h1> Postes </h1>
        {
            data.slice(0, 5).map((post)=>(
                <p key={post.id}>{post.id}.{post.title}</p>
            ))
        }
        </>
    )
} 
export default FeatchData