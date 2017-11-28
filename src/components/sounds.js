import React, { Component } from 'react';
import {
  Song,
} from 'react-music';
import Button from './button';

class Sounds extends Component {
  constructor(props){
    super(props);
    this.state = {
      tempo: 120,
      auto: true,
      pattern: [],
      active: false,
      isActive: '',
    }
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(){
    console.log("click");
    if (this.state.active === false) {
      this.setState({
        pattern: [0, 4, 8, 12],
        active: true,
        isActive: 'isActive'
      })
    } else {
      this.setState({
        pattern: [],
        active: false,
        isActive: '',
      })
    }
  }

  render() {
    let soundArr = ["beep.wav","kick.wav","clap.wav","hi-hat.ogg","beep.wav","kick.wav","clap.wav","hi-hat.ogg","beep.wav","kick.wav","clap.wav","hi-hat.ogg"];
    let buttons = soundArr.map((sound, idx) => <Button key={idx} sound={sound} start={Date.now()}/>);
    return (
      <div>
        <Song tempo={this.state.tempo} playing={this.state.auto}>
          <div className="buttons-grid">
            {buttons}
          </div>
        </Song>
      </div>
    );
  }
}

export default Sounds;
