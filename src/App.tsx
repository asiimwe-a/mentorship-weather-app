import * as React from "react";
import { Grid, Box } from "@chakra-ui/layout";
import WeatherChart from "./components/WeatherChart";
import Days from "./components/Days";
import Sidebar from "./components/SideBar";

const App: React.FC = () => {
  return (
    <Grid
      bg="grayBg"
      h="100vh"
      p={4}
      gridTemplateColumns="3fr 1fr"
      gridAutoRows="1fr"
      gridColumnGap="40px"
      gridRowGap="0px"
    >
      <Box>
        <WeatherChart />
        <Days />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default App;
