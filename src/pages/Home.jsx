import React from 'react'
import { 
  Box,
  Stack,
  Typography,
} from '@mui/material';

import Chart from '../sections/Home/Chart';
import PondFilter from '../sections/Home/PondFilter';
import PondTable from '../sections/Home/PondTable';
import Advice from '../sections/Home/Advice';

const Home = () => {
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
        Dashboard
      </Typography>
      <Stack
        direction="column"
        spacing={3}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 3, md: 2 }}
          alignItems="center"
        >
          <Chart />
          <Stack
            direction="column"
            spacing={1}
          >
            <PondFilter />
            <PondTable />
          </Stack>
        </Stack>
        <Advice />
      </Stack>
    </Box>
  )
}

export default Home