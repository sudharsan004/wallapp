import { React } from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import './css/Post.css'
import API from '../backend'
function Post(props) {
  let { k, title, description, user_name, date, onAdd} = props
  return (

    <div className="post">
      <h1>{title}</h1>
      <p>{description}</p>
      <span className='small'>~ {user_name} on:{date.slice(0,10)}</span>
      {
      (window.localStorage.username=== user_name) ? (
      <button >
        <DeleteIcon onClick={()=>{
          fetch(`${API}post/delete/${k}/`)
          onAdd(p=>!p)
        }}/>
      </button>) : ""
      }

    </div>
  )
}

export default Post
