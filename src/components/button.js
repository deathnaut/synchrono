import React, { Component } from 'react';
import SoundFile from './sound.js';
import './button.css';

class Button extends Component {
  constructor(props){
    super(props);

    this.state = {
      bgColor: 'yellow',
      active: false,
      boxShadow: 'none',
      sounds: [],
    }
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(){
    console.log("click");
    if (this.state.bgColor === 'yellow') {
      this.setState({
        bgColor: 'blue',
        active: true,
        sounds: this.state.sounds.concat({ url: '' })
        // boxShadow: '0 0 20px #000'
      })
    } else {
      this.setState({
        bgColor: 'yellow',
        active: false,
        boxShadow: 'none',
      })
    }
  }

  render() {
    return (
      <div className="button">
        <button name="button" onClick={ this._handleClick } style={{backgroundColor:this.state.bgColor, boxShadow:this.state.boxShadow}}>i am a button</button>
        {this.state.sounds.map((sound) => <SoundFile url={sound.url}/>)}
      </div>
    );
  }
}

export default Button;
