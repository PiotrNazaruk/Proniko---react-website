import React from "react"
import { Component } from "react"
import Layout from "../components/Layout"
import "../styles/main.scss"
import{Link}from 'gatsby'
import icon1 from '../images/route.svg'
import icon2 from '../images/map.svg'
import icon3 from '../images/airplane.svg'
import icon4 from '../images/24-hours.svg'

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
              <p>Kompleksowe rozwiązania to nasza specjalność. Baza startowa znajduje się w Zielonej Górze. Działamy jednak na terenie całej Polski oraz Europy Zachodniej. Nie boimy się wyzwań. Czekamy na Państwa kontakt</p>
              <a href="tel:+48501406319"><button className="header__button">Zadzwoń</button></a> 
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
            <div className="icons__box icon__box--1">
              <div className="icons__img icons__img--first"> <img src={icon1}></img> </div>
              <div className="icons__text">
                <h3>Przewóz osób na wycieczkę</h3>
                <p>Firma Proniko świadczy w systemie "door to door" według poleceń zlecającego. Głównym obszarem działania i bazą startową jest Zielona Góra. Działamy na terenie całej Polski i Europy zachodniej. W gre wchodzą wycieczki weekendowe jak i na dłuższą ilość dni. Chcemy podkreślić że wynajem busa odbywa się jedynie z kierowcą </p>
              </div>
            </div>
            <div className="icons__box icon__box--2">
              <div className="icons__img icons__img--second"> <img src={icon2}></img></div>
              <div className="icons__text">
                <h3>Obsługa transportowa wesel</h3>
                <p>Świadczymy usługi wynajmu busa z kierowcą na uroczystość weselną. W naszej ofercie znajduje się również możliwość rozwożenia gości o ustalonych nocnych porach.  </p>
              </div>
            </div>
            <div className="icons__box icon__box--3">
              <div className="icons__img icons__img--third"> <img src={icon3}></img></div>
              <div className="icons__text">
                <h3>Przewóz osób na lotnisko</h3>
                <p>Oferujemy transfery na lotniska w Polsce a także transport z lotniska. Wszelkie przejazdy realizowane są busem Renault Traffic w najbogatszej wersji wyposażenia. Zapraszamy do kontaktu w celu ustalenia szczegółów wynajmu busa</p>
              </div>
            </div>
            <div className="icons__box icon__box--4">
              <div className="icons__img icons__img--fourth"> <img src={icon4}></img></div>
              <div className="icons__text">
                <h3>Obługa transportowa eventów</h3>
                <p>Dzięki kompleksowemu podejściu nasza firma zapewnia również przewozy grup zoorganizowanych na plany filmowe, wyjazdy integracyjne czy wyjazdy służbowe lub szkolenia    </p>
              </div>
            </div>
          </section>
          <section className="information" >
          <h2>KOMPLEKSOWE ROZWIAZANIA</h2>
          <p>Jesteśmy otwarci na wszelkie oferty współpracy. Zapewniamy rzetelną realizację zleceń oraz korzystne ceny. Dzięki wykwalifikowanym, doświadczonym kierowcom podróż z nami będzie bezpieczna i komfortowa </p>
          <div className="information__button"><Link to="/offer/"><button className="information-btn" >zobacz więcej..</button></Link></div>
          </section>
          <section className="reservation" >
          <div className="reservation__headline"><h3>ZAREZERWUJ PRZEJAZD JUŻ TERAZ !!</h3>
          <p>( działamy całą dobę )</p>
          
          </div>
          <div className="reservation__button"> <Link to="/contact/"><button className="reservation__btn">KONTAKT</button></Link></div>
          </section>
          
        </Layout>
      </>
    )
  }
}

export default IndexPage
