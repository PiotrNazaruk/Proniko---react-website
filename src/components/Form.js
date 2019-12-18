import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mdokrlyj"
        method="POST"
        className="contact__form"
      >
     
        <label>Email:</label>
        <input className="form__input" type="email" name="email" />
        <label>Wiadomość:</label>
        <input className="form__input form-input--message" type="text" name="message" />
        {status === "SUCCESS" ? <p>Dziękujemy!</p> : <button className="contact__submit">Wyślij</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}