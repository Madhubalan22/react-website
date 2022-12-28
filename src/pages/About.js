import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          This is the pizza shop for the economically weak people's.
          It is the user friendly website for customer.
          The main motive of this website is to help the customer to choose the right pizza for their choice.
          Myself Madhubalan M founder of this shop, I can help customer to choose right pizza at their price.
        </p>
      </div>
    </div>
  );
}

export default About;
