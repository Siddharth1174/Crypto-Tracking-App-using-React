import { Image, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ppSrc from "../assets/Mypic.jpeg";


const avatarSrc = "";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack align="center">
          {/* <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} /> */}
          <Image
           w="120px"
           h="120px"
           objectFit="cover"
           borderRadius="full"
          src={ppSrc}
        />
          <Text align="center">Siddharth R Sharan</Text>
          <Text align="center" opacity={0.6}>Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
