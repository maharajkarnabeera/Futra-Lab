import { useState } from "react";
import api from "../utilities/api";
import useLoadingStore from "../utilities/loadingStore"; 
import usePredictionStore from "../utilities/usePredictionStore";
import PredictionCharts from "./PredictionCharts";

function Predict() {
  const [isPredictClicked, setIsPredictClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showLoader, hideLoader } = useLoadingStore();
  const { setPrediction } = usePredictionStore(); 

  const [error, setError] = useState("");
  const [output, setOutput] = useState({
    gaCo2: "",
    gaTotalEnergyRate: "",
    gaNOx: "",
    "gaPM2.5BrakeWear": "",
    "gaPM2.5TireWear": "",
  });
  const [inputData, setInputData] = useState({
    vehicleType: "",
    fuelType: "",
    age: "",
    trafficSpeed: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };
  const isFormValid = inputData.vehicleType && 
  inputData.fuelType && inputData.age 
  && inputData.trafficSpeed 
  && inputData.city;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPredictClicked(true);
    showLoader();
    setLoading(true);
    setError(""); // reset error state
    try {
      const payload = {
        inputData: {
          Age: inputData.age,
          Speed: inputData.trafficSpeed,
          "Vehicle Type": inputData.vehicleType,
          "Fuel Type": inputData.fuelType,
          City: inputData.city,
        },
      };
      const response = await api.post("/predict/", payload);
      console.log("API response:", response.data);
      const extendedData = { ...response.data, "speed": inputData.trafficSpeed };
      setPrediction(extendedData);
      setOutput(response.data);
    } catch (error) {
      console.error("Error during prediction:", error);
      setError("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
      hideLoader();
      console.log("Submitted data:", inputData);
    }
  };
  
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
              name="city"
              value={inputData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select City</option>
              <option value="Georgia">Georgia</option>
            </select>
            <select
              name="vehicleType"
              value={inputData.vehicleType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Vehicle Type</option>
              <option value="Combination long-haul Truck">
                Combination long-haul Truck
              </option>
              <option value="Combination short-haul Truck">
                Combination short-haul Truck
              </option>
              <option value="Light Commercial Truck">
                Light Commercial Truck
              </option>
              <option value="Motorhome - Recreational Vehicle">
                Motorhome - Recreational Vehicle
              </option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Other Buses">Other Buses</option>
              <option value="Passenger Truck">Passenger Truck</option>
              <option value="Refuse Truck">Refuse Truck</option>
              <option value="School Bus">School Bus</option>
              <option value="Single Unit long-haul Truck">
                Single Unit long-haul Truck
              </option>
              <option value="Single Unit short-haul Truck">
                Single Unit short-haul Truck
              </option>
              <option value="Transit Bus">Transit Bus</option>
            </select>

            <select
              name="fuelType"
              value={inputData.fuelType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Fuel Type</option>
              <option value="Compressed Natural Gas - CNG">
                Compressed Natural Gas - CNG
              </option>
              <option value="Diesel Fuel">Diesel Fuel</option>
              <option value="Electricity">Electricity</option>
              <option value="Ethanol - E-85">Ethanol - E-85</option>
              <option value="Gasoline">Gasoline</option>
            </select>

            <input
              type="number"
              name="age"
              placeholder="Age (Year)"
              value={inputData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              name="trafficSpeed"
              placeholder="Speed (MPH)"
              value={inputData.trafficSpeed}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="col-span-2">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full px-4 py-2 text-white rounded transition ${
                  isFormValid ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Predict
              </button>
            </div>
          </form>
        </div>
        {isPredictClicked && (
          <>
            {loading ? (
              <p className="text-center text-xl">Loading...</p>
            ) : error ? (
              <p className="text-center text-xl text-red-600">{error}</p>
            ) : (
              <>
                <div className="mb-6 text-left pl-4">
                  <h2 className="text-3xl font-extrabold text-gray-800">Results</h2>
                  <p className="text-gray-500 mt-1 text-sm italic">
                      Here&apos;s what we found based on your vehicle and traffic data.
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 rounded"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-100 p-4 rounded shadow-sm">
                  <p className="text-gray-600">CO2</p>
                  <h3 className="text-xl font-bold">{Number(output.gaCo2).toFixed(4)}</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow-sm">
                  <p className="text-gray-600">NOx (gr/mile)</p>
                  <h3 className="text-xl font-bold">{Number(output.gaNOx).toFixed(4)}</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow-sm">
                  <p className="text-gray-600">PM2.5 (T)</p>
                  <h3 className="text-xl font-bold">
                    {Number(output["gaPM2.5TireWear"]).toFixed(4)}
                  </h3>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow-sm">
                  <p className="text-gray-600">PM2.5 (B)</p>
                  <h3 className="text-xl font-bold">
                    {Number(output["gaPM2.5BrakeWear"]).toFixed(4)}
                  </h3>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow-sm">
                  <p className="text-gray-600">Energy Consumption (KJ/mile)</p>
                  <h3 className="text-xl font-bold">
                    {Number(output.gaTotalEnergyRate).toFixed(4)}
                  </h3>
                </div>
              </div>
               
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-center">Visual Insights</h2>
                  <PredictionCharts />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Predict;
