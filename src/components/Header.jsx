import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box as="header" bg="blue.500" color="white" py={4}>
      <HStack spacing={8} justify="center">
        <Link as={RouterLink} to="/" fontSize="lg" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/about" fontSize="lg" fontWeight="bold">
          About
        </Link>
        <Link as={RouterLink} to="/contact" fontSize="lg" fontWeight="bold">
          Contact
        </Link>
      </HStack>
    </Box>
  );
};

export default Header;
