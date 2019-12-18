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
      <div className="contact-header__content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eum accusantium impedit illo omnis quisquam non dolore vero dolores, perferendis sed nulla, autem quasi corporis? Recusandae voluptate blanditiis odit eaque.</p>
        </div>
      <Form/>
     </Layout>
     );
  }
}
 
export default Contact;