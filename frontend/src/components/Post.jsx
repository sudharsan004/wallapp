import { React } from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import './css/Post.css'

function Post(props) {
  let { id, title, description, user_name } = props
  return (

    <div className="post">
      <h1>{title}</h1>
      <p>{description}</p>
      <span className='small'>author: {user_name}</span>
      {
      (window.localStorage.username=== user_name) ? (
      <button >
        <DeleteIcon />
      </button>) : ""
      }

    </div>
  )
}

export default Post
