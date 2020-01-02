import React from "react"
import { Component } from "react"
import Layout from "../components/Layout"
import "../styles/main.scss"
import icon1 from "../images/route.svg"
import icon2 from "../images/reload.svg"
import icon3 from "../images/settings.svg"
import icon4 from "../images/like.svg"

class About extends Component {
  state = {}
  handleButton = () => {
    let nav = document.querySelector(".navigation")
    nav.classList.toggle("hide-open")
    console.log("dziala")
  }
  render() {
    return (
      <Layout click={this.handleButton}>
        <header className="pages-header">
          <div className="pages-header__background">
            <div className="pages-header__headline">
              <h1>O NAS</h1>
            </div>
          </div>
        </header>
        <div className="about-header__content">
          <h3>SZYBKO, SPRAWNIE, KOMPLEKSOWO..</h3>
          <p>
            Naszym celem jest stworzenie Klientom warunków bezpiecznego
            podróżowania busem do krajów Europy, takich jak Niemcy, Holandia
            oraz z każdego z tych krajów do Polski. Zapewniamy Państwu pełen
            komfort w trakcie każdego przejazdu. Busy, którymi dysponujemy, są
            należycie przygotowane i posiadają ważne badania techniczne oraz
            certyfikaty wymagane na zachodzie Europy.
          </p>
          <p></p>
        </div>
        <div className="about-page__icons">
          <div className="icon-box icon-box--first">
            <img src={icon1} alt="" />
            <div className="icon-box__headline">
            <h3>Bezpieczeństwo</h3>
            </div>
            
          </div>
          <div className="icon-box icon-box--second">
            <img src={icon2} alt="" />
            <div className="icon-box__headline">
            <h3>Elastyczność</h3>
            </div>
          </div>
          <div className="icon-box icon-box--third">
            <img src={icon3} alt="" />
            <div className="icon-box__headline">
            <h3>Terminowość</h3>
            </div>
          </div>
          <div className="icon-box icon-box--fourth">
            <img src={icon4} alt="" />
            <div className="icon-box__headline">
            <h3>Satysfakcja klientów</h3>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
