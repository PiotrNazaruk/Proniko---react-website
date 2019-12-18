import React from "react";
import{Link}from 'gatsby'
const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
       <Link to ="/" ><h3>PRONIKO</h3> </Link>
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
