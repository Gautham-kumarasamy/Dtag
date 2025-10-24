import React, { ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  ButtonProps,
} from "@mui/material";

interface ModalProps {
  open: boolean;
  title: string;
  message: string;
  icon?: ReactNode;
  cancelText: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm?: () => void;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  message,
  icon,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  confirmButtonProps = {},
  cancelButtonProps = {},
}) => {
  const hasConfirm = Boolean(confirmText);

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "1.25rem",
          px: 2,
          py: 2,
        }}
      >
        {icon && <Box sx={{ mr: 1, marginTop: 1 }}>{icon}</Box>}
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ pt: 1, fontFamily: "'Open Sans', sans-serif" }}>
        <Typography variant="body2">{message}</Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "flex-end", pr: 2, pb: 2 }}>
        <Button
          variant="outlined"
          onClick={onCancel}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
            ...(hasConfirm ? { mr: 1 } : {}),
          }}
          {...cancelButtonProps}
        >
          {cancelText}
        </Button>

        {hasConfirm && (
          <Button
            onClick={onConfirm}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontFamily: "'Open Sans', sans-serif",
            }}
            {...confirmButtonProps}
          >
            {confirmText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
