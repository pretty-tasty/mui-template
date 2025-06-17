import React from 'react';
import { Box, Grid, Skeleton, Card, CardContent } from '@mui/material';

export const DashboardSkeleton: React.FC = () => {
  return (
    <Box>
      {/* Header skeleton */}
      <Skeleton variant="text" width={200} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="text" width={400} height={24} sx={{ mb: 4 }} />

      {/* Stats cards skeleton */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box flex={1}>
                    <Skeleton variant="text" width={80} height={20} sx={{ mb: 1 }} />
                    <Skeleton variant="text" width={120} height={32} sx={{ mb: 1 }} />
                    <Skeleton variant="text" width={60} height={16} />
                  </Box>
                  <Skeleton variant="circular" width={48} height={48} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Content area skeleton */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Skeleton variant="text" width={180} height={28} sx={{ mb: 1 }} />
              <Skeleton variant="text" width={300} height={20} sx={{ mb: 3 }} />
              
              {/* Progress bars skeleton */}
              {[1, 2, 3].map((item) => (
                <Box key={item} sx={{ mb: 2 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Skeleton variant="text" width={120} height={16} />
                    <Skeleton variant="text" width={40} height={16} />
                  </Box>
                  <Skeleton variant="rectangular" width="100%" height={8} sx={{ borderRadius: 4 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Skeleton variant="text" width={140} height={28} sx={{ mb: 1 }} />
              <Skeleton variant="text" width={200} height={20} sx={{ mb: 3 }} />
              
              {/* Quick actions skeleton */}
              {[1, 2, 3].map((item) => (
                <Box key={item} sx={{ mb: 2, p: 2, backgroundColor: 'grey.50', borderRadius: 2 }}>
                  <Skeleton variant="text" width={100} height={20} sx={{ mb: 0.5 }} />
                  <Skeleton variant="text" width={150} height={16} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};