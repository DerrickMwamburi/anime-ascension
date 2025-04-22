const API_URL = 'http://localhost:3000';

export const postInquiry = async (inquiry) => {
  try {
    const response = await fetch(`${API_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiry),
    });
    if (!response.ok) throw new Error('Failed to submit inquiry');
    return await response.json();
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getStreamingPlatforms = async () => {
  try {
    const response = await fetch(`${API_URL}/streamingPlatforms`);
    if (!response.ok) throw new Error('Failed to fetch streaming platforms');
    return await response.json();
  } catch (error) {
    console.error('Error fetching streaming platforms:', error);
    return [];
  }
};