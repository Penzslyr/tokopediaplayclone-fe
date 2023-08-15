import React, { useEffect, useState } from 'react';
import { Flex, Spacer, Box, Text } from '@chakra-ui/react';
import {
  Center,
  Square,
  Circle,
  VStack,
  Textarea,
  Button,
  Input,
} from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Comment from '../components/Comment';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newUsername, setNewUsername] = useState('');
  const [newComment, setNewComment] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    console.log(newUsername, newComment);
    e.preventDefault();
    try {
      const response = await axios.post('https://tokopediaplayclone-be.vercel.app/comments', {
        username: newUsername,
        comment: newComment,
        VideoId: id,
      });
      console.log(response.data); // Update the comment list with the new comment
      setNewUsername('');
      setNewComment('');
      const fetchDataComments = async () => {
        try {
          const response = await axios.get(
            'https://tokopediaplayclone-be.vercel.app/api/comments/' + id
          );
  
          setComments(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchDataComments();
  
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await axios.get(
          'https://tokopediaplayclone-be.vercel.app/api/products/' + id
        );

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataComments = async () => {
      try {
        const response = await axios.get(
          'https://tokopediaplayclone-be.vercel.app/api/comments/' + id
        );

        setComments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataProducts();
    fetchDataComments();
  }, []);

  return (
    <Flex
      flexFlow={'row wrap'}
      alignContent={'space-between'}
      style={{ marginBottom: '50px' }}
    >
      <Flex flexFlow={'column wrap'}>
        {products.map((product, index) => (
          <div key={index} style={{ margin: '50px 50px 0px 50px' }}>
            <Image
              src={product.LinkProduct}
              alt='Dan Abramov'
              onClick={() => console.log('Test 1')}
              boxShadow='dark-lg'
              rounded='lg'
              overflow='hidden'
              _hover={{
                cursor: 'pointer',
                opacity: 0.7,
                transform: 'scale(1.1)',
              }}
              transition='all .2s ease-in-out'
              flexDirection={'column'}
              position='relative'
              boxSize={'200px'}
            />
            <Text w={"200px"}>
              {product.Title} - Rp {product.Price},00
            </Text>
          </div>
        ))}
      </Flex>

      <Spacer />
      <Center color='white'>
        <iframe
          width='960'
          height='615'
          src='https://www.youtube.com/embed/QhBnZ6NPOY0'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </Center>
      <Spacer />
      {/* <Box p='4' bg='green.400'>
        Box 2
      </Box> */}
      <Box p={4} borderWidth='1px' borderColor='gray.400' borderRadius='md'>
        <VStack spacing={4} align='stretch'>
          {comments.map((comment, index) => (
            <Comment
              key={index}
              username={comment.username}
              comment={comment.comment}
              timestamp={comment.timestamp}
            />
          ))}
        </VStack>
        <Input
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder='Fill Username...'
          style={{ marginTop: 20 }}
        />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Add a comment...'
          style={{ marginTop: 20 }}
        />
        <Button
          style={{ marginTop: 20 }}
          colorScheme='blue'
          size='sm'
          onClick={handleSubmit}
        >
          Add Comment
        </Button>
      </Box>
    </Flex>
  );
};

export default VideoDetail;
