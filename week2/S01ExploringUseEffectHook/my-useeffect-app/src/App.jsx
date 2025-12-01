import React from 'react'
import {useState, useEffect} from "react"
import PostItem from "./components1/PostItem";
import './App.css'

const getData = async (url)=>{
  try{
      let res = await fetch(url);
      let data = await res.json();
      return data;

  }
  catch(error){
    throw new Error(error.message);
  }
};


function App(){
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err , setError] = useState(false);

  const featchAndUpdateData = async ()=>{
    setLoading(true);
    try{
      let data = await getData(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
      setPosts(data);
      setLoading(false);

    }catch(err){
      setError(true);
      setLoading(false);

    }
  };

  useEffect(()=>{
    featchAndUpdateData();
  },[]);
  if(loading){
    return <h1>Loading...</h1>
  }
  if(err){
    return <h1>Somethig went wrong.. Please refresh</h1>
  }


  return (
    <>
      <h1>Get post as soon as component renders</h1>
      {posts.map((post) =>(
        <PostItem key={post.id} id={post.id} title={post.title}/>
      ))}
    </>
  )
}
export default App
