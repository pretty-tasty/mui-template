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
  { value: 'admin', label: 'Admin' },
  { value: 'user', label: 'User' },
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

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    reset();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {user ? 'Edit User' : 'Add New User'}
      </DialogTitle>
      
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormTextField
                  name="name"
                  label="Full Name"
                  control={control}
                  error={errors.name}
                  required
                  placeholder="Enter full name"
                />
              </Grid>
              
              <Grid item xs={12}>
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
              
              <Grid item xs={12} sm={6}>
                <FormSelect
                  name="role"
                  label="Role"
                  control={control}
                  error={errors.role}
                  options={roleOptions}
                  required
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <FormSelect
                  name="status"
                  label="Status"
                  control={control}
                  error={errors.status}
                  options={statusOptions}
                  required
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
          >
            {loading ? 'Saving...' : user ? 'Update User' : 'Add User'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};