import React, { Component } from 'react';
import './style.css';

export default class MessageInput extends Component {

  state = {
    value: '',
  };

  onChange = event => this.setState({ value: event.target.value });

  onKeyUp = (event) => {
    if(event.keyCode === 13){
      event.stopPropagation();
      this.props.onSubmit(this.state.value);
      this.setState({value: ''});
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Type your message"
        className="message-input"
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        value={this.state.value}
      />
    );
  }
}
