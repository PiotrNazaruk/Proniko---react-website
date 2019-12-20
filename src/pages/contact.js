import React from "react"
import { Component } from "react"
import Layout from "../components/Layout"
import "../styles/main.scss"
import Form from "../components/Form";

class Contact extends Component {
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
        <h1>KONTAKT</h1>
        </div></div>
        
       
      </header>
      <section className="contact-content">
      <div className="contact-header__content">
        <h2>SKONTAKTUJ SIĘ Z NAMI</h2>
        <ul>
          <li>proniko1976@gmail.com</li>
          <a href="tel:+48501406319"> <li>501-406-319</li></a>
        </ul>
        </div>
      <Form/>
      </section>
     
     </Layout>
     );
  }
}
 
export default Contact;