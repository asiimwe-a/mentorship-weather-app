import * as React from "react";
import { Box, Text, Grid, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/react";

const Sidebar: React.FC = () => {
  return (
    <Box bg="white">
      <Text>Weather News</Text>
      <Grid bg="green" gridTemplateColumns="1fr 1fr">
        <Flex flexDir="column">
          <Text>Text.....................</Text>
          <Flex>
            <Avatar />
            <Text>Hello World</Text>
          </Flex>
        </Flex>
        <Box>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png"
            boxSize="100%"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Sidebar;
