import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input } from '@material-ui/core';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import Message from './Message';
import db from './firebase';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', "desc")
      .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message : doc.data()})));
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    //all the logic send a message goes
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img 
      src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-3&_nc_sid=6825c5&_nc_ohc=aesj5-dDN_oAX8sqKkD&_nc_ht=scontent.fhan2-5.fna&oh=54dc26bcd7e01d1cc6b339d275483785&oe=60853FFD"
      alt="messenger logo" />
      <h1>Messenger</h1>
      <h2>Welcome to Messenger, {username || 'Unknown User'}!</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" value={input} placeholder="Send a message..." 
                onChange={event  => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" type="submit" 
                      color="primary" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
