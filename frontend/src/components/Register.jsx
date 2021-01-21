import React,{useState} from 'react'
import './css/Register.css'
import Button from '@material-ui/core/Button';
import register from '../api_calls/register'


function Register() {
    const [userdetails, setUserdetails] = useState({
        username: "",
        email: "",
        password:"",
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setUserdetails((prevVal) => {
          return {
            ...prevVal,
            [name]: value
          };
        });
      }
    return (
        <div>
            <form id="register-form" className="register-form">
                <input
                    id="username"
                    onChange={handleChange}
                    value={userdetails.username}
                    name="username"
                    placeholder="Username"
                />
                <input
                    id='email'
                    onChange={handleChange}
                    value={userdetails.email}
                    name="email"
                    placeholder="email"
                />
                <input
                    id="password"
                    onChange={handleChange}
                    value={userdetails.password}
                    name="password"
                    placeholder="password"
                    type="password"
                />
                {/* <input
                    name="confirm_password"
                    placeholder="confirmpassword"
                    type="password"
                /> */}
                <Button onClick={()=>{
                    // let username = document.querySelector('#username').value
                    // let email = document.querySelector('#email').value
                    // let password = document.querySelector('#password').value
                    // register({"username":username,"email":email,"password":password})
                    register(userdetails)
                    
                }} variant="contained" color="#eee">
                    Register
                </Button>
            </form>
        </div>
    )
}

export default Register
