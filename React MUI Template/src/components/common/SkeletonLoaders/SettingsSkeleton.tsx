import React from 'react';
import { Box, Grid, Skeleton, Card, CardContent, Divider } from '@mui/material';

export const SettingsSkeleton: React.FC = () => {
  return (
    <Box>
      {/* Header skeleton */}
      <Skeleton variant="text" width={150} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="text" width={350} height={24} sx={{ mb: 4 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Skeleton variant="text" width={180} height={28} sx={{ mb: 1 }} />
              <Skeleton variant="text" width={250} height={20} sx={{ mb: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Skeleton variant="text" width={120} height={20} sx={{ mb: 1 }} />
                  <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: 2 }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Skeleton variant="text" width={80} height={20} sx={{ mb: 1 }} />
                  <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: 2 }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Skeleton variant="text" width={90} height={20} sx={{ mb: 1 }} />
                  <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: 2 }} />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Skeleton variant="text" width={140} height={28} sx={{ mb: 1 }} />
              <Skeleton variant="text" width={280} height={20} sx={{ mb: 3 }} />

              <Box display="flex" alignItems="center" gap={2}>
                <Skeleton variant="rectangular" width={20} height={20} />
                <Box>
                  <Skeleton variant="text" width={200} height={20} sx={{ mb: 0.5 }} />
                  <Skeleton variant="text" width={300} height={16} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Skeleton variant="text" width={160} height={28} sx={{ mb: 1 }} />
              <Skeleton variant="text" width={200} height={20} sx={{ mb: 3 }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[1, 2, 3].map((item) => (
                  <Box key={item}>
                    <Skeleton variant="text" width={100} height={20} sx={{ mb: 0.5 }} />
                    <Skeleton variant="text" width={120} height={16} />
                  </Box>
                ))}

                <Divider sx={{ my: 1 }} />

                <Skeleton variant="rectangular" width="100%" height={32} sx={{ borderRadius: 1, mb: 1 }} />
                <Skeleton variant="rectangular" width="100%" height={32} sx={{ borderRadius: 1 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Action buttons skeleton */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Skeleton variant="rectangular" width={120} height={40} sx={{ borderRadius: 2 }} />
        <Skeleton variant="rectangular" width={120} height={40} sx={{ borderRadius: 2 }} />
      </Box>
    </Box>
  );
};