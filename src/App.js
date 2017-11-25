import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';

class App extends Component {
  render() {
    let soundArr = ["cat-meow.mp3","cat-meow2.wav","cat-meow3.wav","cat-meow4.wav"]
    let buttons = soundArr.map((sound, idx) => <Button key={idx} sound={sound}/>)
    return (
      <div className="App">
        <Header />
        <div className="buttons">
          {buttons}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
