import React, { Component } from 'react';
import Header from './components/header.js';
import Sounds from './components/sounds.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tempo: 120,
      party: false,
      playing: true,
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleParty = this._handleParty.bind(this);
    this._handlePlayToggle = this._handlePlayToggle.bind(this);
  }

  _handleChange(e) {
    if (e.target.value > this.state.tempo) {
      document.getElementById('faster-indicator').className='show';
      setTimeout(() => {
        document.getElementById('faster-indicator').className=''
      }, 700);
    } else if (e.target.value < this.state.tempo) {
      document.getElementById('slower-indicator').className='show';
      setTimeout(() => {
        document.getElementById('slower-indicator').className=''
      }, 700);
    }
    this.setState({
      tempo: parseInt(e.target.value, 10),
    })
  }

  _handleParty(){
    if (this.state.party === false) {
      this.setState({
        party: true,
      })
      document.getElementById('root').className='party-mode';
    } else {
      this.setState({
        party: false,
      })
      document.getElementById('root').className='';
    }
  }

  _handlePlayToggle(){
    this.setState({
      playing: !this.state.playing,
    })
  }

  componentDidMount() {
    console.log("howdy");
  }

  render() {
    return (
      <div className="App container">
        <Header party={this.state.party}/>
        <div className="button-bar">
          <button id="party-button" onClick={this._handleParty}>
            {this.state.party === true ? "it's a party" : "party mode?"}
          </button>
          <button id="play-button" onClick={this._handlePlayToggle}>
            {this.state.playing === true ? "pause" : "resume"}
          </button>
        </div>
        <Sounds tempo={this.state.tempo} playing={this.state.playing}/>
        <div>
          <h1>tempo: <input type="number" name="tempo" value={this.state.tempo} onChange={this._handleChange} min="10" max="300"/></h1>
          <div className="indicators">
            <p id="faster-indicator">faster <span role="img" aria-label="smiling imp">😈</span></p>
            <p id="slower-indicator">slower <span role="img" aria-label="slightly annoyed">😒</span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
