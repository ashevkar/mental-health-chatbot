const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const moodRoutes = require('./routes/moodRoutes');

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // Consider adding configuration if needed

const PORT = process.env.PORT || 5002;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Listener for MongoDB connection errors
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

console.log("Server is starting...");

// Default route

app.get("/", (req, res) => {
  res.send("Mental Health Chatbot API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use('/api/mood', moodRoutes);
