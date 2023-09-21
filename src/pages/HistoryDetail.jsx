import React from 'react'
import { 
  Box,
  Stack,
  Typography,
} from '@mui/material';

import Chart from '../sections/HistoryDetail/DetailChart';
import DetailTable from '../sections/HistoryDetail/DetailTable';
import Advice from '../sections/Home/Advice';

const HistoryDetail = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flexGrow: 1,
        py: 2,
        px: 3,
        gap: 1,
      }}
    >
      <Typography
        color="textPrimary"
        variant="h4"
        sx={{
          fontWeight: 'bold',
        }}
      >
        Hasil Identifikasi
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Chart />
      </Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: '100%',
        }}
      >
        <DetailTable />
        <Advice />
      </Stack>
    </Box>
  )
}

export default HistoryDetail