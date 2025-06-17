import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Paper,
  Stack,
} from '@mui/material';
import { GridColDef, GridActionsCellItem, GridRowSelectionModel } from '@mui/x-data-grid';
import { Plus, Edit, Trash2, Mail, Eye } from 'lucide-react';
import { StyledDataGrid, StyledCard } from '../../components/styled';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { UserTableSkeleton } from '../../components/common/SkeletonLoaders';
import { SearchField } from '../../components/common/SearchField';
import { FilterPanel } from '../../components/common/FilterPanel';
import { BulkActionsToolbar } from '../../components/common/BulkActionsToolbar';
import { UserDetailDrawer } from '../../components/common/UserDetailDrawer';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
  const [detailDrawerOpen, setDetailDrawerOpen] = useState(false);
  const [detailUser, setDetailUser] = useState<User | null>(null);
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

  // Filter and search users
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRole = !roleFilter || user.role === roleFilter;
      const matchesStatus = !statusFilter || user.status === statusFilter;
      
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchQuery, roleFilter, statusFilter]);

  const hasActiveFilters = roleFilter !== '' || statusFilter !== '';

  const handleAddUser = () => {
    setSelectedUser(undefined);
    setFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setFormOpen(true);
  };

  const handleViewUser = (user: User) => {
    setDetailUser(user);
    setDetailDrawerOpen(true);
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

  const handleBulkDelete = async () => {
    if (selectedRows.length === 0) return;
    
    if (confirm(`Are you sure you want to delete ${selectedRows.length} user(s)?`)) {
      try {
        // In a real app, you'd make a bulk delete API call
        for (const userId of selectedRows) {
          await deleteUser(userId as string);
        }
        setUsers(prev => prev.filter(user => !selectedRows.includes(user.id)));
        setSelectedRows([]);
        showSuccess(`${selectedRows.length} user(s) deleted successfully`);
      } catch (error) {
        showError('Failed to delete users');
      }
    }
  };

  const handleBulkActivate = async () => {
    if (selectedRows.length === 0) return;
    
    try {
      // In a real app, you'd make a bulk update API call
      const updatedUsers = users.map(user => 
        selectedRows.includes(user.id) 
          ? { ...user, status: 'active' as const }
          : user
      );
      setUsers(updatedUsers);
      setSelectedRows([]);
      showSuccess(`${selectedRows.length} user(s) activated successfully`);
    } catch (error) {
      showError('Failed to activate users');
    }
  };

  const handleBulkDeactivate = async () => {
    if (selectedRows.length === 0) return;
    
    try {
      // In a real app, you'd make a bulk update API call
      const updatedUsers = users.map(user => 
        selectedRows.includes(user.id) 
          ? { ...user, status: 'inactive' as const }
          : user
      );
      setUsers(updatedUsers);
      setSelectedRows([]);
      showSuccess(`${selectedRows.length} user(s) deactivated successfully`);
    } catch (error) {
      showError('Failed to deactivate users');
    }
  };

  const handleBulkSendEmail = () => {
    if (selectedRows.length === 0) return;
    
    // In a real app, you'd open an email composer or send emails
    showSuccess(`Email sent to ${selectedRows.length} user(s)`);
    setSelectedRows([]);
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

  const handleClearFilters = () => {
    setRoleFilter('');
    setStatusFilter('');
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
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem
          key="view"
          icon={
            <Tooltip title="View Details">
              <Eye size={18} />
            </Tooltip>
          }
          label="View"
          onClick={() => handleViewUser(params.row)}
        />,
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
            Manage user accounts and permissions ({filteredUsers.length} users)
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

      {/* Search and Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ flex: 1, minWidth: 300 }}>
              <SearchField
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search users by name or email..."
              />
            </Box>
          </Box>
          
          <FilterPanel
            roleFilter={roleFilter}
            statusFilter={statusFilter}
            onRoleFilterChange={setRoleFilter}
            onStatusFilterChange={setStatusFilter}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </Stack>
      </Paper>

      {/* Bulk Actions Toolbar */}
      <BulkActionsToolbar
        selectedCount={selectedRows.length}
        onDelete={handleBulkDelete}
        onActivate={handleBulkActivate}
        onDeactivate={handleBulkDeactivate}
        onSendEmail={handleBulkSendEmail}
      />

      {/* Data Grid */}
      <StyledCard sx={{ p: 0 }}>
        <StyledDataGrid
          rows={filteredUsers}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          rowSelectionModel={selectedRows}
          onRowSelectionModelChange={setSelectedRows}
          autoHeight
          sx={{ minHeight: 400 }}
        />
      </StyledCard>

      {/* User Form Modal */}
      <UserForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        user={selectedUser}
        loading={formLoading}
      />

      {/* User Detail Drawer */}
      <UserDetailDrawer
        open={detailDrawerOpen}
        onClose={() => setDetailDrawerOpen(false)}
        user={detailUser}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </Box>
  );
};