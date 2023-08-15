import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const NavigationBar = () => {
   
  return (
    <Box w='100%' p={4} bg='green.500' color='white'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box fontWeight='bold' fontSize='2xl'>
          Tokopedia Play
        </Box>
        <Button variant='solid' colorScheme='green'>
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
