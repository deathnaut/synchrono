import React, { Component } from 'react';
import Sound from 'react-sound';

// TODO: fix loop/multiple sounds playing on mobile!
// what it should do: play multiple sounds that loop
// needs to not: stop a sound playing to play another
// HINT:

class Button extends Component {
  constructor(props){
    super(props);

    this.state = {
      isActive: '',
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
        isActive: 'isActive',
        sounds: this.state.sounds.concat({ url: '' })
      })
    } else {
      this.setState({
        bgColor: 'yellow',
        active: false,
        isActive: '',
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
      <div className="button-container">
        <Sound
          url={this.props.sound}
          playStatus={this.state.active === false ? Sound.status.STOPPED : Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this._continuePlaying}
        />
      <button onClick={ this._handleClick } className={this.state.isActive}>
            {this.state.active ? 'playing' : 'paused'}
        </button>
      </div>
    );
  }
}

export default Button;
