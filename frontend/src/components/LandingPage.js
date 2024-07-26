import React, { Component } from "react";
import Header from "./Header";
import "./styles/landingpage.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="landing-section">
          <div className="card">
            <h1>Welcome to FnMoney Full Stack Internship</h1>
            <p>Internship Assignment</p>
            <div>
              <Link to="/login">
                <button className="get-started">Get Started</button>
              </Link>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default LandingPage;
