import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Typography,
  Button,
  Link,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  Card,
  CardContent,
  Container,
  Stack,
} from '@mui/material';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { FormTextField, FormCheckbox } from '../../components/common/Form';
import { StyledCard } from '../../components/styled';
import { loginValidationSchema } from '../../utils/validators';
import { useSnackbarContext } from '../../contexts/SnackbarContext';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { showSuccess, showError } = useSnackbarContext();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleLogin = async (data: LoginFormData) => {
    try {
      setLoading(true);
      setLoginError('');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock authentication logic
      if (data.email === 'admin@example.com' && data.password === 'Password123!') {
        showSuccess('Login successful! Welcome back.');
        // In a real app, you would redirect to dashboard or handle authentication
        console.log('Login successful:', data);
      } else {
        setLoginError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      showError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    showSuccess('Password reset link sent to your email!');
  };

  const handleSocialLogin = (provider: string) => {
    showSuccess(`${provider} login initiated`);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <StyledCard
          sx={{
            maxWidth: 480,
            mx: 'auto',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {/* Header */}
            <Box textAlign="center" mb={4}>
              <Typography
                variant="h4"
                component="h1"
                fontWeight="bold"
                color="primary"
                gutterBottom
              >
                Welcome Back
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Sign in to your MUI Design System account
              </Typography>
            </Box>

            {/* Login Error Alert */}
            {loginError && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {loginError}
              </Alert>
            )}

            {/* Demo Credentials */}
            <Alert severity="info" sx={{ mb: 3 }}>
              <Typography variant="body2" fontWeight="bold" gutterBottom>
                Demo Credentials:
              </Typography>
              <Typography variant="body2">
                Email: admin@example.com<br />
                Password: Password123!
              </Typography>
            </Alert>

            {/* Login Form */}
            <form onSubmit={handleSubmit(handleLogin)}>
              <Stack spacing={3}>
                <FormTextField
                  name="email"
                  label="Email Address"
                  control={control}
                  error={errors.email}
                  required
                  type="email"
                  placeholder="Enter your email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail size={20} />
                      </InputAdornment>
                    ),
                  }}
                />

                <FormTextField
                  name="password"
                  label="Password"
                  control={control}
                  error={errors.password}
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock size={20} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePassword}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <FormCheckbox
                    name="rememberMe"
                    label="Remember me"
                    control={control}
                    error={errors.rememberMe}
                  />
                  
                  <Link
                    component="button"
                    type="button"
                    variant="body2"
                    onClick={handleForgotPassword}
                    sx={{ textDecoration: 'none' }}
                  >
                    Forgot password?
                  </Link>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={loading}
                  endIcon={!loading && <ArrowRight size={20} />}
                  sx={{
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #1128b3 30%, #667eea 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #0f23a0 30%, #5a6fd8 90%)',
                    },
                  }}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
              </Stack>
            </form>

            {/* Divider */}
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                or continue with
              </Typography>
            </Divider>

            {/* Social Login Buttons */}
            <Stack spacing={2}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => handleSocialLogin('Google')}
                sx={{
                  py: 1.5,
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'primary.50',
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  sx={{ width: 20, height: 20, mr: 2 }}
                />
                Continue with Google
              </Button>

              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => handleSocialLogin('Microsoft')}
                sx={{
                  py: 1.5,
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'primary.50',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    mr: 2,
                    backgroundColor: '#00a1f1',
                    borderRadius: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  M
                </Box>
                Continue with Microsoft
              </Button>
            </Stack>

            {/* Sign Up Link */}
            <Box textAlign="center" mt={3}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link
                  component="button"
                  type="button"
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                  sx={{ textDecoration: 'none' }}
                  onClick={() => showSuccess('Sign up functionality coming soon!')}
                >
                  Sign up here
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </StyledCard>

        {/* Footer */}
        <Box textAlign="center" mt={3}>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
            © 2024 MUI Design System. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};