import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import API from "../../api";

function ViewQuotes() {
  const { token } = useAuth();
  const { cargoId } = useParams();
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await API.get(`/api/quotes/${cargoId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuotes(response.data.quotes);
      } catch (error) {
        setError("Failed to load quotes!");
      }
    };

    fetchQuotes();
  }, []);

  const handleAccept = async (quoteId) => {
    try {
      await API.put(
        `/api/quotes/${quoteId}/accept`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert("Quote Accepted!");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-700">Quotes Received</h1>

      {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

      <div className="mt-8 grid grid-cols-1 gap-4">
        {quotes.length === 0 ? (
          <p className="text-gray-500 text-center">No quotes received yet!</p>
        ) : (
          quotes.map((quote) => (
            <div key={quote._id} className="bg-white p-6 rounded-xl shadow">
              <p className="text-2xl font-bold text-orange-500">
                ₹{quote.price}
              </p>
              <p className="text-gray-500 mt-1">{quote.message}</p>
              <p className="text-sm text-gray-400 mt-1">
                Status: {quote.status}
              </p>
              <button
                onClick={() => handleAccept(quote._id)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Accept Quote
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewQuotes;
