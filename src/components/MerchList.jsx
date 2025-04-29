import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../services/api';

function MerchList() {
  const [categorizedProducts, setCategorizedProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        // Group products by category
        const grouped = data.reduce((acc, product) => {
          const category = product.category || 'Other';
          acc[category] = acc[category] || [];
          acc[category].push(product);
          return acc;
        }, {});
        setCategorizedProducts(grouped);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  // Define category display names
  const categoryNames = {
    Shirts: 'Anime Shirts',
    Manga: 'Manga Volumes',
    Figures: 'Action Figures',
    Costumes: 'Cosplay Costumes',
    Hoodies: 'Anime Hoodies',
    Accessories: 'Anime Accessories',
    Posters: 'Posters',
    Masks: 'Masks',
    Mugs: 'Mugs',
    KeyChains: 'Keychains',
    WallScrolls: 'Wall Scrolls',
    Accesories: 'Accessories',
    Stationery: 'Stationery',
    Blurays: 'Blu-rays',
    Other: 'Miscellaneous',
  };

  return (
    <div className="space-y-12">
      {Object.keys(categorizedProducts).length > 0 ? (
        Object.keys(categorizedProducts).map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {categoryNames[category] || category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categorizedProducts[category].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No products available.</p>
      )}
    </div>
  );
}

export default MerchList;