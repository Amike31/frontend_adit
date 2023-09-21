import React, { useState, useEffect } from 'react'
import { 
  Box,
  Typography,
} from '@mui/material';

import { LineChart } from '@mui/x-charts/LineChart';

const sample1 = [0, 3, 2, 7, 10]
const sample2 = [0, 3, 5, 13, 22]
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

const Chart = () => {
  const screenSize = { xs: [300, 340], sm: [350, 450], md: [450, 625], lg: [450, 700] };
  const init = window.innerWidth;
  const initSize = init ? (init < 720 ? screenSize.xs : (init < 1080 ? screenSize.sm : 
    (init < 1280 ? screenSize.md : screenSize.lg))) : screenSize.lg;
  const [chartSize, setChartSize] = useState(initSize);
  // using useSate and useEffect to get the screen size, modify the chart size
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setChartSize(screenSize.xs);
      } else if (window.innerWidth < 1080) {
        setChartSize(screenSize.sm);
      } else if (window.innerWidth < 1280) {
        setChartSize(screenSize.md);
      } else {
        setChartSize(screenSize.lg);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      sx={{ 
        width: '100%',
        border: '1px solid black',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // flexGrow: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem'},
          py: 1,
        }}
      >
        Jumlah Udang yang Teridentifikasi Penyakit WSSV
      </Typography>
      <LineChart
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        xAxis={[
          {
            id: 'bottom-axis',
            data: month,
            scaleType: 'band',
          }
        ]}
        yAxis={[
          {
            id: 'linearAxis',
            scaleType: 'linear'
          },
        ]}
        series={[
          {
            yAxisKey: 'linearAxis',
            data: sample1,
            label: 'MTD',
            color: '#edc949',
          },
          {
            yAxisKey: 'linearAxis',
            data: sample2,
            label: 'YTD',
            color: '#4e79a7',
          },
        ]}
        leftAxis="linearAxis"
        width={chartSize[1]}
        height={chartSize[0]}
      />
    </Box>
  )
}

export default Chart