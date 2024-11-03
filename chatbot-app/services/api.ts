// api.ts
import axios from 'axios';

const BASE_URL = 'https://huggingface.co/spaces/AtleeBugs/ConstitutionRAG'; // GPT-2 model
const API_KEY = 'API_Key'; // Replace with your Hugging Face API key

const huggingFaceApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const getChatbotResponse = async (input: string) => {
  try {
    const response = await huggingFaceApi.post('', { inputs: input });
    
    // Log the API response for debugging
    console.log('API Response:', response.data);

    // Handle response and return the generated text
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0].generated_text;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Error fetching response from Hugging Face:', error);
    throw error;
  }
};
