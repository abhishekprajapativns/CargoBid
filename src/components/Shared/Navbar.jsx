import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex items-center fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-blue-600">CargoBid</h1>
        </div>

        {/* Menu */}
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/">How it Works</Link>
          </li>

          {user ? (
            <>
              <li className="text-blue-600 font-semibold">
                Hi, {user.firstName}! 👋
              </li>
              <li
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="hover:text-red-500 cursor-pointer"
              >
                Logout
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/login">Login</Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>

        {/* Button */}
        <div className="ml-8">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
