import React, { Component } from 'react';
import Sound from 'react-sound';

// TODO: fix sound playing issue
// what it should do: start sound file from beginning anytime it is activated
// needs to not: pauses mid sound file and picks up where it left off
// HINT:

// TODO: fix loop
// what it should do: loop when file is done playing
// needs to not: only play one time upon activation
// HINT: LOOK AT onFinishedPlaying={this.handleSongFinishedPlaying}

class Button extends Component {
  constructor(props){
    super(props);

    this.state = {
      bgColor: 'yellow',
      active: false,
      boxShadow: 'none',
      sounds: [],
      position: 0,
    };
    this._handleClick = this._handleClick.bind(this);
    this._continuePlaying = this._continuePlaying.bind(this);
  }

  _handleClick(){
    console.log("click");
    if (this.state.bgColor === 'yellow') {
      this.setState({
        bgColor: 'blue',
        active: true,
        sounds: this.state.sounds.concat({ url: '' })
      })
    } else {
      this.setState({
        bgColor: 'yellow',
        active: false,
        boxShadow: 'none',
        sounds: this.state.sounds
      })
    }
  }

  _continuePlaying(){
    this.setState({position: 0});
  }

  render() {
    return (
      <div className="button">
        <Sound
          url={this.props.sound}
          playStatus={this.state.active === false ? Sound.status.STOPPED : Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this._continuePlaying}
        />
        <button onClick={ this._handleClick }>
            {this.state.active ? 'playing' : 'paused'}
        </button>
      </div>
    );
  }
}

export default Button;
