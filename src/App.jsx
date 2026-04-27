import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ShipperDashboard from "./pages/ShipperDashboard";
import TransporterDashboard from "./pages/TransporterDashboard";
import Navbar from "./components/Shared/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PostCargo from "./pages/shipper/PostCargo";
import AvailableCargos from "./pages/transporter/AvailableCargos";
import ViewQuotes from "./pages/shipper/ViewQuotes";

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
            <Route
              path="/shipper/dashboard"
              element={
                <ProtectedRoute role="shipper">
                  <ShipperDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/transporter/dashboard"
              element={
                <ProtectedRoute role="transporter">
                  <TransporterDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/post-cargo"
              element={
                <ProtectedRoute role="shipper">
                  <PostCargo />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="/available-cargos"
              element={
                <ProtectedRoute role="transporter">
                  <AvailableCargos />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path="/shipper/quotes/:cargoId"
              element={
                <ProtectedRoute role="shipper">
                  <ViewQuotes />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
