import { getAuth } from 'firebase/auth';

const API_BASE_URL = '/.netlify/functions';

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getStreamingPlatforms = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/streaming_platforms`);
    if (!response.ok) {
      throw new Error('Failed to fetch streaming platforms');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching streaming platforms:', error);
    throw error;
  }
};

export const submitInquiry = async (inquiry) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      throw new Error('You must be logged in to submit an inquiry.');
    }

    const response = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...inquiry,
        created_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit inquiry');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    throw error;
  }
};