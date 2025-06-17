import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import {
  FormTextField,
  FormSelect,
} from '../../components/common/Form';
import { User } from '../../types';
import { userValidationSchema } from '../../utils/validators';

interface UserFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<User, 'id' | 'createdAt'>) => void;
  user?: User;
  loading?: boolean;
}

const roleOptions = [
  { value: 'admin', label: 'Administrator' },
  { value: 'user', label: 'Standard User' },
  { value: 'moderator', label: 'Moderator' },
];

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

export const UserForm: React.FC<UserFormProps> = ({
  open,
  onClose,
  onSubmit,
  user,
  loading = false,
}) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(userValidationSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      role: user?.role || 'user',
      status: user?.status || 'active',
    },
  });

  React.useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      });
    } else {
      reset({
        name: '',
        email: '',
        role: 'user',
        status: 'active',
      });
    }
  }, [user, reset]);

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    reset();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h6" fontWeight="bold">
          {user ? 'Edit User' : 'Add New User'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user ? 'Update user information and permissions' : 'Create a new user account'}
        </Typography>
      </DialogTitle>
      
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Basic Information
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <FormTextField
                  name="name"
                  label="Full Name"
                  control={control}
                  error={errors.name}
                  required
                  placeholder="Enter full name"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <FormTextField
                  name="email"
                  label="Email Address"
                  control={control}
                  error={errors.email}
                  required
                  type="email"
                  placeholder="Enter email address"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Permissions & Status
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormSelect
                  name="role"
                  label="Role"
                  control={control}
                  error={errors.role}
                  options={roleOptions}
                  required
                  helperText="Select the user's role and permissions level"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <FormSelect
                  name="status"
                  label="Account Status"
                  control={control}
                  error={errors.status}
                  options={statusOptions}
                  required
                  helperText="Set whether the account is active or inactive"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 2 }}>
          <Button onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ minWidth: 120 }}
          >
            {loading ? 'Saving...' : user ? 'Update User' : 'Create User'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};