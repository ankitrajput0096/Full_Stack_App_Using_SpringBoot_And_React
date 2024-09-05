import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class MyComponentTwo extends Component {
  render() {
    return (
    <div>
      <h1>Welcome to Component 2</h1>
      <br></br>
      {/*This is an navigation link to 'aboutUs' component*/}
      <NavLink to='/'>
        <button type="button" class="button">
          Click here to go HomePage 
        </button>
      </NavLink>
    
    </div>
    );
  }
}
export default MyComponentTwo;