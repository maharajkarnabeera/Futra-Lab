import { useState, useEffect, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import api from "../utilities/api";
import Pagination from '@mui/material/Pagination';

function PaginationData() {
  const gridRef = useRef();
  const [stateOptions, setStateOptions] = useState([]);
  const [fuelOptions, setFuelOptions] = useState([]);
  const [vehicleOptions, setVehicleOptions] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    api.get("/distinct-values?column=STATE").then((res) => setStateOptions(res.data.values));
    api.get('/distinct-values?column="Fuel Type"').then((res) => setFuelOptions(res.data.values));
    api.get('/distinct-values?column="Vehicle Type"').then((res) => setVehicleOptions(res.data.values));
  }, []);

  const fetchData = useCallback((currentPage) => {
    setLoading(true);
    setNoData(false); 
    const apiFilters = {};
    if (filters.STATE?.length > 0) apiFilters["STATE[]"] = filters.STATE;
    if (filters["Fuel Type"]?.length > 0) apiFilters["FuelType[]"] = filters["Fuel Type"];
    if (filters["Vehicle Type"]?.length > 0) apiFilters["VehicleType[]"] = filters["Vehicle Type"];

    api.get("/pagination-emissions", { params: { page: currentPage, ...apiFilters } }).then((res) => {
      if (res.data.data.length === 0) {
        setNoData(true);
      }
      setRowData(res.data.data);
      setTotalPages(res.data.total_pages);
      setLoading(false);
    });
  }, [filters]);

  useEffect(() => {
    fetchData(page);
  }, [filters, fetchData, page]);

  const handleFilterChange = (model) => {
    const updatedFilters = {};
    if (model["STATE"]?.values) updatedFilters.STATE = model["STATE"].values;
    if (model["Fuel Type"]?.values) updatedFilters["Fuel Type"] = model["Fuel Type"].values;
    if (model["Vehicle Type"]?.values) updatedFilters["Vehicle Type"] = model["Vehicle Type"].values;
    setFilters(updatedFilters);
    setPage(1);
  };

  const onFirstDataRendered = (params) => {
    // Ensure that the grid auto sizes columns when the data is loaded.
    params.api.sizeColumnsToFit();
  };

  const columnDefs = [
    { headerName: "State", field: "STATE", filter: "agSetColumnFilter", filterParams: { values: stateOptions }, floatingFilter: true},
    { headerName: "Fuel Type", field: "Fuel Type", filter: "agSetColumnFilter", filterParams: { values: fuelOptions }, floatingFilter: true },
    { headerName: "Vehicle Type", field: "Vehicle Type", filter: "agSetColumnFilter", filterParams: { values: vehicleOptions }, floatingFilter: true },
    { headerName: "Age", field: "AGE" },
    { headerName: "Speed", field: "SPEED" },   
    { headerName: "Energy Rate", field: "Energy Rate", valueFormatter: (p) => Number(p.value).toFixed(4) },
    { headerName: "CO2", field: "CO2", valueFormatter: (p) => Number(p.value).toFixed(4) },
    { headerName: "NOx", field: "NOX", valueFormatter: (p) => Number(p.value).toFixed(4) },
    { headerName: "PM2.5 Brakewear", field: "PM2.5 Brakewear", valueFormatter: (p) => p.value ? Number(p.value).toFixed(4) : 0 },
    { headerName: "PM2.5 Tirewear", field: "PM2.5 Tirewear", valueFormatter: (p) => p.value ? Number(p.value).toFixed(4) : 0 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Model Insights & Visualizations</h1>
      <p className="text-gray-600 mb-8">
        Below are the key visual trends derived from our model on vehicle energy consumption & emissions dataset.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <img src="src/assets/CO2_plot.png" alt="CO2_plot" className="rounded shadow" />
        <img src="src/assets/Energy_Rate_plot.png" alt="Energy_Rate_plot" className="rounded shadow" />
        <img src="src/assets/PM_Brakes_plot.png" alt="PM_Brakes_plot" className="rounded shadow" />
        <img src="src/assets/PM_Tire_plot.png" alt="PM_Tire_plot" className="rounded shadow" />
        <img src="src/assets/PM_Total_plot.png" alt="PM_Total_plot" className="rounded shadow" />
      </div>
      <hr className="my-10" />
      <h2 className="text-2xl font-semibold mb-4">🗂 Dataset Used (23,000+ records)</h2>
      <p className="text-gray-600 mb-4">View the raw data used for training and testing the model. Records are paginated for easy navigation.</p>
      <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
          pagination={false}
          floatingFilter={true}
          onFilterChanged={(e) => handleFilterChange(e.api.getFilterModel())}
          onFirstDataRendered={onFirstDataRendered}
        />
      </div>
      <div className="flex justify-center mt-4">
      {!loading && !noData && ( // Only render pagination when not loading
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          boundaryCount={2}
          siblingCount={1}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
      )}

      {/* Display "No Data Found" message if noData is true */}
      {noData && !loading && (
        <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          <h3>No data found for the selected filters</h3>
        </div>
      )}
      </div>
    </div>
  );
}

export default PaginationData;