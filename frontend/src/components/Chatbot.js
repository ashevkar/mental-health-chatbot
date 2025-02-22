import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chat, setChat] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    // Send the user input to the backend and get a response (AI processing)
    const response = "I'm here for you! How can I help you today?"; // Placeholder AI response
    setChat([...chat, { sender: 'user', message: userInput }, { sender: 'bot', message: response }]);
    setUserInput('');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Mental Health Support Chatbot
      </Typography>
      <Box sx={{ maxHeight: '400px', overflowY: 'auto', marginBottom: 2 }}>
        {chat.map((msg, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography variant="body1" color={msg.sender === 'user' ? 'blue' : 'green'}>
              {msg.sender === 'user' ? 'You: ' : 'Bot: '}
              {msg.message}
            </Typography>
          </Box>
        ))}
      </Box>
      <TextField
        label="Type your message..."
        fullWidth
        variant="outlined"
        value={userInput}
        onChange={handleUserInput}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
};

export default Chatbot;
