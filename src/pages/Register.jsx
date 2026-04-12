function Register() {
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
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        <select name="role" className="w-full border p-3 rounded-lg mb-4">
          <option value="">Select Role</option>
          <option value="shipper">Shipper</option>
          <option value="transporter">Transporter</option>
        </select>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
