import { Box, Typography, Card } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SongInfo() {
  const { state } = useLocation();
  const { songName, artistName, album, playTime } = state;

  console.log(state);
  return (
    <Box sx={{ height: '100%', backgroundImage: 'url(/images/background.png)', textAlign: 'center' }}>
      <Typography variant="h4" component="h4" sx={{ paddingTop: '8%' }}>
        {songName}
      </Typography>
      <Typography variant="h5" component="h5" sx={{ paddingTop: '1%' }}>
        {artistName}
      </Typography>
      <Card
        sx={{
          width: '20vw',
          height: '20vw',
          marginTop: '2%',
          marginLeft: '40%',
          backgroundImage: `url(${state.img})`,
          backgroundSize: 'cover',
        }}
      ></Card>
      {album}
      <Typography
        variant="h6"
        component="h6"
        sx={{ paddingTop: '5%', paddingBottom: '10%', marginLeft: '35%', width: '30vw' }}
      >
        {playTime}
      </Typography>
    </Box>
  );
}
