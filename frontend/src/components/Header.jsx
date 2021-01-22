import React from 'react'
import BrushIcon from '@material-ui/icons/BrushTwoTone';
import './css/Header.css'
function Header() {
    return (
        <header>
      <h1>
        <BrushIcon />
        Wall App
      </h1>
      <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul> 
    </header>
    )
}

export default Header
