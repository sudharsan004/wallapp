import API from  '../backend'


const getPosts =()=>{
   return  fetch(`${API}post/`,{method:"GET"})
    .then(response=>response.json())
    .then(r=>r)
    .catch(e=>console.log(e))
}

export default getPosts