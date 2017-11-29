import React, { Component } from 'react';
import Header from './components/header.js';
import Sounds from './components/sounds.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tempo: 120,
      party: false,
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleParty = this._handleParty.bind(this);
  }

  _handleChange(e) {
    this.setState({
      tempo: parseInt(e.target.value, 10),
    })
  }

  _handleParty(){
    if (this.state.party === false) {
      console.log("PARTY TIME!");
      this.setState({
        party: true,
      })
      document.getElementById('root').className='party-mode';
    } else {
      console.log("party's over :(");
      this.setState({
        party: false,
      })
      document.getElementById('root').className='';
    }
  }

  componentDidMount() {
    console.log("howdy");
  }

  render() {
    return (
      <div className="App container">
        <Header party={this.state.party}/>
          <button className="party-button" onClick={this._handleParty}>
            {this.state.party === true ? 'it\'s a party' : 'party mode?'}
          </button>
        <Sounds tempo={this.state.tempo}/>
        <h1>tempo: <input type="number" name="tempo" value={this.state.tempo} onChange={this._handleChange} min="10" max="300"/></h1>
      </div>
    );
  }
}

export default App;
