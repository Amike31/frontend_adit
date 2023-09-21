import React from 'react'
import { 
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
} from '@mui/material';

import { pondHistory } from '../../utils/datas';

const HistoryTable = () => {
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
            <TableCell align="center">Timestamp</TableCell>
            <TableCell align="center">Lokasi</TableCell>
            <TableCell align="center">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pondHistory.map((row, index) => (
            <TableRow
              key={index}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.timestamp.toLocaleString()}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                <Link
                  href={`/history/${index+1}`}
                  underline="none"
                  sx={{
                    color: 'blue',
                  }}
                >
                  Cek Detail Kolam Ini
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}

export default HistoryTable