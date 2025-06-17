import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import { GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Plus, Edit, Trash2, Mail } from 'lucide-react';
import { StyledDataGrid, StyledCard } from '../../components/styled';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { UserTableSkeleton } from '../../components/common/SkeletonLoaders';
import { UserForm } from './UserForm';
import { User } from '../../types';
import { fetchUsers, createUser, updateUser, deleteUser } from '../../services/mockData';
import { formatDate, capitalizeFirst } from '../../utils/formatters';
import { useSnackbarContext } from '../../contexts/SnackbarContext';

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [formLoading, setFormLoading] = useState(false);
  const { showSuccess, showError } = useSnackbarContext();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      showError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => {
    setSelectedUser(undefined);
    setFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setFormOpen(true);
  };

  const handleDeleteUser = async (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        setUsers(prev => prev.filter(user => user.id !== userId));
        showSuccess('User deleted successfully');
      } catch (error) {
        showError('Failed to delete user');
      }
    }
  };

  const handleFormSubmit = async (userData: Omit<User, 'id' | 'createdAt'>) => {
    try {
      setFormLoading(true);
      
      if (selectedUser) {
        const updatedUser = await updateUser(selectedUser.id, userData);
        setUsers(prev => prev.map(user => 
          user.id === selectedUser.id ? updatedUser : user
        ));
        showSuccess('User updated successfully');
      } else {
        const newUser = await createUser(userData);
        setUsers(prev => [...prev, newUser]);
        showSuccess('User created successfully');
      }
      
      setFormOpen(false);
    } catch (error) {
      showError(selectedUser ? 'Failed to update user' : 'Failed to create user');
    } finally {
      setFormLoading(false);
    }
  };

  const columns: GridColDef[] = [
    {
      field: 'avatar',
      headerName: '',
      width: 60,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Avatar
          src={params.row.avatar}
          alt={params.row.name}
          sx={{ width: 40, height: 40 }}
        >
          {params.row.name.charAt(0)}
        </Avatar>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={1}>
          <Mail size={16} />
          {params.value}
        </Box>
      ),
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={capitalizeFirst(params.value)}
          size="small"
          color={params.value === 'admin' ? 'primary' : 'default'}
          variant={params.value === 'admin' ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={capitalizeFirst(params.value)}
          size="small"
          color={params.value === 'active' ? 'success' : 'default'}
          variant={params.value === 'active' ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Created',
      width: 120,
      renderCell: (params) => formatDate(params.value),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          key="edit"
          icon={
            <Tooltip title="Edit User">
              <Edit size={18} />
            </Tooltip>
          }
          label="Edit"
          onClick={() => handleEditUser(params.row)}
        />,
        <GridActionsCellItem
          key="delete"
          icon={
            <Tooltip title="Delete User">
              <Trash2 size={18} />
            </Tooltip>
          }
          label="Delete"
          onClick={() => handleDeleteUser(params.id as string)}
        />,
      ],
    },
  ];

  if (loading) {
    return <UserTableSkeleton />;
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            Users
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage user accounts and permissions
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </Box>

      <StyledCard sx={{ p: 0 }}>
        <StyledDataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
          sx={{ minHeight: 400 }}
        />
      </StyledCard>

      <UserForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        user={selectedUser}
        loading={formLoading}
      />
    </Box>
  );
};