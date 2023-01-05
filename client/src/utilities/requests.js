import axios from 'axios';

export async function evaluateArithmetic(expression) {
  const requestData = {
    expression: expression,
  };

  try {
    const result = await axios.post(
      'http://localhost:8000/arithmetic/',
      requestData
    );
    return result.data.response;
  } catch (error) {
    console.error('Error:', error);
  }
}
