import React from 'react'
import {useState,} from 'react'
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import './css/CreateArea.css'


function CreatePost() {
  const [isClicked, setClicked] = useState(false);
  if (isClicked) {
    return (
      <div>
        <form className="create-post">
          <input
            name="title"
            placeholder="Title"
          />
          <textarea
            name="content"
            placeholder="Write on wall..."
            rows="3"
          />
          <Zoom in={true}>
            <Fab > {<AddIcon />} </Fab>
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

export default CreatePost
