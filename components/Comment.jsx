import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react';
const Comment = (props) => {
    
  return (
    <Box p={3} borderWidth="1px" borderColor="gray.300" borderRadius="md">
      <Text fontWeight="bold">{props.username}</Text>
      <Text>{props.comment}</Text>
      <Text fontWeight="italic">{new Date(props.timestamp).toLocaleString()}</Text>
    </Box>
  )
}

export default Comment