import React from 'react'
import BrushIcon from '@material-ui/icons/BrushTwoTone';
import './css/Header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <h1>
        
        <BrushIcon />
        Wall App
      </h1>
      <nav> 
        <ul>
        <li><Link to="login">Login</Link></li>
        <li><Link to="register">Register</Link></li>
        </ul>
      </nav>
    </header>
    )
}

export default Header
