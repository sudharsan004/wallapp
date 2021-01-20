import {React, useState, useEffect} from 'react'
import getPosts from '../api_calls/get_posts'
import Post from './Post'


function Wall() {
    const [posts, setposts] = useState([])

    const loadAllPosts = () => {
        getPosts()
        .then(data=>{
            setposts(data)
        })
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        loadAllPosts()
        }
    , [])
    return (
        <div>
            {posts.map(
                (post,index)=>{
                    return(
                    < Post 
                    key = {index}
                    title = {post.title}
                    description ={post.description}
                    user = {post.user}
                    />)
                }
            )}
            
        </div>
    )
}

export default Wall
