const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  mood: String,
  notes: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mood', moodSchema);
