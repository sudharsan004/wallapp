import API from  '../backend'

const submitPost= (props) =>{
    let {title,description,user_name}=props
    fetch(`${API}post/`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "title":title,
          "description":description,
          "user_name":user_name,
        })
      })
      .then(response=>response.json())
      .then(r=>console.log(r))
}

export default submitPost