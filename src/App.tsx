import * as React from "react";
import { Grid, Box } from "@chakra-ui/layout";
import WeatherChart from "./components/WeatherChart";
import Days from "./components/Days";
import Sidebar from "./components/SideBar";

const App: React.FC = () => {
  return (
    <Grid
      bg="grayBg"
      p={6}
      gridTemplateColumns="3fr 1fr"
      gridAutoRows="1fr"
      // gridColumnGap="24px"
      // gridRowGap="0px"
      gap={6}
      // maxWidth= '1400px'
      margin= '0 auto'
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
