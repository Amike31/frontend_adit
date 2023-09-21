import React from 'react'
import { 
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { pondDetail } from '../../utils/datas';

const DetailTable = () => {
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
            <TableCell align="center">Sample</TableCell>
            <TableCell align="center">Hasil Identifikasi</TableCell>
            <TableCell align="center">Indikator</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pondDetail.map((row, index) => (
            <TableRow
              key={index}
            >
              <TableCell align="center">{row.sample}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
              <TableCell align="center">{row.indicator}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}

export default DetailTable