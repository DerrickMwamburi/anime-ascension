import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="w-48 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        {/* Format price to Kenyan Shillings */}
        <p className="text-blue-600 font-bold mt-2">KSh {product.price.toLocaleString()}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-anime-blue text-white py-2 rounded hover:bg-anime-pink transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;