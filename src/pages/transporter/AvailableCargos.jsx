import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function AvailableCargos() {
  const { token } = useAuth();
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    const fetchCargos = async () => {
      const response = await axios.get("http://localhost:5000/api/cargo/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCargos(response.data.cargos);
    };

    fetchCargos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-700">Available Cargos</h1>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {cargos.length === 0 ? (
          <p className="text-gray-500 text-center">No cargos available!</p>
        ) : (
          cargos.map((cargo) => (
            <div key={cargo._id} className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-bold text-blue-700">
                {cargo.cargoType}
              </h2>
              <p className="text-gray-500">
                {cargo.pickupLocation} → {cargo.deliveryLocation}
              </p>
              <p className="text-gray-500">Weight: {cargo.weight} kg</p>
              <p className="text-orange-500 font-bold">
                Budget: ₹{cargo.budget}
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Place Quote
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AvailableCargos;
