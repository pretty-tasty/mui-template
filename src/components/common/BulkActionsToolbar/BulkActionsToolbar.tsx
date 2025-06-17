import React from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Fade,
} from '@mui/material';
import { Trash2, UserCheck, UserX, Mail } from 'lucide-react';

interface BulkActionsToolbarProps {
  selectedCount: number;
  onDelete: () => void;
  onActivate: () => void;
  onDeactivate: () => void;
  onSendEmail: () => void;
}

export const BulkActionsToolbar: React.FC<BulkActionsToolbarProps> = ({
  selectedCount,
  onDelete,
  onActivate,
  onDeactivate,
  onSendEmail,
}) => {
  return (
    <Fade in={selectedCount > 0}>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 2,
          mb: 2,
        }}
      >
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {selectedCount} user{selectedCount !== 1 ? 's' : ''} selected
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Send Email">
            <IconButton color="inherit" onClick={onSendEmail}>
              <Mail size={20} />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Activate Users">
            <IconButton color="inherit" onClick={onActivate}>
              <UserCheck size={20} />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Deactivate Users">
            <IconButton color="inherit" onClick={onDeactivate}>
              <UserX size={20} />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Delete Users">
            <IconButton color="inherit" onClick={onDelete}>
              <Trash2 size={20} />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </Fade>
  );
};