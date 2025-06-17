import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import {
  X,
  Mail,
  Calendar,
  Shield,
  Activity,
  Edit,
  Trash2,
} from 'lucide-react';
import { User } from '../../../types';
import { formatDate, capitalizeFirst } from '../../../utils/formatters';

interface UserDetailDrawerProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

export const UserDetailDrawer: React.FC<UserDetailDrawerProps> = ({
  open,
  onClose,
  user,
  onEdit,
  onDelete,
}) => {
  if (!user) return null;

  const handleEdit = () => {
    onEdit(user);
    onClose();
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this user?')) {
      onDelete(user.id);
      onClose();
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 400,
          maxWidth: '90vw',
        },
      }}
    >
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            User Details
          </Typography>
          <IconButton onClick={onClose} size="small">
            <X size={20} />
          </IconButton>
        </Box>

        {/* User Profile */}
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
            >
              {user.name.charAt(0)}
            </Avatar>
            <Typography variant="h6" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 2 }}>
              <Chip
                label={capitalizeFirst(user.role)}
                size="small"
                color={user.role === 'admin' ? 'primary' : 'default'}
                variant={user.role === 'admin' ? 'filled' : 'outlined'}
              />
              <Chip
                label={capitalizeFirst(user.status)}
                size="small"
                color={user.status === 'active' ? 'success' : 'default'}
                variant={user.status === 'active' ? 'filled' : 'outlined'}
              />
            </Box>
          </CardContent>
        </Card>

        {/* User Information */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Information
          </Typography>
          
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Mail size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Email"
                secondary={user.email}
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <Shield size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Role"
                secondary={capitalizeFirst(user.role)}
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <Activity size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Status"
                secondary={capitalizeFirst(user.status)}
              />
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <Calendar size={20} />
              </ListItemIcon>
              <ListItemText
                primary="Created"
                secondary={formatDate(user.createdAt)}
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Activity Summary */}
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Activity Summary
          </Typography>
          
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Last login: 2 hours ago
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total sessions: 47
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Actions performed: 156
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Actions */}
        <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
          <Button
            variant="outlined"
            startIcon={<Edit size={16} />}
            onClick={handleEdit}
            fullWidth
          >
            Edit User
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Trash2 size={16} />}
            onClick={handleDelete}
            fullWidth
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};