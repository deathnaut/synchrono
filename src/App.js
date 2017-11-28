import React, { Component } from 'react';
import Header from './components/header';
import Sounds from './components/song';
import Footer from './components/footer';
import Button from './components/button';

class App extends Component {
  componentDidMount() {
    console.log("howdy");
  }
  render() {
    let soundArr = ["beep.wav","beep.wav","beep.wav","beep.wav"];
    let buttons = soundArr.map((sound, idx) => <Button key={idx} sound={sound} start={Date.now()}/>);
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
