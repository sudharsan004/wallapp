import {React,useState, useEffect} from 'react'

import getPosts from '../api_calls/get_posts'


function Posts() {
    const posts = getPosts()
    return (
        <div>
            {console.log(posts)}
        {/* {posts.map((post,index)=>{
            return(
                <h1>{post.title}</h1>
            )
        })} */}
        </div>
    )
}

export default Posts
