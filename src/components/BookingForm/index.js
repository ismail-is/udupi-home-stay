import React, { Component } from "react";

class BookingForm extends Component {
  state = {
    name: "",
    lastname: "",
    subject: "",
    guests: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";
    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();
    const { name, lastname, subject, guests, error } = this.state;

    if (!name) {
      error.name = "Please select your check-in date";
    }
    if (!lastname) {
      error.lastname = "Please select your check-out date";
    }
    if (!subject) {
      error.subject = "Please select villa";
    }
    if (!guests) {
      error.guests = "Please enter the number of guests";
    }

    if (Object.values(error).some((err) => err !== "")) {
      this.setState({ error });
      return;
    }

    // Construct WhatsApp message
    const message = `Hello, here are my details:
    Check-in Date:    ${name}
    Check-out Date:  ${lastname}
    Choose villa:  ${subject}
    Number of Guests:  ${guests}`;

    // WhatsApp Web API URL
    const whatsappURL = `https://wa.me/7483156464?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    this.setState({
      name: "",
      lastname: "",
      subject: "",
      guests: "",
      error: {},
    });
  };

  render() {
    const { name, lastname, subject, guests, error } = this.state;

    return (
      <div>
        <div className="wpo-contact-title">
          <h4>book your stay today</h4>
        </div>
        <form onSubmit={this.subimtHandler} className="form">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-6">
              <div className="form-field">
                <input
                  value={name}
                  onChange={this.changeHandler}
                  type="text"
                  name="name"
                  placeholder="Check-in Date"
                  onFocus={(e) => e.target.type = "date"}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                />
                <p>{error.name}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6">
              <div className="form-field">
                <input
                  value={lastname}
                  onChange={this.changeHandler}
                  type="text"
                  name="lastname"
                  placeholder="Check-out Date"
                  onFocus={(e) => e.target.type = "date"}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                />
                <p>{error.lastname}</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6">
              <div className="form-field">
                <input
                  value={guests}
                  onChange={this.changeHandler}
                  type="number"
                  name="guests"
                  placeholder="No.of Guests"
                  min="1"
                />
                <p>{error.guests}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="form-field">
                <select
                  className="form-control"
                  onChange={this.changeHandler}
                  value={subject}
                  name="subject"
                >
                  <option value="">Choose Villa</option>
                  <option value="WHITE HOUSE">WHITE HOUSE</option>
                  <option value="GARDEN VILLA">GARDEN VILLA</option>
                  <option value="COTTAGE HOUSE">COTTAGE HOUSE</option>
                  <option value="HILL TOP VILLA">HILL TOP VILLA</option>
                  <option value="SUNRISE HOME">SUNRISE HOME</option>
                </select>
                <p>{error.subject}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 d-flex justify-content-center">
              <div className="form-field">
                <button
                  type="submit"
                  className="theme-btn"
                  style={{ borderRadius: "3px" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
