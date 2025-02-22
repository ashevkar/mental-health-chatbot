# AI-Powered Mental Health Chatbot & Mood Tracker

## 🚀 Project Overview

This project aims to provide mental health support through a chatbot and mood tracker. Users can track their mood daily using surveys and text inputs. The AI-based chatbot offers real-time conversation and mental well-being support, while users can gain insights into their mood patterns and stress levels over time.

### ✅ Features
- **Daily mood tracking**: Short surveys and text inputs to track the user's mood.
- **AI-based chatbot**: Real-time support for mental health with NLP.
- **Mood Insights**: Analyze mood patterns and stress levels over time.

## 💡 Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js & Express.js
- **Database**: MongoDB
- **Real-time Communication**: WebSockets (Socket.io)
- **AI Support**: Natural Language Processing (NLP) for the chatbot (using pre-trained models or custom solution)
- **Authentication**: JWT for secure authentication

## 🧠 How It Works

### 1. **User Mood Tracking**
   - **Frontend**: Users will fill out short surveys or provide text inputs to log their mood.
   - **Backend**: The mood data is sent to the server and stored in MongoDB. You can structure the database to store daily mood logs with timestamps.
   
### 2. **AI Chatbot**
   - **Frontend**: The chatbot interface is built using React.js. The user can chat with the bot for mental health support.
   - **Backend**: The AI (either custom or using NLP models like GPT) processes user inputs and provides real-time responses.
   
### 3. **Mood Insights**
   - **Frontend**: The app will show graphs and insights into mood patterns based on the data stored in the database.
   - **Backend**: Server-side code aggregates mood logs and calculates trends like average mood, stress level, etc.

## 🔧 Technologies Used

- **React.js**: Building the user interface and chat interface.
- **Node.js & Express.js**: Setting up the server, API endpoints, and real-time communication.
- **MongoDB**: Storing user mood logs and chatbot conversations.
- **Socket.io**: Real-time communication for the chatbot.
- **JWT**: Secure user authentication.
- **OpenAI GPT API** (or any NLP model): Provides AI-based responses for the chatbot.

## 📊 Data Flow

1. **Frontend** collects mood data via surveys and text inputs.
2. The data is sent via **REST API** to the **backend** (Node.js/Express).
3. The backend stores the mood logs in **MongoDB** and processes chatbot interactions.
4. The **AI Chatbot** responds in real-time using **NLP models** or APIs.
5. **Insights** are generated from the mood data to show trends over time.

## 🎯 Next Steps / Roadmap

1. **User Authentication**: Implement user registration and login with JWT.
2. **AI Model Tuning**: Fine-tune the NLP model or integrate a more sophisticated chatbot for mental health.
3. **Mood Analytics**: Improve mood analysis algorithms and visualize them with charts or graphs.
4. **Deployment**: Deploy the project on a platform like Heroku, AWS, or DigitalOcean.
5. **Mobile App**: Develop a mobile version of the app for wider accessibility.

## 📝 Contributing

Feel free to contribute to this project by submitting issues, pull requests, or suggesting new features.