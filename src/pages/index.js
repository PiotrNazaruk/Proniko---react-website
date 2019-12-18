import React from "react"
import { Component } from "react"
import Layout from "../components/Layout"
import "../styles/main.scss"
import{Link}from 'gatsby'
import About from '../pages'

class IndexPage extends Component {
  state = {}
  handleButton = () => {
    let nav = document.querySelector(".navigation")
    nav.classList.toggle("hide-open")
    console.log("dziala")
  }

  render() {
    return (
      <>
        <Layout click={this.handleButton}>
          <header className="header">
            <div className="header__image"></div>
            <div className="header__headline">
              <h1>Komfortowe przejazdy busem</h1>
              <h3>Zarezerwuj przejazd już teraz</h3>
              <button className="header__button">Zadzwoń</button>
            </div>
          </header>
          <section className="offer">
            <div className="offer__headline">
              <h3>TRANSPORT OSÓB</h3>
            </div>
            <div className="offer__text">
              <p>
                Świadczymy profesjonalne usługi transportowe osób na terenie Polski oraz całej Europy Zachodniej. Do naszej dyspozycji są 8 osobowe Renault Traffic w najbogatszej wersji wyposażenia. Auta są należycie przygotowane posiadając badania techniczne oraz certyfikaty wymagane w zachodniej Europie.
              </p>
            </div>
          </section>
          <section className="divider"></section>
          <section className="icons">
            <div className="icons__box">
              <div className="icons__img icons__img--first"></div>
              <div className="icons__text">
                <h3>Przewóz osób na wycieczkę</h3>
              </div>
            </div>
            <div className="icons__box">
              <div className="icons__img icons__img--second"></div>
              <div className="icons__text">
                <h3>Obsługa transportowa wesel</h3>
              </div>
            </div>
            <div className="icons__box">
              <div className="icons__img icons__img--third"></div>
              <div className="icons__text">
                <h3>Przewóz osób na lotnisko</h3>
              </div>
            </div>
            <div className="icons__box">
              <div className="icons__img icons__img--fourth"></div>
              <div className="icons__text">
                <h3>Obługa transportowa eventów</h3>
              </div>
            </div>
          </section>
          <section className="information" >
          <h2>KOMPLEKSOWE ROZWIAZANIA</h2>
          <p>Jesteśmy otwarci na wszelkie oferty współpracy. Zapewniamy rzetelną realizację zleceń oraz korzystne ceny. Dzięki wykwalifikowanym, doświadczonym kierowcom podróż z nami będzie bezpieczna i komfortowa </p>
          <div className="information__button"><button className="information-btn" >zobacz więcej..</button></div>
          </section>
          <section className="reservation" >
          <div className="reservation__headline"><h3>ZAREZERWUJ PRZEJAZD JUŻ TERAZ !!</h3>
          <p>( działamy całą dobę )</p>
          
          </div>
          <div className="reservation__button"> <a href="tel:+6494461709"><button className="reservation__btn">ZADZWOŃ</button></a></div>
          </section>
          
        </Layout>
      </>
    )
  }
}

export default IndexPage
