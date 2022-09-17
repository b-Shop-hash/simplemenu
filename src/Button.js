import React from "react";
import "./Button.css";
import Data from './Data.json';
import {CSSTransition} from 'react-transition-group';

class Button extends React.Component {
  render() {
    return (
      <div>
        <nav id="H">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <h2>This is my first sample project with <a href="https://reactjs.org/" target={"_blank"}>React.js</a></h2>
        <section>
          <h3 id="Home">
          {Data.Home}
          </h3>
          <h3 id="About">
          {Data.About}
          </h3>
          <h3 id="Services">
          {Data.Services}
          </h3>
          <h3 id="Contact">
          {Data.Contacts}
          </h3>
        </section>
      </div>
    );
  }
}

export default Button;
