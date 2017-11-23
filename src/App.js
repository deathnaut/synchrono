import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default App;
