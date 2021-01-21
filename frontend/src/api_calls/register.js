import API from  '../backend'

const register= (props) =>{
    let {username,email,password}=props
    fetch(`${API}user/register/`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username":username,
          "email":email,
          "password":password,
        })
      })
      .then(response=>response.json())
      .then(r=>console.log(r))
}

export default register