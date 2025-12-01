import { useState } from "react";
import {Link} from 'react-router-dom'  

   
    

function Products(){
    let [data, setData] = useState([]);

        const fetchProduct = async()=>{
            try{
                let res = await fetch(`https://fakestoreapi.com/products`);
                let products = await res.json();
                setData(products);
                console.log(products);
            }
            catch(e){
                console.log("Data not found...")
            }
        
    }
    return(
        <>
        <button onClick={fetchProduct}>GetProducts</button>
        {data.length > 0 && data.map((item)=>(
            <div key={item.id}>
                <img src={item.image} width={"150px"} alt=""></img><br></br>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <Link to={`/product/${item.id}`}>View Details</Link>
            
            </div>
        ))
        }
        </>
    )
}
export default Products
// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));