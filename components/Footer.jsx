import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box p={4} bg='green.500' color='white'>
      <Flex justifyContent="center" alignItems="center">
        <Text>&copy; {new Date().getFullYear()} Tokopedia Play</Text>
        <Box mx={2}>|</Box>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Box mx={2}>|</Box>
        <Link href="/terms-of-use">Terms of Use</Link>
      </Flex>
    </Box>
  );
};

export default Footer;