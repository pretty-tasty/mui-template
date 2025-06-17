import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Users,
  Settings,
  Palette,
  Home,
} from 'lucide-react';
import { NavItem } from '../../../types';

const menuItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <Home size={20} />,
  },
  {
    id: 'users',
    label: 'Users',
    path: '/users',
    icon: <Users size={20} />,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    path: '/analytics',
    icon: <BarChart3 size={20} />,
  },
  {
    id: 'components',
    label: 'Components Gallery',
    path: '/components',
    icon: <Palette size={20} />,
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <Settings size={20} />,
  },
];

export const DrawerMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ width: 280, height: '100%', pt: 2 }}>
      <Box sx={{ px: 3, pb: 2 }}>
        <Typography variant="h6" color="primary">
          MUI Design System
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Production-ready template
        </Typography>
      </Box>
      
      <Divider />
      
      <List sx={{ px: 2, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'primary.contrastText',
                  },
                },
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};