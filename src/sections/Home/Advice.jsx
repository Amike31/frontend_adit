import React from 'react'
import { 
  Box,
  Stack,
  Typography,
} from '@mui/material';

const Advice = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: '1px solid',
        borderRadius: '20px',
        flexGrow: 1,
        py: 2,
        px: 3,
      }}
    >
      <Typography
        color="textPrimary"
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        Saran Tindakan
      </Typography>
      <Typography
        color="textPrimary"
        variant="h5"
        sx={{
          mb: 1.5,
        }}
      >
        Kondisi: Sedang
      </Typography>
      <Typography
        color="textPrimary"
        variant="body1"
        sx={{
          mb: 2,
        }}
      >
        Dalam kondisi ini, sebaiknya tambak udang yang terkena penyakit diberikan obat untuk
        menanggulangi persebarannya dan dicek kembali dalam waktu 1-2 minggu.
      </Typography>

    </Box>
  )
}

export default Advice