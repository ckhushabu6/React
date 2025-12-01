import React from 'react';
import Child from './child';
function Mid({msg}){

    return(
        <>
            <h1> i am middle one .../</h1>
            <Child msg = {msg}/>
        </>
    )
    
}
export default Mid;