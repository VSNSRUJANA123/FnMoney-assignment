import React, { Component } from "react";
import Header from "./Header";
import "./styles/landingpage.css";
import background from "./images/bg.jpg";
class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="landing-section">
          <div className="card">
            <div>
              <h1>Welcome to FnMoney Full Stack Internship</h1>
            </div>
            <button className="">Get Started</button>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
