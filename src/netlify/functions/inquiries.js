const { getStore } = require('@netlify/blobs');

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method not allowed' }),
      };
    }

    const body = JSON.parse(event.body);
    const { name, email, message, created_at } = body;

    if (!name || !email || !message || !created_at) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' }),
      };
    }

    const store = getStore({ name: 'anime-ascension-data' });
    let data = await store.get('data', { type: 'json' });

    if (!data) {
      data = require('../data.json');
    }

    data.inquiries.push({ name, email, message, created_at });
    await store.setJSON('data', data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Inquiry submitted successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit inquiry' }),
    };
  }
};