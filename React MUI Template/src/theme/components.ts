import { Components, Theme } from '@mui/material/styles';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 4,
        boxShadow: theme.shadows[2],
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          boxShadow: theme.shadows[4]
        }
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 500,
        minWidth: 120,
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: theme.shadows[2]
        }
      }),
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
          transition: 'all 0.25s ease-in-out',
          '&.Mui-error': {
            animation: 'shake 0.3s',
            '@keyframes shake': {
              '0%, 100%': { transform: 'translateX(0)' },
              '25%': { transform: 'translateX(-5px)' },
              '75%': { transform: 'translateX(5px)' }
            }
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          }
        }
      })
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 500
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8
      }
    }
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12
      }
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        borderBottom: '1px solid #DDE0EF'
      }
    }
  }
};