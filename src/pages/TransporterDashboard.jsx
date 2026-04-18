import { useAuth } from "../context/AuthContext";

function TransporterDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.firstName}!
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-blue-600">0</p>
          <p className="text-gray-500 mt-2">Total Bids Placed</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-blue-600">0</p>
          <p className="text-gray-500 mt-2">Bids Won</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-4xl font-bold text-blue-600">0</p>
          <p className="text-gray-500 mt-2">Completed Shipments</p>
        </div>
      </div>

      {/* Available Shipments */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Available Shipments</h2>
        <p className="text-gray-500 text-center py-8">
          No shipments available right now!
        </p>
      </div>
    </div>
  );
}

export default TransporterDashboard;
