import React from 'react'
import BrushIcon from '@material-ui/icons/BrushTwoTone';
import './css/Header.css'
import { Link } from 'react-router-dom';
import Nav from './Nav'
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
        <Nav/>
        </ul>
      </nav>
    </header>
    )
}

export default Header
