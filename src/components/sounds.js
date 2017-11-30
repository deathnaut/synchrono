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
          pattern: [0,3,6,8,14],
        },
        {
          filename: "clap.wav",
          type: "snare",
          pattern: [4,12],
        },
        {
          filename: "hi-hat.ogg",
          type: "hi-hat",
          pattern: [2,3,6,7,10,11,14,15],
        },
        {
          filename: "open-hat.wav",
          type: "hi-hat",
          pattern: [2,6,10,14],
        },
        {
          filename: "bass2.wav",
          type: "bass",
          pattern: [[0,-4],[4, -8],[6,-8],[10,-8]],
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
        {
          filename: "ding.wav",
          type: "surprise",
          pattern: [[2,-6],[9,-12],11,[14, -12]],
        },
        {
          filename: "alien.wav",
          type: "surprise",
          pattern: [[4,10]],
        },
      ];
    let buttons = soundObjArr.map((soundObj, idx) => <Button key={idx} sound={soundObj.filename} type={soundObj.type} pattern={soundObj.pattern}/>);
    return (
      <div>
        <Song tempo={this.props.tempo} playing={this.props.playing}>
          <div className="buttons-grid">
            {buttons}
          </div>
        </Song>
      </div>
    );
  }
}

export default Sounds;
