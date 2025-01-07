// openaiService.js
import axios from 'axios';

const apiKey = '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';

export const createCompletion = async (messages) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: messages,
        temperature: 0.5,
        max_tokens: 500,
        top_p: 1,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error creating completion:', error);
    throw error;
  }
};
