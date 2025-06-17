import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export const useTheme = () => {
  const theme = useMuiTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  
  return {
    theme,
    spacing: theme.spacing,
    breakpoints: {
      isMobile,
      isTablet,
      isDesktop,
    },
  };
};