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
          <title>PRONIKO - transport osób</title>
          <meta name='keywords' content= "wynajem busa, Zielona Góra, przewóz osób, eventy, wesela, imprezy, wynajmę busa Zielona Góra, bus na na lotnisko Zielona Góra, bus do Wólki Kosowskiej Zielona Góra"/>
        
          <meta name='description' content= "Wynajem busa Zielona Góra, eventy, przejazd na lotniska, wesela i wiele innych"/>
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