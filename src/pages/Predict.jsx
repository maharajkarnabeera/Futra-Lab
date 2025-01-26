import { useState } from "react";
function Predict() {

  const [results] = useState({
    CO2: "150",
    NOx: "30",
    PM25T: "0.5",
    PM25B: "0.2",
    energyConsumption: "2500",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const vehicleType = e.target.vehicleType?.value; // Using name attribute
    const fuelType = e.target.fuelType?.value;
    const age = e.target.age?.value;
    const trafficSpeed = e.target.trafficSpeed?.value;

    console.log(vehicleType, fuelType, age, trafficSpeed);

  }
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto space-y-8">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Vehicle Emissions and Energy Results
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
           <select
              name="vehicleType"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
              <option value="SUV">SUV</option>
              <option value="Motorcycle">Motorcycle</option>
            </select>
            <select
              name="fuelType"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
              <option value="CNG">CNG</option>
            </select>
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="trafficSpeed"
              placeholder="Traffic Speed"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="text-gray-600">CO2 (gr/mile)</p>
              <h3 className="text-xl font-bold">{results.CO2}</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="text-gray-600">NOx (gr/mile)</p>
              <h3 className="text-xl font-bold">{results.NOx}</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="text-gray-600">PM2.5 (T)</p>
              <h3 className="text-xl font-bold">{results.PM25T}</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="text-gray-600">PM2.5 (B)</p>
              <h3 className="text-xl font-bold">{results.PM25B}</h3>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="text-gray-600">Energy Consumption (KJ/mile)</p>
              <h3 className="text-xl font-bold">{results.energyConsumption}</h3>
            </div>
          </div>
        </div>

        {/* View Graphs Button */}
        <div>
          <button className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            View Graphs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Predict