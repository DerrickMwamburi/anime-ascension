import MerchList from '../components/MerchList';

function MerchPage() {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Anime Merch</h2>
      <MerchList />
    </section>
  );
}

export default MerchPage;