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
              <option value="Combination long-haul Truck">Combination long-haul Truck</option>
              <option value="Combination short-haul Truck">Combination short-haul Truck</option>
              <option value="Light Commercial Truck">Light Commercial Truck</option>
              <option value="Motorhome - Recreational Vehicle">Motorhome - Recreational Vehicle</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Other Buses">Other Buses</option>
              <option value="Passenger Truck">Passenger Truck</option>
              <option value="Refuse Truck">Refuse Truck</option>
              <option value="School Bus">School Bus</option>
              <option value="Single Unit long-haul Truck">Single Unit long-haul Truck</option>
              <option value="Single Unit short-haul Truck">Single Unit short-haul Truck</option>
              <option value="Transit Bus">Transit Bus</option>
            </select>
            <select
              name="fuelType"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Fuel Type</option>
              <option value="Compressed Natural Gas - CNG">Compressed Natural Gas - CNG</option>
              <option value="Diesel Fuel">Diesel Fuel</option>
              <option value="Electricity">Electricity</option>
              <option value="Ethanol - E-85">Ethanol - E-85</option>
              <option value="Gasoline">Gasoline</option>
            </select>
            <input
              type="number"
              name="age(year)"
              placeholder="Age(Year)"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="speed(mph)"
              placeholder="Speed(MPH)"
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