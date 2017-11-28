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
    let soundObjArr = [
        {
          filename: "beep.wav",
          type: "",
          pattern: [0,4,8,12],
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
          filename: "hi-hat.ogg",
          type: "hi-hat",
          pattern: [2,3,4,5,6,10,14],
        },
        {
          filename: "cat-meow3.wav",
          type: "meow",
          pattern: [6],
        },
        {
          filename: "shaker.wav",
          type: "shaker",
          pattern: [2,6,10,14],
        },
      ];
    let buttons = soundObjArr.map((soundObj, idx) => <Button key={idx} sound={soundObj.filename} type={soundObj.type} pattern={soundObj.pattern}/>);
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
