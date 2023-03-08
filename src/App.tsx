import * as React from "react";
import WeatherChart from "./components/WeatherChart";
import { Box } from "@chakra-ui/layout";

const App: React.FC = () => {
  return (
    <Box bg="#f5fbff" h="100vh" p={4}>
      <WeatherChart />
    </Box>
  );
};

export default App;
