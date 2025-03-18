import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Pagination,
  Stack,
} from "@mui/material";

function PaginationData() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/pagination-emissions?page=${page}`);
      setData(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Model Insights & Visualizations</h1>
      <p className="text-gray-600 mb-8">
        Below are the key visual trends derived from our model on vehicle energy consumption & emissions dataset.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <img src="src\assets\CO2_plot.png" alt="CO2_plot" className="rounded shadow" />
        <img src="src\assets\Energy_Rate_plot.png" alt="Energy_Rate_plot" className="rounded shadow" />
        <img src="src\assets\PM_Brakes_plot.png" alt="PM_Brakes_plot" className="rounded shadow" />
        <img src="src\assets\PM_Tire_plot.png" alt="PM_Tire_plot" className="rounded shadow" />
        <img src="src\assets\PM_Total_plot.png" alt="PM_Total_plot" className="rounded shadow" />
      </div>

      <hr className="my-10" />
        <h2 className="text-2xl font-semibold mb-4">🗂 Dataset Used (23,000+ records)</h2>
        <p className="text-gray-600 mb-4">View the raw data used for training and testing the model. Records are paginated for easy navigation.</p>

        <Stack spacing={4} padding={4}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Stack alignItems="center" mb={2}>
          <h2>Emissions Dataset</h2>
        </Stack>

        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>State</TableCell>
                <TableCell>Fuel Type</TableCell>
                <TableCell>Vehicle Type</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Speed</TableCell>
                <TableCell>CO2</TableCell>
                <TableCell>Energy Rate</TableCell>
                <TableCell>NOx</TableCell>
                <TableCell>PM2.5 Brakewear</TableCell>
                <TableCell>PM2.5 Tirewear</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={9} align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{item["STATE"]}</TableCell>
                    <TableCell>{item["Fuel Type"]}</TableCell>
                    <TableCell>{item["Vehicle Type"]}</TableCell>
                    <TableCell>{item["AGE"]}</TableCell>
                    <TableCell>{item["SPEED"]}</TableCell>
                    <TableCell>{item["CO2"]}</TableCell>
                    <TableCell>{item["Energy Rate"]}</TableCell>
                    <TableCell>{item["NOX"]}</TableCell>
                    <TableCell>{item["PM2.5 Brakewear"]}</TableCell>
                    <TableCell>{item["PM2.5 Tirewear"]}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack spacing={2} alignItems="center" mt={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            boundaryCount={2}
            siblingCount={1}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Paper>
    </Stack>
  </div>
  )
}

export default PaginationData