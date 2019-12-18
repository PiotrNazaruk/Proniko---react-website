import React from 'react';

import Navigation from '../components/Navigations';
import Footer from '../components/Footer';
import Burger from '../components/Burger';
const Layout = (props) => {
  return ( 
    <>
    <Navigation />
    <Burger click={props.click}/>
    {props.children}
    <Footer/>
    </>
   );
}
 
export default Layout;