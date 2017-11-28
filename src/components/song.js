import React, { Component } from 'react';
import {
  Analyser,
  Song,
  Sequencer,
  Sampler,
  Synth,
} from 'react-music';
import Button from './button';

class Sounds extends Component {
  constructor(props){
    super(props);
    this.state = {
      tempo: 120,
      auto: true,
      steps: [],
    }
  }

  render() {
    return (
      <div>
        <h1>howdy</h1>
        <Song tempo={this.state.tempo} playing={this.state.auto}>
          <button></button>
          <Sequencer resolution={16} bars={1}>
            <Sampler
              sample="./beep.wav"
              steps={[0, 2, 6, 12]}
            />
          </Sequencer>
          <Sequencer resolution={16} bars={1}>
            <Sampler
              sample="./kick.wav"
              steps={[0, 4, 8, 12]}
            />
          </Sequencer>
          <Sequencer resolution={16} bars={1}>
            <Sampler
              sample="./clap.wav"
              steps={[4, 12]}
            />
          </Sequencer>
          <Sequencer resolution={16} bars={1}>
            <Sampler
              sample="./hi-hat.ogg"
              steps={[2, 6, 10, 14]}
            />
          </Sequencer>
        </Song>
      </div>
    );
  }
}

export default Sounds;
