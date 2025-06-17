import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { AppBar } from '../AppBar';
import { Drawer } from '../Drawer';
import { useResponsive } from '../../../hooks';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useResponsive();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar onMenuClick={handleDrawerToggle} />
      <Drawer open={drawerOpen} onClose={handleDrawerClose} />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          backgroundColor: 'background.default',
          transition: 'margin 0.25s ease-in-out',
          marginLeft: !isMobile && drawerOpen ? '280px' : 0,
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};