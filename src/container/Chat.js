import React, { PureComponent } from 'react';
import MessageList from 'containers/MessageList';
import MessageInput from 'components/MessageInput';
import User from 'components/User';
import './style.css';

export default class Chat extends PureComponent {
  state = {
    user: `User${~~(Math.random()*10000)}`,
  }

  onUserUpdate = user => this.setState({ user });

  onMessageSend = (text) => {
    const { user } = this.state;

    window.firebase.database().ref('messages').push({
      id: Date.now(),
      user,
      text,
    }, () => document.body.scrollTop += 100);
    debugger;
  };


  render() {
    return (
      <main>
        <MessageList />
        <div className="chat-input-area">
          <User onUpdate={this.onUserUpdate} user={this.state.user} />
          <MessageInput onSubmit={this.onMessageSend}/>
        </div>
      </main>
    );
  }
}