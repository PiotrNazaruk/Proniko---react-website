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
              <h3>PRZEJAZDY ZIELONA GÓRA </h3>
            </div>
            <div className="offer__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                rem illum voluptas deleniti, tenetur placeat. Maiores sint
                ducimus amet, provident vero doloribus quisquam dignissimos
                corrupti quasi at eveniet doloremque? Culpa?
              </p>
            </div>
          </section>
          <section className="divider"></section>
          <section className="icons">
            <div className="icons__box">
              <div className="icons__img icons__img--first"></div>
              <div className="icons__text">
                <h3>text 1</h3>
              </div>
            </div>
            <div className="icons__box">
              <div className="icons__img icons__img--second"></div>
              <div className="icons__text">
                <h3>text 1</h3>
              </div>
            </div>
            <div className="icons__box">
              <div className="icons__img icons__img--third"></div>
              <div className="icons__text">
                <h3>text 1</h3>
              </div>
            </div>
            <div className="icons__box">
              <div className="icons__img icons__img--fourth"></div>
              <div className="icons__text">
                <h3>text 1</h3>
              </div>
            </div>
          </section>
          <section className="reservation" >
          <div className="reservation__headline"><h3>ZAREZERWUJ PRZEJAZD JUŻ TERAZ !!</h3>
          <p>( działamy całą dobę )</p>
          
          </div>
          <div className="reservation__button"><button className="reservation__btn">ZADZWOŃ</button></div>
          </section>
        </Layout>
      </>
    )
  }
}

export default IndexPage
