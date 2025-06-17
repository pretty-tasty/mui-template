import React from 'react';
import { Box, Grid, Skeleton, Card, CardContent } from '@mui/material';

export const ComponentsGallerySkeleton: React.FC = () => {
  return (
    <Box>
      {/* Header skeleton */}
      <Skeleton variant="text" width={250} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="text" width={400} height={24} sx={{ mb: 4 }} />

      {/* Gallery sections skeleton */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {[1, 2, 3, 4, 5].map((section) => (
          <Card key={section}>
            <CardContent sx={{ p: 3 }}>
              <Skeleton variant="text" width={150} height={32} sx={{ mb: 1 }} />
              <Skeleton variant="text" width={300} height={20} sx={{ mb: 3 }} />

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Skeleton variant="text" width={120} height={24} sx={{ mb: 2 }} />
                  
                  {/* Component examples skeleton */}
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                    {[1, 2, 3].map((item) => (
                      <Skeleton key={item} variant="rectangular" width={100} height={36} sx={{ borderRadius: 2 }} />
                    ))}
                  </Box>

                  <Skeleton variant="text" width={100} height={24} sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
                    {[1, 2, 3].map((item) => (
                      <Skeleton key={item} variant="rectangular" width={80} height={32} sx={{ borderRadius: 2 }} />
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Skeleton variant="text" width={140} height={24} sx={{ mb: 2 }} />
                  
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                    {[1, 2, 3, 4].map((item) => (
                      <Skeleton key={item} variant="rectangular" width={90} height={36} sx={{ borderRadius: 2 }} />
                    ))}
                  </Box>

                  <Skeleton variant="text" width={110} height={24} sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    {[1, 2, 3].map((item) => (
                      <Skeleton key={item} variant="circular" width={40} height={40} />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};