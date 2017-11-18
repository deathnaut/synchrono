import React, { Component } from 'react';
import logo from '../image4219.png';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt='synchrono logo'/>
          <h1>welcome to your project</h1>
        </header>
      </div>
    );
  }
}

export default Header;
