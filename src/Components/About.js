import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                src={profilepic}
                width="100%"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p style={{ textAlign: "justify" }}>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <span>
                      {street}
                      <br />
                      {city}, {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="bttn-container">
                  <a
                    className="bttn-customize"
                    href="https://drive.google.com/file/d/1PdR1dR6bPGvnEadysbER3Nsxifcsr69P/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
              <div className="columns download width-full">
               
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
