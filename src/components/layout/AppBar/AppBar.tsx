import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Badge,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import { Menu as MenuIcon, Bell, Search, LogOut, User, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '../../../hooks';
import { useSnackbarContext } from '../../../contexts/SnackbarContext';

interface AppBarProps {
  onMenuClick: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({ onMenuClick }) => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  const { showSuccess } = useSnackbarContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleProfileMenuClose();
    showSuccess('Logged out successfully');
    navigate('/login');
  };

  const handleProfile = () => {
    handleProfileMenuClose();
    navigate('/settings');
  };

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
            <MenuIcon size={24} />
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
          
          <IconButton 
            color="inherit" 
            aria-label="profile"
            onClick={handleProfileMenuOpen}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              JD
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
            onClick={handleProfileMenuClose}
            PaperProps={{
              elevation: 3,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                minWidth: 200,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleProfile}>
              <User size={16} style={{ marginRight: 8 }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleProfile}>
              <Settings size={16} style={{ marginRight: 8 }} />
              Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <LogOut size={16} style={{ marginRight: 8 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};