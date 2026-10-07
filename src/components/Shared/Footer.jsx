import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 border-t-4 border-orange-500 px-8 py-5 flex justify-between items-center">
      <div className="text-lg font-black text-white">
        Cargo<span className="text-orange-500">Bid</span>
      </div>
      <div className="flex gap-6">
        {["Home", "How it Works", "Login", "Register"].map((l, i) => (
          <span
            key={i}
            className="text-xs text-gray-500 cursor-pointer hover:text-gray-300"
          >
            {l}
          </span>
        ))}
      </div>
      <div className="text-xs text-gray-600">
        © 2026 CargoBid. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
