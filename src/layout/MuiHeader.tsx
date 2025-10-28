import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import { Help, AccountCircle } from "@mui/icons-material";
import CommonDropdown from "../components/Dropdown";

const MUIHeader: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 0.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              color: "#000",
              fontSize: "18px",
            }}
          >
            Deloitte
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              color: "#000",
              fontSize: "15px",
            }}
          >
            DTaG
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CommonDropdown
            value="United Kingdom"
            options={[
              { value: "United Kingdom", label: "United Kingdom" },
              { value: "United States", label: "United States" },
            ]}
            size="small"
            sx={{
              minWidth: 160,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#fff",
              },
            }}
          />
          <IconButton size="small">
            <Help sx={{ fontSize: 20, color: "#666" }} />
          </IconButton>
          <IconButton size="small">
            <AccountCircle sx={{ fontSize: 24, color: "#666" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MUIHeader;
