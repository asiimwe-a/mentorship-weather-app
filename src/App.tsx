import * as React from "react";
import { Box } from "@chakra-ui/layout";
import WeatherChart from "./components/WeatherChart";
import GetApi from "./components/GetApi";
import Days from "./components/Days";

const App: React.FC = () => {
  return (
    <Box bg="#f5fbff" h="100vh" p={4}>
      <WeatherChart />
      <GetApi />
      <Days />
    </Box>
  );
};

export default App;
