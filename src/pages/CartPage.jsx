import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="container mx-auto py-8">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600">Your cart is empty.</p>
            <Link
              to="/merch"
              className="mt-4 inline-block bg-anime-blue text-white py-2 px-4 rounded hover:bg-anime-pink transition"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">KSh {item.price.toLocaleString()} each</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right mt-4">
              <p className="text-lg font-semibold text-gray-800">
                Total: KSh {totalPrice.toLocaleString()}
              </p>
              <button className="mt-2 bg-anime-blue text-white py-2 px-4 rounded hover:bg-anime-pink transition">
                Checkout (Coming Soon)
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPage;