import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Register() {
  const { login } = useAuth();
  const [searchparam] = useSearchParams();
  const navigate = useNavigate();
  const roleFromUrl = searchparam.get("role");
  const [error, setError] = useState("");

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: roleFromUrl || "",
  });

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (clickEvent) => {
    clickEvent.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        registerData,
      );

      login(response.data.user, response.data.token);
      console.log(response.data);

      if (registerData.role === "shipper") {
        navigate("/shipper/dashboard");
      } else {
        navigate("/transporter/dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={registerData.firstName}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={registerData.lastName}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <div className="flex items-center border rounded-lg mb-4 overflow-hidden">
          <span className="bg-gray-100 px-3 py-3 text-gray-600 border-r">
            +91
          </span>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            maxLength={10}
            value={registerData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 outline-none focus:border-blue-500"
          />
        </div>

        {!roleFromUrl && (
          <select
            name="role"
            value={registerData.role}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          >
            <option value="">Select Role</option>
            <option value="shipper">Shipper</option>
            <option value="transporter">Transporter</option>
          </select>
        )}

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
        >
          Register
        </button>

        <p class="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" class="text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
