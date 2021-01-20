import React from 'react'
import {useState,} from 'react'
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import './css/CreateArea.css'
import submitPost from '../api_calls/sumbit_post'
import getPosts from '../api_calls/get_posts'


function CreateArea() {

  const [post, setPost] = useState({
    title: "",
    description: "",
    user_name:"admin",
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
          <Zoom in={true}>
            <Fab onClick={()=>{
              submitPost(post)
              getPosts()
              }}> {<AddIcon />} </Fab>
          </Zoom>
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
