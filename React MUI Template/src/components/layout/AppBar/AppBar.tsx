import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Badge,
} from '@mui/material';
import { Menu, Bell, Search } from 'lucide-react';
import { useResponsive } from '../../../hooks';

interface AppBarProps {
  onMenuClick: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({ onMenuClick }) => {
  const { isMobile } = useResponsive();

  return (
    <MuiAppBar position="fixed" color="inherit" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <Menu size={24} />
          </IconButton>
          
          {!isMobile && (
            <Typography variant="h6" noWrap component="div">
              MUI Design System
            </Typography>
          )}
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton color="inherit" aria-label="search">
            <Search size={20} />
          </IconButton>
          
          <IconButton color="inherit" aria-label="notifications">
            <Badge badgeContent={4} color="error">
              <Bell size={20} />
            </Badge>
          </IconButton>
          
          <IconButton color="inherit" aria-label="profile">
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              JD
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};