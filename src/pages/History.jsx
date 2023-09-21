import React from 'react'
import { 
  Box,
  Typography,
} from '@mui/material';

import HistoryTable from '../sections/History/HistoryTable';

const History = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flexGrow: 1,
        py: 2,
        px: 3,
      }}
    >
      <Typography
        color="textPrimary"
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 1,
        }}
      >
        History
      </Typography>
      <HistoryTable />
    </Box>
  )
}

export default History