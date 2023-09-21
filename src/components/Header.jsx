import React from 'react'
import { 
  Box,
  Stack,
  Typography,
  Divider,
  Link,
  Icon,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { topLinks } from '../utils/links';

const Header = () => {
  return (
    // Header
    <Box
      sx={{
        display: 'flex',
        direction: 'row',
        justifyContent: { xs: 'flex-start', md: 'center' },
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        gap: 10,
        py: 2,
        px: 4,
      }}
    >
      {/* Web Title */}
      <Typography
        color="textPrimary"
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mx: 2,
        }}
      >
        Shorter
      </Typography>
      {/* User Profile & Links */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: 'center',
          position: 'absolute',
          right: 0,
          px: 5,
        }}
      >
        {/* Icon */}
        <Icon
          component={AccountCircleIcon}
          // color="primary"
          sx={{
            fontSize: 50,
          }}
        />
        {/* Profile & Links */}
        <Stack
          direction="column"
          spacing={0.2}
        >
          <Typography
            color="textPrimary"
            variant="h6"
            sx={{
              fontWeight: '600',
              alignSelf: 'center',
            }}
          >
            User
          </Typography>

          <Divider
            sx={{
              border: 1,
            }}
          />
          
          {/* Links */}
          <Stack
            direction="row"
            spacing={2}
            pt={0.4}
          >
            {topLinks.map((link, index) => {
              return (
                <Stack
                  direction="row"
                  spacing={2}
                >
                  <Link
                    key={index}
                    href={link.url}
                    underline="none"
                    variant="body2"
                    color="textPrimary"
                    sx={{
                      fontWeight: '600',
                      '&:hover': {
                        // if link.color exist use it else use primary
                        color: link.color ? link.color : 'primary.main',
                      },
                    }}
                  >
                    {link.title}
                  </Link>
                  {/* If not last item add divider */}
                  {(index+1) !== topLinks.length && (
                    <Divider
                      sx={{
                        border: 1,
                      }}
                    />
                  )}
                </Stack>
              )
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Header