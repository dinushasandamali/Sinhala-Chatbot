// services/api.ts
import axios from 'axios';

const API_URL = 'http://54.152.223.219:8000/process';

export const getChatbotResponse = async (message: string) => {
  try {
    const response = await axios.post(
      API_URL,
      { message },
      { headers: { 'Content-Type': 'application/json' } }
    );
    // Assuming the response from FastAPI is in the format: { "response": "Bot's reply" }
    return response.data.response;
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    throw error;
  }
};
