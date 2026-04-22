import heroBg from "../assets/images.1.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center pt-32"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Bid Low, Ship Smart
        </h1>
        <p className="text-gray-200 mt-4 text-xl">
          Post your cargo, let transporters compete, save money!
        </p>

        <div className="mt-8 flex gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/register?role=shipper")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full"
          >
            I am Shipper
          </button>

          <button
            onClick={() => navigate("/register?role=transporter")}
            className="bg-orange-500 text-white px-6 py-3 rounded-full"
          >
            I am Transporter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
