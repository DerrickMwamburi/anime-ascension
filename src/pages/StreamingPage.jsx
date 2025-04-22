import StreamingLink from '../components/StreamingLink';

function StreamingPage() {
  // Hardcoded streaming platforms (can be fetched from API later)
  const streamingPlatforms = [
    {
      name: 'Crunchyroll',
      url: 'https://www.crunchyroll.com',
      image: 'https://via.placeholder.com/100x100?text=Crunchyroll',
      description: 'Watch the latest anime episodes and movies with subtitles.',
    },
    {
      name: 'Funimation',
      url: 'https://www.funimation.com',
      image: 'https://via.placeholder.com/100x100?text=Funimation',
      description: 'Stream dubbed and subbed anime, including exclusive titles.',
    },
    {
      name: 'Netflix',
      url: 'https://www.netflix.com',
      image: 'https://via.placeholder.com/100x100?text=Netflix',
      description: 'Enjoy a growing library of anime series and movies.',
    },
  ];

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Streaming Recommendations</h2>
      <div className="space-y-4">
        {streamingPlatforms.map((platform, index) => (
          <StreamingLink key={index} platform={platform} />
        ))}
      </div>
    </section>
  );
}

export default StreamingPage;