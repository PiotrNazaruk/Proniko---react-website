import React from "react"
import { Component } from "react"
import Layout from "../components/Layout"
import "../styles/main.scss"
import Form from "../components/Form";
import email from '../images/email.svg';
import telephone from '../images/call.svg';
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
          <div className="contact-content__box">
            <div className="contact-content__icon"><img src={email} alt=""/></div>
            <div className="contact-content__info"><span className="contact-data">proniko1976@gmail.com</span></div>
          </div>
          <div className="contact-content__box">
          <div className="contact-content__icon"><img src={telephone} alt=""/></div>
            <div className="contact-content__info"><a href="tel:+48501406319"><span className="contact-data">501-406-319</span></a></div>
          </div>
        </div>
      <Form/>
      </section>
     
     </Layout>
     );
  }
}
 
export default Contact;