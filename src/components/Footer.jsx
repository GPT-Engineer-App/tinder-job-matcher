import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="blue.500" color="white" py={4} mt={8}>
      <Text textAlign="center">© 2024 JobSwipe. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
