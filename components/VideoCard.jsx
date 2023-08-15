import React from 'react';
import { Box, Flex, Text, Image, VStack, Spacer } from '@chakra-ui/react';
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

const VideoCard = (props) => {
  return (
    <>
    <Box
      onClick={() => console.log(props.data)}
      bgImage={`url(${props.data.ThumbnailURL})`}
      bgSize='cover'
      bgPosition='center'
      boxShadow='dark-lg'
      rounded='lg'
      overflow='hidden'
      maxW='300px'
      minH='400px'
      _hover={{ cursor: 'pointer', opacity: 0.7, transform: 'scale(1.1)' }}
      transition='all .2s ease-in-out'
      // Adjust the width here
      // Adjust the height here
      margin='50px'
      flexDirection={'column'}
      position='relative'
    >
      {' '}
      <Flex style={{ marginLeft: 10, marginTop: 10 }} flexDirection={'row'}>
        {' '}
        <Tag size={'sm'} variant='solid' colorScheme='red'>
          Live
        </Tag>{' '}
        <Tag
          style={{ marginLeft: 10 }}
          size={'sm'}
          variant='solid'
          colorScheme='blackAlpha'
        >
          <TagLeftIcon boxSize='12px' as={ViewIcon} />
          <TagLabel>213</TagLabel>
        </Tag>
      </Flex>
      <div
        style={{
          paddingLeft: 10,
          paddingBottom: 10,
          color: 'white',
          position: 'absolute',
          bottom: 0,
          justifyItems: 'left',
          width: 300,
        }}
      >
        <div>
          <Text textDecoration={'GrayText'} textAlign={'left'} fontSize={'lg'}>
            {props.data.title}
          </Text>
        </div>
        <div>
          <Text textDecoration={'GrayText'} textAlign={'left'} fontSize={'sm'}>
          {props.data.title}
          </Text>
        </div>
      </div>
    </Box>
    </>
  );
};

export default VideoCard;
