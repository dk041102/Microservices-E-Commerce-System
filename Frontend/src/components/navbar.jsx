import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { count } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
          shop<span className="text-indigo-600">.</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Products
          </Link>

          {user ? (
            <>
              <Link to="/orders" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                My Orders
              </Link>
              <button
                onClick={logout}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Sign up
              </Link>
            </>
          )}

          <Link to="/cart" className="relative">
            <svg className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
