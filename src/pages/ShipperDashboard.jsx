import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function ShipperDashboard() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    const fetchCargos = async () => {
      const response = await API.get("/api/cargo/my-cargos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCargos(response.data.cargos);
    };

    fetchCargos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.firstName}!
        </h1>
        <button
          onClick={() => navigate("/post-cargo")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
        >
          + Post New Shipment
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-blue-600">{cargos.length}</p>
          <p className="text-gray-500 mt-2">Total Cargos Posted</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-blue-600">0</p>
          <p className="text-gray-500 mt-2">Active Bids</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-blue-600">0</p>
          <p className="text-gray-500 mt-2">Completed Shipments</p>
        </div>
      </div>

      {/* Shipments List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">My Shipments</h2>

        {cargos.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No shipments posted yet!
          </p>
        ) : (
          cargos.map((cargo) => (
            <div key={cargo._id} className="border p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{cargo.cargoType}</h3>
                <span className="text-blue-600 font-semibold">
                  ₹{cargo.budget}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {cargo.pickupLocation} → {cargo.deliveryLocation}
              </p>
              <p className="text-gray-400 text-sm">
                Pickup: {cargo.pickupDate}
              </p>

              {/* ✅ Button yahan hona chahiye */}
              <button
                onClick={() => navigate(`/shipper/quotes/${cargo._id}`)}
                className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm"
              >
                View Quotes
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShipperDashboard;
