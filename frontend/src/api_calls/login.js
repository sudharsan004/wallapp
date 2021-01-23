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
      .catch(e=>e)
      .then(r=>{
        console.log(r)
        if (r.token){
        localStorage.clear()
        localStorage.setItem('user',r.user)
        localStorage.setItem('username',r.user.username)
        localStorage.setItem('token',r.token)}
        if (localStorage.username === username) {
          alert('Login Success')
       }else{
         alert('Wrong UserName/ Password')
       }
      })
      
      
}

export default login