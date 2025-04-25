import { useState } from 'react';
import { submitInquiry } from '../services/api';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    try {
      const inquiry = { name, email, message };
      const response = await submitInquiry(inquiry);
      setSuccess(response.message);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-anime-blue focus:border-anime-blue"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-anime-blue focus:border-anime-blue"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="4"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-anime-blue focus:border-anime-blue"
        />
      </div>
      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}
      <button
        type="submit"
        className="w-full bg-anime-blue text-white py-2 rounded-lg hover:bg-anime-pink transition"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;