import { useState, useEffect } from 'react';
import StreamingLink from '../components/StreamingLink';
import { getStreamingPlatforms } from '../services/api';

function StreamingPage() {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      setLoading(true);
      try {
        const data = await getStreamingPlatforms();
        setPlatforms(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load streaming platforms');
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  if (loading) {
    return <div className="text-center py-8 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <section className="container mx-auto py-8">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Streaming Recommendations</h2>
        <div className="space-y-4">
          {platforms.length > 0 ? (
            platforms.map((platform) => (
              <StreamingLink key={platform.id} platform={platform} />
            ))
          ) : (
            <p className="text-center text-gray-600">No streaming platforms available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default StreamingPage;