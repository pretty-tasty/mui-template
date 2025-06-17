export const APP_NAME = 'MUI Design System';
export const APP_VERSION = '1.0.0';

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
} as const;

export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto',
} as const;

export const API_ENDPOINTS = {
  USERS: '/api/users',
  AUTH: '/api/auth',
  SETTINGS: '/api/settings',
} as const;

export const LOCAL_STORAGE_KEYS = {
  THEME: 'mui-theme-mode',
  USER: 'mui-user-data',
  SETTINGS: 'mui-user-settings',
} as const;

export const BREAKPOINTS = {
  MOBILE: 600,
  TABLET: 960,
  DESKTOP: 1280,
  LARGE: 1920,
} as const;

export const DRAWER_WIDTH = 280;

export const SNACKBAR_AUTO_HIDE_DURATION = 6000;

export const TABLE_PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100];

export const DEFAULT_PAGE_SIZE = 10;