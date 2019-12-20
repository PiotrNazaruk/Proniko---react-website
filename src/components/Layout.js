import React from 'react';

import Navigation from '../components/Navigations';
import Footer from '../components/Footer';
import Burger from '../components/Burger';
import Helmet from 'react-helmet';
const Layout = (props) => {
  return ( 
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>PRONIKO</title>
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap&subset=latin-ext" rel="stylesheet"></link>
        </Helmet>
    <Navigation />
    <Burger click={props.click}/>
    {props.children}
    <Footer/>
    </>
   );
}
 
export default Layout;