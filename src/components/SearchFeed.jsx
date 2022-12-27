import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromApI } from '../utils/fetchFromAPI';
import { Videos } from './'


const SearchFeed = () => {

   const [videos, setVideos] = useState([]);
   const { searchTerm } = useParams();

   useEffect(() => {
      fetchFromApI(`search?part=snippet&q=${searchTerm}`)
         .then((data) => setVideos(data.items))
   }, [searchTerm]);

   return (
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
         <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
            Search Results for: <span style={{ color: '#FC1053' }} >{searchTerm} videos </span>
         </Typography>

         <Videos videos={videos} />
      </Box>
   )
}

export default SearchFeed