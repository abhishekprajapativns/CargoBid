import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostCargo() {
  const navigate = useNavigate();

  const [cargoData, setCargoData] = useState({
    cargoType: "",
    weight: "",
    pickupLocation: "",
    deliveryLocation: "",
    pickupDate: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    setCargoData({ ...cargoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:5000/api/cargo/post",
      cargoData,
    );
    console.log(response.data);
    navigate("/shipper/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 text-center">
        Post Your Cargo
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow mt-8">
        <form onSubmit={handleSubmit}>
          {/* Cargo Type */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-blue-700 mb-1">
              Cargo Type
            </label>
            <select
              name="cargoType"
              value={cargoData.cargoType}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Food">Food</option>
              <option value="Machinery">Machinery</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Weight */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-blue-700 mb-1">
              Weight (kg)"
            </label>

            <input
              type="number"
              name="weight"
              value={cargoData.weight}
              onChange={handleChange}
              placeholder="Enter weight in kg"
              className="
              w-full
              border
              p-3
              rounded-lg
              outline-none
              focus:border-blue-500"
            />
          </div>

          {/* Pickup Location */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-blue-700 mb-1">
              Pickup Location
            </label>

            <input
              type="text"
              name="pickupLocation"
              value={cargoData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g.Mumbai"
              className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* delivery Location */}

          <div className="mb-4">
            <label className="block text-sm font-semibold text-blue-700 mb-1">
              Delivery Location
            </label>
            <input
              type="text"
              name="deliveryLocation"
              value={cargoData.deliveryLocation}
              onChange={handleChange}
              placeholder="e.g. Delhi"
              className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* Pickup Date */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-blue-700 mb-1">
              Pickup Date
            </label>
            <input
              type="date"
              name="pickupDate"
              value={cargoData.pickupDate}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* Buget*/}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-blue-700 mb-1">
              Budget (₹)
            </label>
            <input
              type="text"
              name="budget"
              value={cargoData.budget}
              onChange={handleChange}
              placeholder="e.d. 5000"
              className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/*  Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-blue-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={cargoData.description}
              onChange={handleChange}
              placeholder="Any special instructions..."
              rows={3}
              className="w-full border p-3 rounded-lg outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-500"
          >
            Post Cargo
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostCargo;
