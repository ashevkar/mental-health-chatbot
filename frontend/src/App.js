import React from 'react';
import MoodTracker from './components/MoodTracker';
import Chatbot from './components/Chatbot';
import { Box, Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Your Mental Health Assistant
        </Typography>
        <MoodTracker />
        <Chatbot />
      </Box>
    </Container>
  );
};

export default App;
