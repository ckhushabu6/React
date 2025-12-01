import React from 'react'
function PostItem({id, title}){
    return(
        <div className='post-item'>
            <h3>{id}. {title}</h3>
        </div>
    )
}
export default PostItem