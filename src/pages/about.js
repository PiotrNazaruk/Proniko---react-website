import React from "react"
import { Component } from "react"
import Layout from "../components/Layout"
import "../styles/main.scss"

class About extends Component {
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
        <div className="pages-header__background">
        <div className="pages-header__headline">
        <h1>O NAS</h1>
        </div></div>
        
        
      </header>
      <div className="about-header__content">
        <h3>SZYBKO, SPRAWNIE, KOMPLEKSOWO..</h3>
        <p>Naszym celem jest stworzenie Klientom warunków bezpiecznego podróżowania busem do krajów Europy, takich jak Niemcy, Holandia oraz z każdego z tych krajów do Polski. Zapewniamy Państwu pełen komfort w trakcie każdego przejazdu.

Busy, którymi dysponujemy, są należycie przygotowane i posiadają ważne badania techniczne oraz certyfikaty wymagane na zachodzie Europy.</p>
        <p></p>
        </div>
     </Layout>
     );
  }
}
 
export default About;