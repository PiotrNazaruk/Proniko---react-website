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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eum accusantium impedit illo omnis quisquam non dolore vero dolores, perferendis sed nulla, autem quasi corporis? Recusandae voluptate blanditiis odit eaque.</p>
        </div>
     </Layout>
     );
  }
}
 
export default About;