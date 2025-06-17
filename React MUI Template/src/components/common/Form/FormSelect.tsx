import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { FormFieldProps } from '../../../types';

interface SelectOption {
  value: string | number;
  label: string;
}

interface FormSelectProps extends FormFieldProps {
  control: Control<any>;
  error?: FieldError;
  options: SelectOption[];
  fullWidth?: boolean;
  disabled?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  control,
  error,
  options,
  required = false,
  helperText,
  fullWidth = true,
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl 
          fullWidth={fullWidth} 
          error={!!error}
          disabled={disabled}
          variant="outlined"
        >
          <InputLabel required={required}>{label}</InputLabel>
          <Select
            {...field}
            label={label}
            sx={{ borderRadius: 2 }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {(error?.message || helperText) && (
            <FormHelperText>
              {error?.message || helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};