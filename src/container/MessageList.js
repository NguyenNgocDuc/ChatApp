import React, { Component } from 'react';
import Message from 'components/Message';
import './style.css';

export default class MessageList extends Component {
  state = {
    messages: {},
  };

  componentDidMount() {
    this.subscribeToFirebase();
  }

  subscribeToFirebase() {
    const msgRef = window.firebase.database().ref('messages');

    msgRef.on('value', snapshot =>
      snapshot.forEach(childSnapshot => {
        const msg = childSnapshot.val();

        this.setState(state => ({
          messages: {
            ...state.messages,
            [msg.id]: msg,
          }
        }));
      })
    );
  }

  render() {
    const { messages } = this.state;
    const ids = Object.keys(messages);

    return (
      <ul className="message-list">
        {
          ids.map(id => <Message key={id} { ...messages[id] } />)
        }
      </ul>
    );
  }
}