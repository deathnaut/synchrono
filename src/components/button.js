import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  constructor(props){
    super(props);

    this.state = {
      bgColor: 'yellow',
      active: false,
    }
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(){
    console.log("click");
    if (this.state.bgColor === 'yellow') {
      this.setState({
        bgColor: 'blue',
        active: true,
      })
    } else {
      this.setState({
        bgColor: 'yellow',
        active: false,
      })
    }
  }

  render() {
    return (
      <div className="button">
        <button name="button" onClick={ this._handleClick } style={{backgroundColor:this.state.bgColor}}>i am a button</button>
      </div>
    );
  }
}

export default Button;
