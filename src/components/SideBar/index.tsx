import * as React from "react";
import { Box, Text, Grid, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Avatar } from "@chakra-ui/react";

const Sidebar: React.FC = () => {
  const WeatherNewsData: Array<{
    title: string;
    image: string;
    avatar: string;
    author: string;
  }> = [
    {
      title: "Heavy Rain and Flood Warnings in Effect for Southern California",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
      image:
        "https://cdn.shortpixel.ai/spai/q_lossy+w_754+h_754+to_auto+ret_img/https://cosmosmagazine.com/wp-content/uploads/2019/12/110515_Lightning_P.jpg",
      author: "John Doe",
    },
    {
      title: "High Temperatures Expected Across the Midwest this Week",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      author: "Jiun Chan",
    },
    {
      title: "Hurricane Season 2022: Experts Predict an Above-Average Season",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      author: "Feit Putin",
    },
    {
      title: "Winter Storms Cause Travel Chaos Across the Northeastern U.S",
      image:
        "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      author: "Rain ANt",
    },
  ];
  return (
    <Box bg="white" padding="24px">
      <Text fontSize="32px" marginBottom="16px">
        Weather News
      </Text>
      {WeatherNewsData.map(({ title, avatar, author, image }) => (
        <Grid padding="10px" gridTemplateColumns="1.5fr 1fr">
          <Flex flexDir="column" gap="16px">
            <Text fontSize="20px">{title}</Text>
            <Flex marginTop="auto">
              <Avatar mr={4} src={avatar} size="sm" />
              <Text fontSize="20px">{author}</Text>
            </Flex>
          </Flex>
          <Box>
            <Image src={image} boxSize="100%" />
          </Box>
        </Grid>
      ))}
    </Box>
  );
};

export default Sidebar;
