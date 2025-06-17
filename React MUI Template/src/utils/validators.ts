import * as yup from 'yup';

export const userValidationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  role: yup
    .string()
    .required('Role is required')
    .oneOf(['admin', 'user', 'moderator'], 'Invalid role selected'),
  status: yup
    .string()
    .required('Status is required')
    .oneOf(['active', 'inactive'], 'Invalid status selected'),
});

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number and special character'
    ),
  rememberMe: yup.boolean(),
});

export const settingsValidationSchema = yup.object({
  companyName: yup
    .string()
    .required('Company name is required')
    .min(2, 'Company name must be at least 2 characters'),
  notifications: yup.boolean(),
  theme: yup
    .string()
    .required('Theme is required')
    .oneOf(['light', 'dark', 'auto'], 'Invalid theme selected'),
  language: yup
    .string()
    .required('Language is required'),
});