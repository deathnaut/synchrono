import React, { Component } from 'react';
import Sound from 'react-sound';

class Button extends Component {
  constructor(props){
    super(props);

    this.state = {
      isActive: '',
      active: false,
      sounds: [],
      position: 0,
    };
    this._handleClick = this._handleClick.bind(this);
    this._continuePlaying = this._continuePlaying.bind(this);
  }

  _handleClick(){
    console.log("click");
    if (this.state.active === false) {
      this.setState({
        active: true,
        isActive: 'isActive',
        sounds: this.state.sounds.concat({ url: '' })
      })
    } else {
      this.setState({
        active: false,
        isActive: '',
        sounds: this.state.sounds
      })
    }
  }


  _continuePlaying(){
    console.log(Math.floor(((Date.now() / 1000) % 60) - ((this.props.start / 1000) % 60)));
    const self = this;
    setTimeout(function(){
      self.setState({position: 0})
    }, 3000);
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
