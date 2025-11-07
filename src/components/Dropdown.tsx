import React, { useState, ReactNode } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CommonDropdownProps {
  label?: string;
  value: string | string[];
  onChange?: (event: SelectChangeEvent<string | string[]>) => void;
  options?: DropdownOption[];
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  displayEmpty?: boolean;
  renderValue?: (value: string | string[]) => ReactNode;
  multiple?: boolean;
  name?: string;
  id?: string;
  sx?: SxProps<Theme>;
}

const CommonDropdown: React.FC<CommonDropdownProps> = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error = false,
  helperText = "",
  disabled = false,
  required = false,
  fullWidth = true,
  size = "small",
  variant = "outlined",
  displayEmpty = true,
  renderValue,
  multiple = false,
  name = "",
  id = "",
  sx = {},
}) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleOpen = () => {
    if (!disabled) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultRenderValue = (selected: string | string[]): ReactNode => {
    if (!selected || (Array.isArray(selected) && selected.length === 0)) {
      return (
        <span
          style={{
            color: "#999",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
          }}
        >
          {placeholder}
        </span>
      );
    }

    if (multiple && Array.isArray(selected)) {
      return options
        .filter((opt) => selected.includes(opt.value))
        .map((opt) => opt.label)
        .join(", ");
    }

    const selectedOption = options.find((opt) => opt.value === selected);
    return selectedOption ? selectedOption.label : selected;
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      disabled={disabled}
      required={required}
      size={size}
      variant={variant}
      sx={{
        ...sx,
      }}
    >
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
      <Select
        labelId={`${id || name}-label`}
        id={id || name}
        name={name}
        value={value}
        onChange={handleChange}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        displayEmpty={displayEmpty}
        renderValue={renderValue || defaultRenderValue}
        multiple={multiple}
        IconComponent={KeyboardArrowDown}
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "13px",
          height: "36px",
          "& .MuiSelect-select": {
            padding: "8px 12px",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiSelect-icon": {
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "none",
          },
          ...sx,
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 300,
              "& .MuiMenuItem-root": {
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                py: 1,
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                "&.Mui-selected": {
                  backgroundColor: "#e3f2fd",
                  "&:hover": {
                    backgroundColor: "#bbdefb",
                  },
                },
              },
            },
          },
        }}
      >
        {displayEmpty && !multiple && (
          <MenuItem value="" disabled>
            <span style={{ color: "#999" }}>{placeholder}</span>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled || false}
          >
            {option.icon && (
              <Box component="span" sx={{ mr: 1, display: "flex" }}>
                {option.icon}
              </Box>
            )}
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonDropdown;
