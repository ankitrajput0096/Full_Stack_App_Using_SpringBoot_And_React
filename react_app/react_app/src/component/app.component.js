import React, { Component } from "react";
import logo from '../assets/saitama.jpg';
import { NavLink } from 'react-router-dom';

class MyComponent extends Component {
  render() {
    return (
    <div>
      <div className={"intro"}>Hello World</div>
      <img src={logo} alt="Logo" />
      <div>Awesome!!!</div>
      {/*This is an navigation link to 'aboutUs' component*/}
      <NavLink to='/about'>Click here to go About us </NavLink>
    </div>
    );
  }
}
export default MyComponent;