import React from "react";
import { Box, Heading, Text, Stack, Divider } from "@chakra-ui/core";
import { WiWindDeg } from "react-icons/wi";

const StormMotion = ({ direction, speed }) => {
  return (
    <Box position="absolute" bottom="0" left="0" p={5} w="100%">
      <Heading fontSize="2xl">Storm Motion:</Heading>
      <Divider />
      <Stack isInline align="center">
        {speed === 0 ? (
          <Text color="blue.500" fontSize="3xl" fontWeight="bold">
            Nearly Stationary
          </Text>
        ) : (
          <>
            <Text color="blue.500" fontSize="4xl" fontWeight="bold">
              {`${speed} mph`}
            </Text>
            <Box
              as={WiWindDeg}
              size="70px"
              color="blue.500"
              transform={`rotate(${direction}deg)`}
            />
          </>
        )}
      </Stack>
    </Box>
  );
};

export default StormMotion;
