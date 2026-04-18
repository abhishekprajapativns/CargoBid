import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ShipperDashboard from "./pages/ShipperDashboard";
import TransporterDashboard from "./pages/TransporterDashboard";
import Navbar from "./components/Shared/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shipper/dashboard" element={<ShipperDashboard />} />
            <Route
              path="/transporter/dashboard"
              element={<TransporterDashboard />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
