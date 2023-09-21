import React from 'react'
import { 
  Box,
  Stack,
  Link,
  Icon,
} from '@mui/material';

import { sideLinks } from '../utils/links';

const SideBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Links */}
      <Stack
        direction="column"
        spacing={4}
        sx={{
          flexGrow: 1,
          pt: 10,
          px: 5,
        }}
      >
        {sideLinks.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.url}
              color="textPrimary"
              underline="none"
              sx={{
                display: 'flex',
                gap: 2,
                fontSize: 24,
                fontWeight: 'bold',
                '&:hover': {
                  color: 'primary.main',
                }
              }}
            >
              <Icon
                color="primary.main"
                sx={{
                  fontSize: 28,
                }}
              >
                {link.icon}
              </Icon>
              {link.title}
            </Link>
          )
        })}
      </Stack>
    </Box>
  )
}

export default SideBar