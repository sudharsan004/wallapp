import API from  '../backend'


const getPosts = () =>{
   return  fetch(`${API}post/`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(e=>console.log(e))
}

export default getPosts