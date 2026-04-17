import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [searchparam] = useSearchParams();
  const roleFromUrl = searchparam.get("role");

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

  const handleSubmit = (clickEvent) => {
    clickEvent.preventDefault();
    console.log(registerData);
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

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
