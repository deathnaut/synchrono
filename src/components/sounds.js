import React, { Component } from 'react';
import {
  Song,
} from 'react-music';
import Button from './button';

class Sounds extends Component {
  constructor(props){
    super(props);
    this.state = {
      tempo: this.props.tempo,
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
    let soundObjArr = [
        {
          filename: "beep.wav",
          type: "metronome",
          pattern: [[0, 12],4,8,12],
        },
        {
          filename: "kick2.wav",
          type: "kick",
          pattern: [0,4,8,12],
        },
        {
          filename: "kick2.wav",
          type: "kick",
          pattern: [0,3,6,8,12],
        },
        {
          filename: "clap.wav",
          type: "snare",
          pattern: [4,12],
        },
        {
          filename: "hi-hat.ogg",
          type: "hi-hat",
          pattern: [2,6,10,14],
        },
        {
          filename: "shaker.wav",
          type: "shaker",
          pattern: [0,2,4,7,10,12,15],
        },
        {
          filename: "busy-tone.mp3",
          type: "surprise",
          pattern: [0,[6, -12],12],
        },
        {
          filename: "cat-meow3.wav",
          type: "surprise",
          pattern: [6],
        },
        {
          filename: "whoop.mp3",
          type: "surprise",
          pattern: [[2,-6],[9,-12],11,[14, -12]],
        },
      ];
    let buttons = soundObjArr.map((soundObj, idx) => <Button key={idx} sound={soundObj.filename} type={soundObj.type} pattern={soundObj.pattern}/>);
    return (
      <div>
        <Song tempo={this.props.tempo} playing={this.state.auto}>
          <div className="buttons-grid">
            {buttons}
          </div>
        </Song>
      </div>
    );
  }
}

export default Sounds;
