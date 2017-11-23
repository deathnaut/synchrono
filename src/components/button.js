import React, { Component } from 'react';
import Sound from 'react-sound';

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

  render() {
    return (
      <div className="button">
        <Sound
          url={this.props.sound}
          playStatus={this.state.active === false ? Sound.status.PAUSED : Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        <button onClick={ this._handleClick }>
            {this.state.active ? 'playing' : 'paused'}
        </button>
      </div>
    );
  }
}

export default Button;
