import { useEffect, useReducer } from "react";
const initState = {
    loading : false,
    err : false,
    data : []
}
const getData = async (url)=>{
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch {
        throw new Error(`Something went wrong whils fetching data`);
    }
};
function reducer(state, action){
    switch(action.type){
        case "FETCH_LOADING" : 
            return{loading: true, err:false, data:[]};
        case "FETCH_SUCCESS":
            return{loading : false, err:false , data : action.payload};
        case "FETCH_ERROR":
            return{loading:false , err:true , data:[]};
        default:
            throw new Error(`Action type is invalid`);

    }
}


function FetchApi(){
    const [state, dispatch] = useReducer(reducer, initState);

    const fetchAndUpdata=(url)=>{
        dispatch(({type : "FETCH_LOADING"}));
         getData(url)
        .then((res)=> dispatch({type: "FETCH_SUCCESS", payload:res}))
        .catch(()=>dispatch({type : "FETCH_ERROR"}));
    };
useEffect(()=>{
    fetchAndUpdata()
},[]);

const {loading , err, data} = state;


    return loading ? (
       <h1>Loading...</h1>
    ) : err ? (
        <h1>Something went wrong</h1>
    ) :(
        <div className="App">
            {data.map((post)=>(
                <p key={post.id}>
                    {post.id} - {post.title}
                </p>
            ))}
        </div>
    );
}
export default FetchApi;