import React from 'react'
import BrushIcon from '@material-ui/icons/BrushTwoTone';
import './css/Header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
        <BrushIcon />
        Wall App
        </Link>
      </h1>
      <nav> 
        <ul>
        <li className="nav-link"><Link to="login">Login</Link></li>
        <li className="nav-link"><Link to="register">Register</Link></li>
        </ul>
      </nav>
    </header>
    )
}

export default Header
