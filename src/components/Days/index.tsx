import React from "react";
import { Box, Image, Text, Flex, Grid } from "@chakra-ui/react";

function Days() {
  const days = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid
      bg="#f5fbff"
      p="1rem"
      gridTemplateColumns="repeat(auto-fit, minmax(330px, 1fr))"
      gap="2rem"
    >
      {days.map((day) => {
        return (
          <Box bg="white" color="black" p="1rem">
            <Text fontSize="2rem" paddingLeft='5%'>Mon 14</Text>
            <Image src="https://cdn-icons-png.flaticon.com/128/1888/1888282.png" />
            <Flex justify="space-between" p="0 5%">
              <Flex
                w="45%"
                direction="column"
                justify="space-between"
                p=".2rem"
              >
                <Flex justify="space-between" align="center">
                  <Text fontSize="2rem">21</Text>
                  <Text fontSize="1.3rem" opacity="0.3">
                    13
                  </Text>
                </Flex>
                <Text fontSize="2rem">Cloudy</Text>
              </Flex>
              <Flex
                w="45%"
                direction="column"
                justify="space-evenly"
                align="flex-end"
                opacity=".3"
                fontWeight="semibold"
              >
                <Text>Feels 90 F / 71F</Text>
                <Text>Humidity: 0.74% </Text>
                <Text>Wind: 15.6 MI/H</Text>
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </Grid>
  );
}

export default Days;
