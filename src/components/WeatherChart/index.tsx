import * as React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/layout";
import Searchbar from "../InputField/input";
import LineChart from "./LineChart";

const WeatherChart: React.FC = () => {
  return (
    <Flex w="70%" bg="#ffffff" m="48px 0px 0px 24px" flexDir="column" p="30px">
      <Searchbar
        setSearch={function (
          value: React.SetStateAction<string | undefined>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Flex justifyContent="space-between" mt="72px">
        <Box>
          <Heading fontSize="24px" fontWeight={500}>
            New York, US
          </Heading>
          <Flex mt="24px">
            <Heading fontSize="72px" fontWeight={500}>
              84
            </Heading>
            <Text fontSize="24px">&#8457;</Text>
          </Flex>
          <Text>Feels 79 &#8457; </Text>
          <Text fontSize="34px">Partly Cloudy</Text>
        </Box>
        <Box w="700px" h="400px">
          <LineChart />
        </Box>
      </Flex>
    </Flex>
  );
};

export default WeatherChart;
