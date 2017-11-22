import React, { Component } from 'react';
import Sound from 'react-sound';

class SoundFile extends Component {
  render() {
    return (
      <Sound
        url="cat-meow.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={0 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}

export default SoundFile;
