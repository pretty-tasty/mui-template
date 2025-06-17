import React from 'react';
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { StyledCard } from '../../../components/styled';

export const TypographySection: React.FC = () => {
  return (
    <StyledCard>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Typography
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Typography scale and text styles using Source Sans 3 font
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Headings
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Body Text
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
              <Typography variant="body1">
                Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography variant="body2">
                Body 2 - Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography variant="subtitle1">Subtitle 1</Typography>
              <Typography variant="subtitle2">Subtitle 2</Typography>
              <Typography variant="caption">Caption text</Typography>
              <Typography variant="overline">Overline text</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Text Colors and Variants
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
              <Typography variant="body1" color="text.primary">
                Primary text color
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Secondary text color
              </Typography>
              <Typography variant="body1" color="text.disabled">
                Disabled text color
              </Typography>
              <Typography variant="body1" color="primary">
                Primary color
              </Typography>
              <Typography variant="body1" color="secondary">
                Secondary color
              </Typography>
              <Typography variant="body1" color="error">
                Error color
              </Typography>
              <Typography variant="body1" color="warning.main">
                Warning color
              </Typography>
              <Typography variant="body1" color="info.main">
                Info color
              </Typography>
              <Typography variant="body1" color="success.main">
                Success color
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  );
};