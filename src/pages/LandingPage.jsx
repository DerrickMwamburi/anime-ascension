import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <section className="container mx-auto py-12 text-center">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Anime Ascension</h2>
        <p className="text-lg text-gray-600 mb-6">
        Kenya's gateway to authentic anime culture. Shop exclusive merch, discover 
        streaming platforms, and join our vibrant community.
        </p>
        <Link
          to="/merch"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Explore Merch
        </Link>
      </div>
    </section>
  );
}

export default LandingPage;