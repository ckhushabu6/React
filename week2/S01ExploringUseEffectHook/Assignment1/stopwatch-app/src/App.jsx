import { useEffect, useState } from 'react';
import './App.css';
import PostItem from './components/postId';
import StopWatch from './components/StopWatch';

function App() {

  return (
    <>
    {/* <h1>Data you will see after render component on web page...!</h1>
    {posts.map((post)=>(
      <PostItem key={post.id} id={post.id} title={post.title}/>
    ))} */}
    <StopWatch/>

    </>
  )
}

export default App
