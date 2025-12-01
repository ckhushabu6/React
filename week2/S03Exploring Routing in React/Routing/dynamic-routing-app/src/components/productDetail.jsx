import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';


function ProductDetail(){
    const {id} = useParams();
    const [product, setProduct]=useState([]);

    async function fetchData(){
        let res = await fetch(`https://fakestoreapi.com/products/${id}`);
        let data = await res.json();
        console.log(data);
        setProduct(data);
    }
    useEffect(()=>{
    fetchData();
    },[])

    if(!product) <h1>Lodding...</h1>
    return(
        <>
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} width={"200px"}></img>
            <p>{product.description}</p>
            {/* <h3>{product.rating}</h3> */}
           
        </div>
        
        </>
    )
}
export default ProductDetail;