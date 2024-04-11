import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function VolumeSlider({ volume, setVolume }: { volume: number; setVolume: (value: number) => void }) {
    const handleChange = (event: Event, newValue: number | number[]) => {
      setVolume(newValue as number);
    };
  
    return (
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={volume} onChange={handleChange}  color='secondary' />
          <VolumeUp />
        </Stack>
      </Box>
    );
  }
  
