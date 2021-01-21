import API from  '../backend'

const login= (props) =>{
    let {username,password}=props
    fetch(`${API}user/login/`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username":username,
            "password":password,
        })
      })
      .then(response=>response.json())
      .then(r=>console.log(r))
}

export default login