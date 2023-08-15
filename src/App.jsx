import { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react';

import HomePage from '../pages/HomePage';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import VideoDetail from '../pages/VideoDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {}, []);

  return (
    <ChakraProvider>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<HomePage />} />
            <Route path='VideoDetail/:id' element={<VideoDetail />} />
            <Route path='Home' element={<HomePage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
      <Footer />
    </ChakraProvider>
  );
}

export default App;
