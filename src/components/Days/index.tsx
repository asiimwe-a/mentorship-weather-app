import React from "react";
import { Box, Image, Text, Flex, Grid } from "@chakra-ui/react";

const Days: React.FC = () => {
  const days: number[] = [1, 2, 3];

  return (
    <Grid
      bg="#f5fbff"
      templateColumns={{
        base: "1fr",
        md: "repeat(3, 1fr)",
      }}
      gap={4}
      // marginTop="24px"
    >
      {days.map((day) => {
        return (
          <Flex
            bg="white"
            color="black"
            p="3rem 2rem"
            flexDir="column"
            justify="space-evenly"
            gap={6}
          >
            <Text fontSize="2rem" >
              Mon 14
            </Text>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png"
              w="45%"
            />
            <Flex justify="space-between" >
              <Flex
                // w="44%"
                // h="70%"
                // marginTop="10%"
                direction="column"
                justify="space-between"
                // p=".2rem"
                // bg="skyblue"
              >
                <Flex
                  justify="space-between"
                  alignItems="flex-end"
                  // align="center"
                  // paddingRight={{ base: "40%", md: "30%" }}
                >
                  <Text fontSize={{ base: "2rem", md: "1.7rem", lg: "2rem" }}>
                    21°
                  </Text>
                  <Text
                    fontSize={{ base: "1.5rem", md: "1.4rem", lg: "1.5rem" }}
                    opacity="0.3"
                  >
                    13°
                  </Text>
                </Flex>
                <Text fontSize={{ base: "2rem", md: "1.7rem", lg: "2rem" }}>
                  Cloudy
                </Text>
              </Flex>
              <Flex
                // w="45%"
                // h="70%"
                // marginTop="10%"
                flexDir="column"
                justify="space-evenly"
                opacity=".5"
                // fontWeight="semibold"
                fontSize="1rem"
                // bg='slategray'
              >
                <Text>Feels 90°F / 71°F</Text>
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
