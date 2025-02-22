import { useEffect } from "react";
import useAuthStore from "../utilities/authStore";

function History() {
  const { history, fetchHistory } = useAuthStore();

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  if (!history.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">No history available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Prediction History</h1>
        {history.map((entry, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600 text-sm">Timestamp:</p>
              <p className="text-gray-800 text-sm">
                {new Date(entry.timestamp).toLocaleString()}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Section */}
              <div>
                <h2 className="text-xl font-semibold mb-2">Input</h2>
                <p>
                  <span className="font-medium">Vehicle Type:</span>{" "}
                  {entry.vehicle_type}
                </p>
                <p>
                  <span className="font-medium">Fuel Type:</span>{" "}
                  {entry.fuel_type}
                </p>
                <p>
                  <span className="font-medium">Age:</span> {entry.age}
                </p>
                <p>
                  <span className="font-medium">Speed:</span> {entry.speed}
                </p>
              </div>

              {/* Output Section */}
              <div>
                <h2 className="text-xl font-semibold mb-2">Output</h2>
                <p>
                  <span className="font-medium">CO2:</span> {entry.gaCo2}
                </p>
                <p>
                  <span className="font-medium">Total Energy Rate:</span>{" "}
                  {entry.gaTotalEnergyRate}
                </p>
                <p>
                  <span className="font-medium">NOx:</span> {entry.gaNOx}
                </p>
                <p>
                  <span className="font-medium">PM2.5 Brake Wear:</span>{" "}
                  {entry["gaPM2.5BrakeWear"]}
                </p>
                <p>
                  <span className="font-medium">PM2.5 Tire Wear:</span>{" "}
                  {entry["gaPM2.5TireWear"]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
