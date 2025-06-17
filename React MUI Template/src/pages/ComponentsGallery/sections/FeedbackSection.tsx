import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Alert,
  Snackbar,
  Button,
  LinearProgress,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Skeleton,
} from '@mui/material';
import { StyledCard } from '../../../components/styled';

export const FeedbackSection: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <StyledCard>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Feedback Components
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Alerts, progress indicators, and user feedback components
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Alerts
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
              <Alert severity="info">
                This is an info alert — check it out!
              </Alert>
              <Alert severity="warning">
                This is a warning alert — check it out!
              </Alert>
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
              <Alert severity="success" variant="outlined">
                This is an outlined success alert!
              </Alert>
              <Alert severity="info" variant="filled">
                This is a filled info alert!
              </Alert>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Progress Indicators
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle2" gutterBottom>
                Linear Progress
              </Typography>
              <LinearProgress sx={{ mb: 2 }} />
              <LinearProgress variant="determinate" value={50} sx={{ mb: 2 }} />
              <LinearProgress variant="buffer" value={60} valueBuffer={80} sx={{ mb: 3 }} />
              
              <Typography variant="subtitle2" gutterBottom>
                Circular Progress
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
                <CircularProgress />
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Interactive Components
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Button
                variant="contained"
                onClick={() => setSnackbarOpen(true)}
                sx={{ mb: 2, mr: 2 }}
              >
                Show Snackbar
              </Button>
              <Button
                variant="outlined"
                onClick={() => setDialogOpen(true)}
                sx={{ mb: 2 }}
              >
                Open Dialog
              </Button>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                Skeleton Loaders
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message="This is a snackbar message!"
        />

        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <DialogTitle>Example Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is an example dialog. You can use dialogs to display important
              information or get user confirmation for actions.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)} variant="contained">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </StyledCard>
  );
};