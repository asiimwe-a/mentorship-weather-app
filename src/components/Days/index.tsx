import React from "react";
import { Box, Image, Text, Flex, Grid } from "@chakra-ui/react";

const Days: React.FC = () => {
  const days: number[] = [1, 2, 3];

  return (
    <Grid
      bg="#f5fbff"
      p="1rem"
      w={{ base: "100%", md: "75%" }}
      h={{base:"", md:"60%"}}
      templateColumns={{
        base: "1fr",
        md:'repeat(3, 1fr)'
      }}
      gap={{ base: "1rem", md: "1rem" }}
    >
      {days.map((day) => {
        return (
          <Flex
            bg="white"
            color="black"
            p="1rem"
            flexDir="column"
            justify="space-evenly"
          >
            <Text fontSize="2rem" paddingLeft="5%">
              Mon 14
            </Text>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png"
              w="40%"
            />
            <Flex justify="space-between" p="0 5%">
              <Flex
                w="45%"
                h="70%"
                marginTop="10%"
                direction="column"
                justify="space-between"
                p=".2rem"
                // bg="skyblue"
              >
                <Flex justify="space-between" align="center">
                  <Text fontSize={{ base: "1.5rem", md: "1.7rem", lg: "" }}>
                    21
                  </Text>
                  <Text
                    fontSize={{ base: "1.2rem", md: "1.4rem", lg: "" }}
                    opacity="0.3"
                  >
                    13
                  </Text>
                </Flex>
                <Text fontSize={{ base: "1.5rem", md: "1.7rem", lg: "" }}>
                  Cloudy
                </Text>
              </Flex>
              <Flex
                // w="45%"
                h="70%"
                marginTop="10%"
                flexDir="column"
                justify="space-evenly"
                opacity=".3"
                fontWeight="semibold"
                fontSize={{ base: ".8rem",sm:"1.2rem", md: "1rem" }}
                // bg='slategray'
              >
                <Text>Feels 90 F / 71F</Text>
                <Text>Humidity: 0.74% </Text>
                <Text>Wind: 15.6 MI/H</Text>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Grid>
  );
};

export default Days;
