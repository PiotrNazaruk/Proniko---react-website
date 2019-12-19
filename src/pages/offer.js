import React from "react"
import { Component } from "react"
import Layout from "../components/Layout"
import "../styles/main.scss";


class Offer extends Component {
  state = {  }
  handleButton = () => {
    let nav = document.querySelector(".navigation")
    nav.classList.toggle("hide-open")
    console.log("dziala")
  }
  render() { 
    return ( 
     <Layout click={this.handleButton}>
      <header className="pages-header">
        <div className="pages-header__background ">
        <div className="pages-header__headline">
        <h1>OFERTA</h1>
        </div></div>
        
    
      </header>
      <div className="offer-header__content">
        <h2>Nasza oferta obejmuje</h2>
        <p>Doskonale zdajemy sobie sprawę z tego, jak ważna jest punktualność i rzetelność podczas wynajmu busa. W ramach naszej działalności zawsze dojedziesz do celu punktualnie.
</p>
        <ul>
          <li>- Indywidualny przewóz osób</li>
          <li>- Transport w ramach turystyki zoorganizowanej</li>
          <li>- Transfery lotniskowe</li>
          <li>- Obsługę imprez okolicznościowych</li>
          <li>- Transport podczas szkoleń i podróży służbowej</li>
          <li>- Przewóz pracowników - zlecenia stałe</li>
          <li>- Obsługa eventów / planów filmowych</li>
        </ul>
        </div>
      <section className="offer-gallery">
        <div className="offer-gallery__box offer-gallery__box--first"></div>
        <div className="offer-gallery__box offer-gallery__box--second "></div>
        <div className="offer-gallery__box offer-gallery__box--third"></div>
        <div className="offer-gallery__box offer-gallery__box--fourth"></div>
        <div className="offer-gallery__box offer-gallery__box--fifth"></div>
        <div className="offer-gallery__box offer-gallery__box--sixth"></div>
        <div className="offer-gallery__box offer-gallery__box--seventh"></div>
        <div className="offer-gallery__box offer-gallery__box--eight"></div>
        <div className="offer-gallery__box offer-gallery__box--ninth"></div>
        <div className="offer-gallery__box offer-gallery__box--tenth"></div>
      </section>

     </Layout>
     );
  }
}
 
export default Offer;