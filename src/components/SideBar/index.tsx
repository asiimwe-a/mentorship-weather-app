import * as React from "react";
import { Box, Text, Grid, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/react";

const Sidebar: React.FC = () => {
  return (
    <Box bg="white" padding="24px">
      <Text fontSize="32px" marginBottom="16px">Weather News</Text>
      <Grid padding="10px" gridTemplateColumns="1.5fr 1fr">
        <Flex flexDir="column" gap="16px">
          <Text fontSize="20px">How the weather factored into Martin Luther King</Text>
          <Flex marginTop="auto">
            <Avatar mr={4} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" size="sm" />
            <Text fontSize="20px">Hare News</Text>
          </Flex>
        </Flex>
        <Box>
          <Image
            src="https://cdn.shortpixel.ai/spai/q_lossy+w_754+h_754+to_auto+ret_img/https://cosmosmagazine.com/wp-content/uploads/2019/12/110515_Lightning_P.jpg"
            boxSize="100%"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Sidebar;
