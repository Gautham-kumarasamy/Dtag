import React from "react";
import {
  TextField,
  FormControl,
  Box,
  Typography,
  TextFieldProps,
  SxProps,
  Theme,
} from "@mui/material";

interface CommonTextFieldProps {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  name?: string;
  id?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  InputProps?: TextFieldProps["InputProps"];
  sx?: SxProps<Theme>;
}

const CommonTextField: React.FC<CommonTextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  error = false,
  disabled = false,
  required = false,
  fullWidth = true,
  size = "small",
  variant = "outlined",
  name = "",
  id = "",
  type = "text",
  multiline = false,
  rows = 1,
  maxLength,
  showCharCount = false,
  InputProps,
  sx = {},
}) => {
  return (
    <FormControl fullWidth={fullWidth} error={error} disabled={disabled}>
      {label && (
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
            color: "#333",
          }}
        >
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </Typography>
      )}
      <TextField
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        fullWidth={fullWidth}
        size={size}
        variant={variant}
        type={type}
        multiline={multiline}
        rows={rows}
        InputProps={InputProps}
        inputProps={{
          maxLength: maxLength,
        }}
        sx={{
          "& .MuiInputBase-root": {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
            height: "36px",
            ...(disabled && {
              backgroundColor: "#f5f5f5",
            }),
          },
          "& .MuiOutlinedInput-input": {
            padding: "8px 12px",
          },
          "& .MuiInputBase-input::placeholder": {
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
            color: "#999",
            opacity: 1,
          },
          ...sx,
        }}
      />
      {showCharCount && maxLength ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        
          {showCharCount && maxLength && (
            <Typography
              variant="caption"
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#999",
                fontSize: "11px",
                mt: 0.5,
                ml: "auto",
              }}
            >
              {value.length}/{maxLength}
            </Typography>
          )}
        </Box>
      ) : null}
    </FormControl>
  );
};

export default CommonTextField;
