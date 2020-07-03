import React from "react";
import { Box, Heading, Button } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      borderBottom="1px"
      borderColor="gray.200"
      p={3}
      display="flex"
      alignItems="center"
    >
      <Heading>Happening Now Creator</Heading>
      <Button marginLeft="auto" as="button" variantColor="blue">
        <NavLink to="/">Sign In</NavLink>
      </Button>
    </Box>
  );
};

export default Navbar;
