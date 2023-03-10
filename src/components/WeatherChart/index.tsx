import * as React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/layout";
import Searchbar from "../InputField/input";
import LineChart from "./LineChart";

const WeatherChart: React.FC = () => {
  return (
    <Flex
      maxW="60%"
      bg="#ffffff"
      m="48px 0px 0px 24px"
      flexDir="column"
      p="30px"
    >
      <Searchbar
        setSearch={function (
          value: React.SetStateAction<string | undefined>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Flex
        justifyContent="space-between"
        gap={{ base: "0", xl: "6%" }}
        mt="72px"
      >
        <Box minW={{ xl: "40%" }}>
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
          <Text mt="48px" fontSize="34px">
            Partly Cloudy
          </Text>
        </Box>
        <Box w="90%" h="300px">
          <LineChart />
        </Box>
      </Flex>
    </Flex>
  );
};

export default WeatherChart;
