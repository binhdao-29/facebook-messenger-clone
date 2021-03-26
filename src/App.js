import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

import Message from './Message';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hello', 'Hi', 'Whats up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    //all the logic send a message goes
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1> Clever Programing</h1>
      <form>
        <FormControl>
          <InputLabel>Send a message...</InputLabel>
          <Input value={input} onChange={event  => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" type="submit" 
                  color="primary" onClick={sendMessage} >
                  Send Message
          </Button>
        </FormControl>
      </form>
      {
        messages.map(message => (
          <Message text={message}/>
        ))
      }
    </div>
  );
}

export default App;
