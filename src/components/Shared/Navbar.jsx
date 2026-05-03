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
          <h1 className="text-2xl font-bold text-blue-600">
            <span className="text-blue-700">Cargo</span>
            <span className="text-orange-500">Bid</span>
          </h1>
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
              <li className="hover:text-orange-500 cursor-pointer">
                <Link
                  to={
                    user.role === "shipper"
                      ? "/shipper/dashboard"
                      : "/transporter/dashboard"
                  }
                >
                  Dashboard
                </Link>
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
            </>
          )}
        </ul>

        {/* Button */}
        <div className="ml-8">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-700 text-white px-5 py-2 rounded-full"
          >
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
