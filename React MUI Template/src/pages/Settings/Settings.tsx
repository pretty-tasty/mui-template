import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
} from '@mui/material';
import {
  FormTextField,
  FormSelect,
  FormCheckbox,
} from '../../components/common/Form';
import { StyledCard } from '../../components/styled';
import { SettingsSkeleton } from '../../components/common/SkeletonLoaders';
import { settingsValidationSchema } from '../../utils/validators';
import { useSnackbarContext } from '../../contexts/SnackbarContext';

const themeOptions = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'auto', label: 'Auto' },
];

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
];

export const Settings: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const { showSuccess, showError } = useSnackbarContext();
  
  const { control, handleSubmit, formState: { errors, isDirty } } = useForm({
    resolver: yupResolver(settingsValidationSchema),
    defaultValues: {
      companyName: 'MUI Design System Co.',
      notifications: true,
      theme: 'light',
      language: 'en',
    },
  });

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Settings saved:', data);
      showSuccess('Settings saved successfully');
    } catch (error) {
      showError('Failed to save settings');
    }
  };

  if (loading) {
    return <SettingsSkeleton />;
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Settings
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Configure your application preferences and account settings
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <StyledCard>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  General Settings
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Basic application configuration
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormTextField
                      name="companyName"
                      label="Company Name"
                      control={control}
                      error={errors.companyName}
                      required
                      placeholder="Enter company name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormSelect
                      name="theme"
                      label="Theme"
                      control={control}
                      error={errors.theme}
                      options={themeOptions}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormSelect
                      name="language"
                      label="Language"
                      control={control}
                      error={errors.language}
                      options={languageOptions}
                      required
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" gutterBottom>
                  Notifications
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Manage your notification preferences
                </Typography>

                <FormCheckbox
                  name="notifications"
                  label="Enable email notifications"
                  control={control}
                  error={errors.notifications}
                  helperText="Receive email updates about important activities"
                />
              </Box>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Account Information
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Your account details and status
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="subtitle2">Account Type</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Premium Plan
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2">Member Since</Typography>
                    <Typography variant="body2" color="text.secondary">
                      January 2024
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2">Storage Used</Typography>
                    <Typography variant="body2" color="text.secondary">
                      2.4 GB of 10 GB
                    </Typography>
                  </Box>

                  <Divider />

                  <Button variant="outlined" size="small">
                    Manage Subscription
                  </Button>
                  <Button variant="outlined" size="small" color="error">
                    Delete Account
                  </Button>
                </Box>
              </Box>
            </StyledCard>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="outlined" disabled={!isDirty}>
            Reset Changes
          </Button>
          <Button variant="contained" type="submit" disabled={!isDirty}>
            Save Settings
          </Button>
        </Box>
      </form>
    </Box>
  );
};