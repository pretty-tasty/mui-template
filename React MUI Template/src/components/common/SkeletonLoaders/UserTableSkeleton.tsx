import React from 'react';
import { Box, Skeleton, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const UserTableSkeleton: React.FC = () => {
  return (
    <Box>
      {/* Header skeleton */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Skeleton variant="text" width={120} height={40} sx={{ mb: 1 }} />
          <Skeleton variant="text" width={250} height={24} />
        </Box>
        <Skeleton variant="rectangular" width={120} height={40} sx={{ borderRadius: 2 }} />
      </Box>

      {/* Table skeleton */}
      <Card sx={{ p: 0 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Skeleton variant="text" width={40} height={20} /></TableCell>
                <TableCell><Skeleton variant="text" width={80} height={20} /></TableCell>
                <TableCell><Skeleton variant="text" width={120} height={20} /></TableCell>
                <TableCell><Skeleton variant="text" width={60} height={20} /></TableCell>
                <TableCell><Skeleton variant="text" width={70} height={20} /></TableCell>
                <TableCell><Skeleton variant="text" width={80} height={20} /></TableCell>
                <TableCell><Skeleton variant="text" width={80} height={20} /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
                <TableRow key={row}>
                  <TableCell>
                    <Skeleton variant="circular" width={40} height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={120} height={20} />
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Skeleton variant="circular" width={16} height={16} />
                      <Skeleton variant="text" width={150} height={20} />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" width={70} height={24} sx={{ borderRadius: 4 }} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" width={60} height={24} sx={{ borderRadius: 4 }} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width={80} height={20} />
                  </TableCell>
                  <TableCell>
                    <Box display="flex" gap={1}>
                      <Skeleton variant="circular" width={24} height={24} />
                      <Skeleton variant="circular" width={24} height={24} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        {/* Pagination skeleton */}
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2} sx={{ backgroundColor: 'grey.50' }}>
          <Skeleton variant="text" width={150} height={20} />
          <Box display="flex" gap={1}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="circular" width={32} height={32} />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};