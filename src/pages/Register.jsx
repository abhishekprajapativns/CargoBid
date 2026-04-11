function Register() {
  return (
    <div>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="tel" name="phone" placeholder="Phone Number" />

      <select name="role">
        <option value="">Select Role</option>
        <option value="shipper">Shipper</option>
        <option value="transporter">Transporter</option>
      </select>

      <button type="submit">Register</button>
    </div>
  );
}
export default Register;
