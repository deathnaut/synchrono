import React, { Component } from 'react';
import puppy from '../image4219.png';


class Header extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={puppy} alt='synchrono logo'/>
          <h1>welcome to synchrono, karla. lets get funky</h1>
        </header>
      </div>
    );
  }
}

export default Header;
