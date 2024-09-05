import React, { Component } from "react";
import logo from '../assets/saitama.jpg';
import { NavLink } from 'react-router-dom';

class MyComponent extends Component {
  render() {
    return (
    <div>
      <h1>Welcome to Dashboard HomePage</h1>
      <img src={logo} alt="Logo" />
      <br></br>
      {/*This is an navigation link to 'aboutUs' component*/}
      <NavLink to='/about'>
        <button type="button" class="button">
          Click here to go Redux State Page 
        </button>
      </NavLink>
      <NavLink to='/comtwo'>
        <button type="button" class="button">
          Click here to go Component App Two
        </button>
      </NavLink>
    </div>
    );
  }
}
export default MyComponent;