import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Anime Ascension
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Kenya's gateway to authentic anime culture. Shop exclusive merch, discover
          streaming platforms, and join our vibrant community.
        </p>
        <Link
          to="/merch"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Explore Merch
        </Link>
      </div>
    </section>
  );
}

export default LandingPage;