import * as React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/layout";
import Searchbar from "../InputField/input";
import LineChart from "./LineChart";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const WeatherChart: React.FC = () => {
  return (
    <Flex bg="#fff" flexDir="column" p="24px">
      <Searchbar
        setSearch={function (
          value: React.SetStateAction<string | undefined>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Flex
        justifyContent="space-between"
        gap={{ base: "0", xl: "1%" }}
        mt="56px"
        flexDir={{ base: "column", semiLg: "row" }}
      >
        <Box minW={{ xl: "40%" }}>
          <Heading fontSize="24px" fontWeight={500}>
            New York, US
          </Heading>
          <Flex mt="40px">
            <Heading fontSize="72px" fontWeight={500}>
              84
            </Heading>
            <Text fontSize="24px">&#8457;</Text>
          </Flex>
          <Text>Feels 79 &#8457; </Text>
          <Text mt="40px" fontSize="32px">
            Partly Cloudy
          </Text>
        </Box>
        <Box w={{ nesthubLg: "200px", lg: "500px" }} maxH="200px">
          <Tabs variant="soft-rounded">
            <TabList justifyContent={"flex-end"} pl={{ xl: "50px" }}>
              <Tab _selected={{ color: "gray", bg: "#f5fbff" }}>
                Temperature
              </Tab>
              <Tab _selected={{ color: "gray", bg: "#f5fbff" }}>
                Precipitation
              </Tab>
              <Tab _selected={{ color: "gray", bg: "#f5fbff" }}>Wind</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LineChart />
              </TabPanel>
              <TabPanel>
                <LineChart />
              </TabPanel>
              <TabPanel>
                <LineChart />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WeatherChart;
