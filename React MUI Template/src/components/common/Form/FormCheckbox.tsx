import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@mui/material';

interface FormCheckboxProps {
  name: string;
  label: string;
  control: Control<any>;
  error?: FieldError;
  helperText?: string;
  disabled?: boolean;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  label,
  control,
  error,
  helperText,
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <FormControl error={!!error} disabled={disabled}>
          <FormControlLabel
            control={
              <Checkbox
                checked={value || false}
                onChange={(e) => onChange(e.target.checked)}
                color="primary"
              />
            }
            label={label}
          />
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