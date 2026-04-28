import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function AvailableCargos() {
  const { token } = useAuth();
  const [cargos, setCargos] = useState([]);
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [quoteData, setQuoteData] = useState({ price: "", message: "" });
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCargos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/cargo/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setCargos(response.data.cargos);
      } catch (error) {
        setError("Failed to load cargos!");
      }
    };

    fetchCargos();
  }, []);

  const handleSubmitQuote = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/quotes/place",
        {
          cargoId: selectedCargo,
          price: quoteData.price,
          message: quoteData.message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
      setSelectedCargo(null);
      setQuoteData({ price: "", message: "" });
      alert("Quote submitted successfully! ");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-700">Available Cargos</h1>

      {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

      {successMsg && (
        <p className="text-green-500 font-semibold mt-2">{successMsg}</p>
      )}

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
              <p className="text-blue-500 font-bold">Budget: ₹{cargo.budget}</p>
              <button
                onClick={() => setSelectedCargo(cargo._id)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Place Quote
              </button>

              {selectedCargo === cargo._id && (
                <div className="mt-6 bg-white p-6 rounded-xl shadow">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Place Your Quote
                  </h3>

                  <input
                    type="number"
                    placeholder="Your Price (₹)"
                    value={quoteData.price}
                    onChange={(e) =>
                      setQuoteData({ ...quoteData, price: e.target.value })
                    }
                    className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-600"
                  />

                  <textarea
                    placeholder="Message (optional)"
                    value={quoteData.message}
                    onChange={(e) =>
                      setQuoteData({ ...quoteData, message: e.target.value })
                    }
                    className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-600 resize-none"
                    rows={3}
                  />

                  <button
                    onClick={handleSubmitQuote}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold"
                  >
                    Submit Quote
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AvailableCargos;
