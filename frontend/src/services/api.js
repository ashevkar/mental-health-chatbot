import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

export const submitMood = async (moodData) => {
  try {
    const response = await api.post('/mood', moodData);
    return response.data;
  } catch (error) {
    console.error("Error submitting mood:", error);
  }
};

export default api;
