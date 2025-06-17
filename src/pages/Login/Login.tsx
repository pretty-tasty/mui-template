import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Link,
  Divider,
  Alert,
  Paper,
  Container,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { FormTextField, FormCheckbox } from '../../components/common/Form';
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
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { showSuccess } = useSnackbarContext();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock authentication - in real app, this would be an API call
      if (data.email === 'admin@example.com' && data.password === 'Password123!') {
        showSuccess('Login successful! Welcome back.');
        navigate('/');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
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

          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          <Box
            sx={{
              mb: 3,
              p: 2,
              backgroundColor: 'info.light',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'info.main',
            }}
          >
            <Typography variant="body2" color="info.dark" fontWeight="medium">
              Demo Credentials:
            </Typography>
            <Typography variant="body2" color="info.dark">
              Email: admin@example.com
            </Typography>
            <Typography variant="body2" color="info.dark">
              Password: Password123!
            </Typography>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <FormTextField
                name="email"
                label="Email Address"
                control={control}
                error={errors.email}
                type="email"
                placeholder="Enter your email"
                required
                fullWidth
                disabled={loading}
              />

              <FormTextField
                name="password"
                label="Password"
                control={control}
                error={errors.password}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
                fullWidth
                disabled={loading}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <FormCheckbox
                  name="rememberMe"
                  label="Remember me"
                  control={control}
                  disabled={loading}
                />
                <Link
                  href="#"
                  variant="body2"
                  color="primary"
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
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
                endIcon={loading ? null : <ArrowRight size={20} />}
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  background: 'linear-gradient(45deg, #1128b3 30%, #667eea 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #0f23a0 30%, #5a6fd8 90%)',
                  },
                }}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Box>
          </form>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              or
            </Typography>
          </Divider>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              disabled={loading}
              startIcon={
                <Box
                  component="img"
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  sx={{ width: 20, height: 20 }}
                />
              }
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
              }}
            >
              Continue with Google
            </Button>

            <Button
              variant="outlined"
              size="large"
              fullWidth
              disabled={loading}
              startIcon={
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: '#1877f2',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  f
                </Box>
              }
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
              }}
            >
              Continue with Facebook
            </Button>
          </Box>

          <Box textAlign="center" mt={4}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{' '}
              <Link
                href="#"
                color="primary"
                sx={{ 
                  textDecoration: 'none', 
                  fontWeight: 600,
                  '&:hover': { textDecoration: 'underline' } 
                }}
              >
                Sign up here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};