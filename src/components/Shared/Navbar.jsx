function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">CargoBid</h1>

      <ul className="flex gap-6 list-none">
        <li>Home</li>
        <li>How it Works</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </nav>
  );
}

export default Navbar;
