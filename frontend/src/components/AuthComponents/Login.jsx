import React,{useState} from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import login from '../../api_calls/login'
import Header from '../Header';


function Login() {
    const [userdetails, setUserdetails] = useState({
        username: "",
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
          <Header/>
            <form id="login-form" className="login-form">
                <input
                    id="username"
                    onChange={handleChange}
                    value={userdetails.username}
                    name="username"
                    placeholder="Username"
                />
                <input
                    id="password"
                    onChange={handleChange}
                    value={userdetails.password}
                    name="password"
                    placeholder="password"
                    type="password"
                />
                
                <Button type="submit" onClick={()=>{
                  if (userdetails.password && userdetails.username){
                  let data=login(userdetails)
                  
                    setUserdetails({
                        username: "",
                        password:"",
                      })
                      
                      
                     
                    } else{
                        alert("Fill both Fields")
                      }
                }} variant="contained" color="#eee">
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login
