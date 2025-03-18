import { Card, CardContent ,Typography, Box, LinearProgress} from "@mui/material";
import usePredictionStore from "../utilities/usePredictionStore";

//const COLORS = ["#FF0000", "#00FF00", "#0000FF", "#FFD700", "#FF8C00"];

const normalize = (value, min, max) => {
  if (max - min === 0) return 0;
  return ((value - min) / (max - min)) * 100;
};

const PredictionCharts = () => {
  const prediction = usePredictionStore((state) => state.prediction);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* CO2 - RED */}
      <Card>
        <CardContent className="flex flex-col items-center">
        <Typography variant="h6" className="mb-2 font-semibold flex items-center gap-2">
            CO₂ Emissions
            <span className="text-sm text-gray-500 font-normal">(Speed: {prediction.speed} mph)</span>
        </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={normalize(prediction.gaCo2, 0, 8456.64)} sx={{ height: 10, borderRadius: 5, '& .MuiLinearProgress-bar': { backgroundColor: '#ff0000' } }} />
          </Box>
          <p className="mt-2 text-lg font-bold">{prediction.gaCo2.toFixed(2)}</p>
        </CardContent>
      </Card>

      {/* Energy Rate - BLUE */}
      <Card>
        <CardContent className="flex flex-col items-center">
          {/* <h3 className="mb-2 font-semibold">Energy Rate</h3> */}
        <Typography variant="h6" className="mb-2 font-semibold flex items-center gap-2">
          Energy Rate
            <span className="text-sm text-gray-500 font-normal">(Speed: {prediction.speed} mph)</span>
        </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={normalize(prediction.gaTotalEnergyRate, 0, 143251.93)} sx={{ height: 10, borderRadius: 5, '& .MuiLinearProgress-bar': { backgroundColor: '#0070c0' } }} />
          </Box>
          <p className="mt-2 text-lg font-bold">{prediction.gaTotalEnergyRate.toFixed(2)}</p>
        </CardContent>
      </Card>

      {/* NOx - GREEN */}
      <Card>
        <CardContent className="flex flex-col items-center">
          {/* <h3 className="mb-2 font-semibold">NOx</h3> */}
          <Typography variant="h6" className="mb-2 font-semibold flex items-center gap-2">
          NOx
            <span className="text-sm text-gray-500 font-normal">(Speed: {prediction.speed} mph)</span>
          </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={normalize(prediction.gaNOx, 0, 169.52)} sx={{ height: 10, borderRadius: 5, '& .MuiLinearProgress-bar': { backgroundColor: '#00b050' } }} />
          </Box>
          <p className="mt-2 text-lg font-bold">{prediction.gaNOx.toFixed(2)}</p>
        </CardContent>
      </Card>

      {/* PM2.5 Brake Wear - PURPLE */}
      <Card>
        <CardContent className="flex flex-col items-center">
          {/* <h3 className="mb-2 font-semibold">PM2.5 Brake Wear</h3> */}
          <Typography variant="h6" className="mb-2 font-semibold flex items-center gap-2">
          PM2.5 Brake Wear
            <span className="text-sm text-gray-500 font-normal">(Speed: {prediction.speed} mph)</span>
          </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={normalize(parseFloat(prediction["gaPM2.5BrakeWear"]), 0, 0.35)} sx={{ height: 10, borderRadius: 5, '& .MuiLinearProgress-bar': { backgroundColor: '#7030a0' } }} />
          </Box>
          <p className="mt-2 text-lg font-bold">{parseFloat(prediction["gaPM2.5BrakeWear"]).toFixed(4)}</p>
        </CardContent>
      </Card>

      {/* PM2.5 Tire Wear - ORANGE */}
      <Card>
        <CardContent className="flex flex-col items-center">
          {/* <h3 className="mb-2 font-semibold">PM2.5 Tire Wear</h3> */}
          <Typography variant="h6" className="mb-2 font-semibold flex items-center gap-2">
          PM2.5 Tire Wear
            <span className="text-sm text-gray-500 font-normal">(Speed: {prediction.speed} mph)</span>
          </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={normalize(parseFloat(prediction["gaPM2.5TireWear"]), 0, 0.0095)} sx={{ height: 10, borderRadius: 5, '& .MuiLinearProgress-bar': { backgroundColor: '#ed7d31' } }} />
          </Box>
          <p className="mt-2 text-lg font-bold">{parseFloat(prediction["gaPM2.5TireWear"]).toFixed(4)}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionCharts;
