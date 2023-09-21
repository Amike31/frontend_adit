import React from 'react'
import { 
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { pondData } from '../../utils/datas';

const PondTable = () => {
  return (
    <Box
      sx={{ 
        width: '100%',
        // flexGrow: 2,
        borderRadius: '20px',
      }}
    >
      <Table
        sx={{
          border: '1px solid black',
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: '#cecece',
            }}
          >
            <TableCell align="center">No.</TableCell>
            <TableCell align="center">Lokasi</TableCell>
            <TableCell align="center">Jumlah Teridentifikasi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pondData.map((row, index) => (
            <TableRow
              key={index}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}

export default PondTable