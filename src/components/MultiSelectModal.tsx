import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CommonTextField from "./Textfield";
import CommonDropdown from "./Dropdown";

export interface Field {
  name: string;
  label: string;
  type?: "text" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
  icon?: "search";
}

export interface MultiSelectModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  onSave: (data: Record<string, string>[]) => void;
  fields: Field[];
  addButtonText?: string;
  cancelText?: string;
  saveText?: string;
  dialogWidth?: number | string;
  dataKey?: string;
}

const MultiSelectModal: React.FC<MultiSelectModalProps> = ({
  open,
  title = "Add Records",
  onClose,
  onSave,
  fields = [],
  addButtonText = "Add More",
  cancelText = "Cancel",
  saveText = "Save",
  dialogWidth = 640,
}) => {
  const [entries, setEntries] = useState<Record<string, string>[]>([
    Object.fromEntries(fields.map((f) => [f.name, ""])),
  ]);

  const handleAddEntry = () => {
    setEntries([
      ...entries,
      Object.fromEntries(fields.map((f) => [f.name, ""])),
    ]);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  const handleSave = () => {
    onSave(entries);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: dialogWidth,
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #D9D9D9",
          fontWeight: 600,
          px: 3,
          py: 2,
        }}
      >
        {title}
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          mt: 2,
          px: 3,
          maxHeight: "400px",
          overflowY: entries.length > 4 ? "auto" : "visible",
        }}
      >
        {entries.map((entry, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: index > 0 ? 2 : 0,
            }}
          >
            {fields.map((field) => (
              <Box key={field.name} sx={{ flex: 1 }}>
                {field.type === "select" ? (
                  <CommonDropdown
                    label={field.label}
                    value={entry[field.name]}
                    onChange={(e) =>
                      handleChange(index, field.name, e.target.value as string)
                    }
                    options={
                      field.options?.map((opt) => ({
                        label: opt.label,
                        value: opt.value,
                      })) || []
                    }
                    placeholder={field.placeholder || "Select"}
                    required={field.required}
                  />
                ) : (
                  <CommonTextField
                    label={field.label}
                    placeholder={field.placeholder || "Enter value"}
                    value={entry[field.name]}
                    onChange={(e) =>
                      handleChange(index, field.name, e.target.value)
                    }
                    required={field.required}
                    InputProps={
                      field.icon === "search"
                        ? {
                            endAdornment: (
                              <IconButton edge="end">
                                <SearchIcon sx={{ color: "#5F6368" }} />
                              </IconButton>
                            ),
                          }
                        : undefined
                    }
                  />
                )}
              </Box>
            ))}
          </Box>
        ))}

        <Button
          startIcon={<AddIcon />}
          onClick={handleAddEntry}
          sx={{
            mt: 2,
            textTransform: "uppercase",
            color: "#0073CF",
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          {addButtonText}
        </Button>
      </DialogContent>

      <DialogActions
        sx={{
          pr: 3,
          pb: 2,
          pt: 1,
          borderTop: "1px solid #D9D9D9",
        }}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{ textTransform: "uppercase" }}
        >
          {cancelText}
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            textTransform: "uppercase",
            backgroundColor: "#007CB0",
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
          }}
          disabled={entries.some((entry) =>
            fields.some((f) => f.required && !entry[f.name])
          )}
        >
          {saveText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MultiSelectModal;
