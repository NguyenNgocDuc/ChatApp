import React, { PureComponent  } from 'react';

export default class User extends PureComponent {

  onChange = (event) => {
    this.props.onUpdate(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Username"
        value={this.props.user}
        className="message-username"
        onChange={this.onChange}
      />
    );
  }
}