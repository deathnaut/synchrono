import React, { Component } from 'react';
import logo from '../image4219.png';


class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt='synchrono logo'/>
          <h3>(the demo)</h3>
          <h1>let's get funky</h1>
        </header>
      </div>
    );
  }
}

export default Header;
