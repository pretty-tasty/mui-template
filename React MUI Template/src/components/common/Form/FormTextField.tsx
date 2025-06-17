import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { FormTextField as StyledTextField } from '../../styled';
import { FormFieldProps } from '../../../types';

interface FormTextFieldProps extends FormFieldProps {
  control: Control<any>;
  error?: FieldError;
  type?: string;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  control,
  error,
  required = false,
  helperText,
  placeholder,
  type = 'text',
  multiline = false,
  rows = 4,
  fullWidth = true,
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledTextField
          {...field}
          label={label}
          type={type}
          error={!!error}
          helperText={error?.message || helperText}
          required={required}
          placeholder={placeholder}
          multiline={multiline}
          rows={multiline ? rows : undefined}
          fullWidth={fullWidth}
          disabled={disabled}
          variant="outlined"
        />
      )}
    />
  );
};