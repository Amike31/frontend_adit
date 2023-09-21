import React, { useState, useEffect } from 'react'
import { 
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import { pondDuration } from '../../utils/datas';

const PondFilter = () => {

  const [duration, setDuration] = useState(1);

  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <Box
      sx={{ 
        width: '100%',
        borderRadius: '20px',
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="durasi-label">Durasi Pemantauan</InputLabel>
        <Select
          labelId="durasi-label"
          id="durasi"
          value={duration}
          label="Duration"
          onChange={handleChange}
        >
          {pondDuration.map((row, index) => (
            <MenuItem
              key={index}
              value={row.value}
            >
              Last {row.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default PondFilter