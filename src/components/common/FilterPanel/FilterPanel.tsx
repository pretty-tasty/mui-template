import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
} from '@mui/material';
import { Filter, X } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterPanelProps {
  roleFilter: string;
  statusFilter: string;
  onRoleFilterChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const roleOptions: FilterOption[] = [
  { value: '', label: 'All Roles' },
  { value: 'admin', label: 'Admin' },
  { value: 'user', label: 'User' },
  { value: 'moderator', label: 'Moderator' },
];

const statusOptions: FilterOption[] = [
  { value: '', label: 'All Status' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

export const FilterPanel: React.FC<FilterPanelProps> = ({
  roleFilter,
  statusFilter,
  onRoleFilterChange,
  onStatusFilterChange,
  onClearFilters,
  hasActiveFilters,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Role</InputLabel>
        <Select
          value={roleFilter}
          label="Role"
          onChange={(e) => onRoleFilterChange(e.target.value)}
        >
          {roleOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={statusFilter}
          label="Status"
          onChange={(e) => onStatusFilterChange(e.target.value)}
        >
          {statusOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {hasActiveFilters && (
        <Button
          variant="outlined"
          size="small"
          startIcon={<X size={16} />}
          onClick={onClearFilters}
        >
          Clear Filters
        </Button>
      )}

      {hasActiveFilters && (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {roleFilter && (
            <Chip
              label={`Role: ${roleOptions.find(o => o.value === roleFilter)?.label}`}
              size="small"
              onDelete={() => onRoleFilterChange('')}
              deleteIcon={<X size={14} />}
            />
          )}
          {statusFilter && (
            <Chip
              label={`Status: ${statusOptions.find(o => o.value === statusFilter)?.label}`}
              size="small"
              onDelete={() => onStatusFilterChange('')}
              deleteIcon={<X size={14} />}
            />
          )}
        </Box>
      )}
    </Box>
  );
};