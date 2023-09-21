import React from 'react'
import { 
  Box,
  Typography,
} from '@mui/material';

import { LineChart } from '@mui/x-charts/LineChart';

const sample1 = [0, 3, 2, 7, 10]
const sample2 = [0, 3, 5, 13, 22]
const cycle = [0, 10, 20, 40, 50]

const Chart = () => {

  return (
    <Box
      sx={{ 
        width: '70%',
        border: '1px solid black',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem'},
          py: 1,
        }}
      >
        Amplification
      </Typography>
      <LineChart
        margin={{ top: 65, right: 65, bottom: 65, left: 65 }}
        xAxis={[
          {
            id: 'bottom-axis',
            data: cycle,
            scaleType: 'band',
            label: 'Cycle',
          }
        ]}
        yAxis={[
          {
            id: 'linearAxis',
            scaleType: 'linear',
            label: 'RFU',
          },
        ]}
        series={[
          {
            yAxisKey: 'linearAxis',
            data: sample1,
            // label: 'MTD',
            color: '#edc949',
          },
          {
            yAxisKey: 'linearAxis',
            data: sample2,
            // label: 'YTD',
            color: '#4e79a7',
          },
        ]}
        leftAxis="linearAxis"
        width={800}
        height={465}
      />
    </Box>
  )
}

export default Chart