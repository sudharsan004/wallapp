import {React} from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import './Post.css'

function Post(props) {

    return (
        
      <div className="post">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button >
        <DeleteIcon />
      </button>
    </div>
    )
}

export default Post
