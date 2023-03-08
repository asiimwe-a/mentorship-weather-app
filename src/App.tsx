import * as React from "react";
import WeatherChart from "./components/WeatherChart";
import { Box } from "@chakra-ui/layout";
import Searchbar from "./components/input";

const App: React.FC = () => {
  return (
    <Box bg="#f5fbff" h="100vh" p={4}>
      <WeatherChart />
      <Searchbar setSearch={function (value: React.SetStateAction<string | undefined>): void {
        throw new Error("Function not implemented.");
      } } setGeolocate={function (value: React.SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
      } } geolocate={false} />
    </Box>
  );
};

export default App;
