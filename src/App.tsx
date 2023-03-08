import * as React from "react";
import { Box, Text } from "@chakra-ui/layout";
import Searchbar from "./components/InputField/input";

const App: React.FC = () => {
  return (
    <Box backgroundColor="white">
      <Searchbar setSearch={function (value: React.SetStateAction<string | undefined>): void {
        throw new Error("Function not implemented.");
      } } setGeolocate={function (value: React.SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
      } } geolocate={false} />
    
    </Box>
  );
};

export default App;
