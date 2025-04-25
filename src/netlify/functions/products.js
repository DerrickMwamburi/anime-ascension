const { getStore } = require('@netlify/blobs');

exports.handler = async (event, context) => {
  try {
    const store = getStore({ name: 'anime-ascension-data' });
    let data = await store.get('data', { type: 'json' });

    if (!data) {
      data = require('../data.json');
      await store.setJSON('data', data);
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data.products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch products' }),
    };
  }
};