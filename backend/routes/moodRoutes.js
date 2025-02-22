const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// POST route for submitting mood
router.post('/', async (req, res) => {
  const { mood, notes } = req.body;
  try {
    const newMood = new Mood({ mood, notes });
    await newMood.save();
    res.status(200).json({ message: 'Mood saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving mood', error });
  }
});

module.exports = router;
