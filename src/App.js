import React, { Component } from 'react';
import Header from './components/header.js';
import Sounds from './components/sounds.js';
// import Footer from './components/footer.js';
// import Button from './components/button';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tempo: 120,
    }
    this._changeTempo = this._changeTempo.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _changeTempo(e){
    this.setState({
      tempo: parseInt(e.target.value, 10),
    })
  }

  _handleChange(e) {
    this.setState({
      tempo: parseInt(e.target.value, 10),
    })
  }

  componentDidMount() {
    console.log("howdy");
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <Sounds tempo={this.state.tempo}/>
        <h1>tempo: <input type="number" name="tempo" value={this.state.tempo} onChange={this._handleChange} min="40" max="200"/></h1>
      </div>
    );
  }
}

export default App;
