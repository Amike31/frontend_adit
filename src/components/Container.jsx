import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar';
import { 
  Box,
  Divider,
} from '@mui/material';

const Container = ({ children, isAuth }) => {

  const MIN_HEIGHT = '97.6vh'
  const MARGIN = 1

  if (isAuth) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: MIN_HEIGHT,
          border: 4,
          m: MARGIN,
        }}
      >
        {children}
      </Box>
    )
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: MIN_HEIGHT,
          border: 4,
          m: MARGIN,
        }}
      >
        {/* Header */}
        <Header />
        <Divider
          sx={{
            border: 2,
          }}
        />

        {/* Main */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexGrow: 1,
          }}
        >
          <SideBar />
          <Divider
            sx={{
              border: 2,
            }}
          />
          {children}
        </Box>

        {/* Footer */}
        
      </Box>
    )
  }
}

export default Container
