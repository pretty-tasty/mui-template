import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  Fab,
  ButtonGroup,
} from '@mui/material';
import { Download, Heart, Share, AArrowDown as Add, Edit, Delete } from 'lucide-react';
import { StyledCard } from '../../../components/styled';

export const ButtonSection: React.FC = () => {
  return (
    <StyledCard>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Buttons
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Different button variants, sizes, and states
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Button Variants
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
            </Box>

            <Typography variant="h6" gutterBottom>
              Button Sizes
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
              <Button variant="contained" size="small">Small</Button>
              <Button variant="contained" size="medium">Medium</Button>
              <Button variant="contained" size="large">Large</Button>
            </Box>

            <Typography variant="h6" gutterBottom>
              Button Colors
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="info">Info</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Buttons with Icons
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
              <Button variant="contained" startIcon={<Download size={16} />}>
                Download
              </Button>
              <Button variant="outlined" endIcon={<Share size={16} />}>
                Share
              </Button>
              <Button variant="text" startIcon={<Heart size={16} />}>
                Like
              </Button>
            </Box>

            <Typography variant="h6" gutterBottom>
              Icon Buttons
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <IconButton color="primary">
                <Edit size={20} />
              </IconButton>
              <IconButton color="error">
                <Delete size={20} />
              </IconButton>
              <IconButton color="success">
                <Heart size={20} />
              </IconButton>
            </Box>

            <Typography variant="h6" gutterBottom>
              Floating Action Buttons
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Fab color="primary" size="small">
                <Add size={16} />
              </Fab>
              <Fab color="primary">
                <Add size={20} />
              </Fab>
              <Fab color="secondary" variant="extended">
                <Add size={20} />
                Extended
              </Fab>
            </Box>

            <Typography variant="h6" gutterBottom>
              Button Groups
            </Typography>
            <ButtonGroup variant="contained">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  );
};