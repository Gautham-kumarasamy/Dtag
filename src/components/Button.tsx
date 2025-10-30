import React from 'react';
import { Button, SxProps, Theme } from '@mui/material';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'outlined' | 'contained' | 'text';
  fontSize?: string | number;
  fontWeight?: number;
  padding?: string | number;
  paddingX?: string | number;
  paddingY?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  sx?: SxProps<Theme>;
}
export const OutlinedButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  fontSize = '13px',
  fontWeight = 600,
  padding,
  paddingX = 1.5,
  paddingY,
  height,
  borderRadius = 0.5,
  fullWidth = false,
  disabled = false,
  type = 'button',
  sx = {},
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      type={type}
      sx={{
        textTransform: 'uppercase',
        fontFamily: "'Open Sans', sans-serif",
        fontSize,
        fontWeight,
        border: '1px solid #007CB0',
        color: '#0284bbff',
        px: padding ?? paddingX,
        py: paddingY,
        height,
        borderRadius,
        '&:hover': {
          border: '1px solid #005a85',
          backgroundColor: 'rgba(0, 124, 176, 0.04)',
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

// Contained Button Component
export const ContainedButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  fontSize = '13px',
  fontWeight = 600,
  padding,
  paddingX = 2,
  paddingY,
  height = 36,
  borderRadius = 0.5,
  fullWidth = false,
  disabled = false,
  type = 'button',
  sx = {},
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      type={type}
      sx={{
        textTransform: 'uppercase',
        fontFamily: "'Open Sans', sans-serif",
        fontSize,
        fontWeight,
        backgroundColor: '#007CB0',
        px: padding ?? paddingX,
        py: paddingY,
        height,
        borderRadius,
        '&:hover': {
          backgroundColor: '#005a85',
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
