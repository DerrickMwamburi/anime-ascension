function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          <p className="text-blue-600 font-bold mt-2">${product.price}</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;