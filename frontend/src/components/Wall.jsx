import { React, useState, useEffect } from 'react'
import getPosts from '../api_calls/get_posts'
import CreateArea from './CreateArea'
import Post from './Post'


function Wall() {
    const [posts, setposts] = useState([])
    const [addNewNote, setaddNewNote] = useState(false)

    const loadAllPosts = () => {
        getPosts()
            .then(data => {
                setposts(data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadAllPosts()
    }
    , [addNewNote])
    return (
        <div>
            
            <CreateArea 
            onAdd = {setaddNewNote}
            />
            {posts.map(
                (post, index) => {
                    return (
                        <>
                            < Post
                                onAdd = {setaddNewNote}
                                key={index}
                                title={post.title}
                                description={post.description}
                                user_name ={post.user_name}
                                user={post.user}
                                date ={post.created_at}
                                k={post.id}
                            />
                        </>
                    )
                }
            )}

        </div>
    )
}

export default Wall


