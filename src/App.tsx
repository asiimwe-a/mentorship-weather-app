import * as React from "react";
import { Grid, Box } from "@chakra-ui/layout";
import WeatherChart from "./components/WeatherChart";
import Days from "./components/Days";
import Sidebar from "./components/SideBar";

const App: React.FC = () => {
  return (
    <Grid
      bg="grayBg"
      p={4}
      gridTemplateColumns="1fr"
      // gridAutoRows="1fr"
      gap={4}
      margin= '0 auto'
    >
      <Grid 
        gridTemplateColumns="1fr"
        // gridTemplateRows="auto 1fr"
        gap={4}
      >
        <WeatherChart />
        <Days />
      </Grid>
      <Sidebar />
    </Grid>
  );
};

export default App;
