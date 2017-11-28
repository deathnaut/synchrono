import React, { Component } from 'react';
import {
  Analyser,
  Sequencer,
  Sampler,
  Synth,
} from 'react-music';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
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
        pattern: this.props.pattern,
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
    return (
      <div className="button-container">
        <button onClick={ this._handleClick } className={this.state.isActive}>
          {this.props.type}
        </button>
        <Sequencer resolution={16} bars={1}>
          <Sampler
            sample={"./"+this.props.sound}
            steps={this.state.pattern}
          />
        </Sequencer>
      </div>
    );
  }
}

export default Button;
