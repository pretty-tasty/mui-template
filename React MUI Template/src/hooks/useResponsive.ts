import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const useResponsive = () => {
  const theme = useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.up('xl'));
  
  const getCurrentBreakpoint = () => {
    if (isExtraLarge) return 'xl';
    if (isDesktop) return 'lg';
    if (isTablet) return 'md';
    if (isMobile) return 'sm';
    return 'xs';
  };
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isExtraLarge,
    currentBreakpoint: getCurrentBreakpoint(),
    up: (breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => 
      useMediaQuery(theme.breakpoints.up(breakpoint)),
    down: (breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => 
      useMediaQuery(theme.breakpoints.down(breakpoint)),
    between: (start: 'xs' | 'sm' | 'md' | 'lg', end: 'sm' | 'md' | 'lg' | 'xl') => 
      useMediaQuery(theme.breakpoints.between(start, end)),
  };
};