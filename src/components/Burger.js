import React from "react"
const Burger = (props) => {
  return ( 
    <div onClick={props.click} className="navigation__burger">
    <div className="navigation__item"></div>
    <div className="navigation__item"></div>
    <div className="navigation__item"></div>
  </div>
   );
}
 
export default Burger;