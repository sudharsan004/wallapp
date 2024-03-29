import React from 'react'
import { useState, } from 'react'
import AddIcon from "@material-ui/icons/Add";
import LockIcon from "@material-ui/icons/Lock";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import './css/CreateArea.css'
import submitPost from '../api_calls/submit_post'


function CreateArea(props) {

  const [post, setPost] = useState({
    title: "",
    description: "",
    user_name: localStorage.username,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPost((prevPost) => {
      return {
        ...prevPost,
        [name]: value
      };
    });
  }

  const [isClicked, setClicked] = useState(false);
  if (isClicked) {
    return (
      <div>
        <form className="create-post">
          <input
            onChange={handleChange}
            value={post.title}
            name="title"
            placeholder="Title"
          />
          <textarea
            onChange={handleChange}
            value={post.description}
            name="description"
            placeholder="Write on wall..."
            rows="3"
          />
          { localStorage.username ?
          <Zoom in={true}>
            <Fab onClick={(event) => {
              console.log(event);
              // submit the post to the backend
              if (post.title && post.description) {
                submitPost(post)
                setPost({
                  title: "",
                  description: "",
                  user_name: localStorage.username,

                })
              }
              else {
                alert('Fill Both Fields !')
              }
              // change the newPost state variable to true
              props.onAdd(preValue => !preValue)
              // clear the CreateArea              
            }}> 
            
            {<AddIcon />} 
          </Fab>
          </Zoom>
          : <>login Required To post
          <Zoom in={true}>
            <Fab >
            <LockIcon/>
          </Fab>
          </Zoom>
          </>
  }
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form className="create-post">
          <textarea
            name="content"
            onClick={() => {
              setClicked(true);
            }}
            // onChange={handleChange}
            // value={post.content}
            placeholder="Write on Wall..."
            rows="1"
          />
        </form>
      </div>
    );
  }
}

export default CreateArea
