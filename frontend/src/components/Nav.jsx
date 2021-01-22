import React from 'react'
import {Link} from 'react-router-dom'
import API from  '../backend'
function Nav() {
    if (localStorage.username) {
        return (
            <div>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/">{localStorage.username}</Link></li>
                <li className="nav-link"><a href="" onClick={()=>{
                    fetch(`${API}user/logout`)
                    localStorage.clear()
                }}>Logout</a></li>
            </div>
        )
    }
    else {
        return (
            <div>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="login">Login</Link></li>
                <li className="nav-link"><Link to="register">Register</Link></li>
            </div>
        )
    }
}
    export default Nav
