import Navbar from "./components/Shared/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
