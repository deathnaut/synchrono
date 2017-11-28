import React, { Component } from 'react';
import Header from './components/header.js';
import Sounds from './components/sounds.js';
import Footer from './components/footer.js';
// import Button from './components/button';

class App extends Component {
  componentDidMount() {
    console.log("howdy");
  }
  render() {
    // let soundArr = ["beep.wav","beep.wav","beep.wav","beep.wav"];
    // let buttons = soundArr.map((sound, idx) => <Button key={idx} sound={sound} start={Date.now()}/>);
    return (
      <div className="App">
        <Header />
        <Sounds />
        <Footer />
      </div>
    );
  }
}

export default App;
