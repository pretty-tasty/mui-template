import { styled } from '@mui/material/styles';
import { Card, Button, TextField, Chip, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 4,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[2],
  transition: 'all 0.25s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)'
  }
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  padding: theme.spacing(1, 3),
  minWidth: 120,
  boxShadow: 'none',
  borderRadius: 8,
  '&:hover': {
    boxShadow: theme.shadows[2],
    transform: 'translateY(-1px)'
  }
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  padding: theme.spacing(1, 3),
  minWidth: 120,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-1px)'
  }
}));

export const FormTextField = styled(TextField)(({ theme }) => ({
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
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2
    }
  }
}));

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 'none',
  borderRadius: 8,
  '& .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.grey[50],
    borderBottom: `2px solid ${theme.palette.divider}`,
    borderRadius: '8px 8px 0 0'
  },
  '& .MuiDataGrid-row': {
    '&:hover': {
      backgroundColor: theme.palette.grey[50]
    }
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.grey[50]
  }
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: 8,
  fontWeight: 500,
  height: 28,
  fontSize: '0.75rem'
}));

export const GlassPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 12
}));

export const AnimatedCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.02)',
    boxShadow: theme.shadows[8]
  }
}));