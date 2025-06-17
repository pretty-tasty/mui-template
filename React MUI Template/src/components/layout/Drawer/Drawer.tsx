import React from 'react';
import {
  Drawer as MuiDrawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { DrawerMenu } from './DrawerMenu';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <MuiDrawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: theme.shadows[2],
        },
      }}
    >
      <DrawerMenu />
    </MuiDrawer>
  );
};