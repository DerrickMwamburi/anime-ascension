import MerchList from '../components/MerchList';

function MerchPage() {
  return (
    <section className="shared-background container mx-auto py-8">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Anime Merch</h2>
        <MerchList />
      </div>
    </section>
  );
}

export default MerchPage;