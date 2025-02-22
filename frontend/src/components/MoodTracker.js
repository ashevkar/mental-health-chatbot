import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = () => {
    // Send the mood and notes to the server (use API for backend integration)
    console.log('Mood:', mood);
    console.log('Notes:', notes);
    setSubmitted(true);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Track Your Mood
      </Typography>
      <TextField
        label="How are you feeling today?"
        fullWidth
        variant="outlined"
        value={mood}
        onChange={handleMoodChange}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Any thoughts or feelings you'd like to share?"
        fullWidth
        variant="outlined"
        value={notes}
        onChange={handleNotesChange}
        sx={{ marginBottom: 2 }}
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Mood
      </Button>
      {submitted && (
        <Typography variant="body1" color="green" sx={{ marginTop: 2 }}>
          Your mood has been tracked!
        </Typography>
      )}
    </Box>
  );
};

export default MoodTracker;
