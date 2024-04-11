import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <iframe
              className="resume-content"
              src={projects.url}
              title="projects"
            ></iframe>
            <div style={{ textAlign: "center" }}>
              <a href={projects.url} target="_blank" rel="noreferrer">
                {projects.title}
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="three columns header-col">
            <h3>
              <span>Projects</span>
            </h3>
          </div>
          <div className="row">
            <div className="twelve columns collapsed">
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
