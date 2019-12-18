import React from "react";
import{Link}from 'gatsby'
import Logo from '../images/logo.svg'
const Navigation = () => {

  return (
    <nav className="navigation">
      <div className="navigation__logo">
       <Link to ="/"> <img src={Logo} ></img> </Link>
      </div>
      <ul className="navigation__list">
       <Link to="/about/"> <li>O NAS</li> </Link>
       <Link to="/offer/"> <li>OFERTA</li> </Link>
       <Link to="/contact/"> <li>KONTAKT</li> </Link>
      </ul>
      <div className="navigation__patern"></div>
    
    </nav>
  )
}

export default Navigation
