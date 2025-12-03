import { useEffect, useState } from "react"

function PagenationDemo(){
let[page, setPage] = useState(1);
let[item, setItem] = useState([]);
    async function fetchData(){
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
        let data = await res.json();
        setItem(data);
    }
    useEffect(()=>{
         fetchData();
    },[page]);
    
    return(
        <>
        <h3>When API support pagenation...</h3>
        <h2 style={{color:"red"}}> Page Number : {page}</h2>
        <ul>
             {
            item.map((post)=>(
            <p key={post.id}> 
             id : {post.id}
             <span style={{color:"blue", fontSize:"20px"}}>
                Title : {post.title}
                </span></p>
        ))
        }
        </ul>
       
        <button onClick={()=>setPage((page)=>page + 1)} disabled={page == 10}>Next</button>
        <button onClick={()=>setPage((page)=>page - 1)} disabled={page == 1}>Privous</button>
        </>
    )
   
}
export default PagenationDemo