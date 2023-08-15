import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import { SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     axios({
  //       method: 'GET',
  //       url: 'http://localhost:3000/api/getVideoAll',
  //     })
  //       .then((res) => {
  //         console.log(res.data);
  //         setData(res.data);
  //       })
  //       .catch((e) => console.log(e))
  //       .finally(() => console.log(data));
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://tokopediaplayclone-be.vercel.app/api/getVideoAll'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SimpleGrid minChildWidth='400px' spacingX='-100px' spacingY='0px'>
        {data.map((data) => (
          //   <li key={user._id}>
          //     {user.title}
          //   </li>
          <div key={data._id}>
            <Link key={data._id} to={`/VideoDetail/${data._id}`}>
              <VideoCard  data={data} />
            </Link>
            </div>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default HomePage;
