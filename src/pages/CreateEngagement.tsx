import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  AppBar,
  Toolbar,
  SelectChangeEvent,
} from "@mui/material";
import {
  Info,
  Add,
  Help,
  AccountCircle,
} from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Dayjs } from "dayjs";
import CommonDropdown, { DropdownOption } from "../components/Dropdown";
import CommonTextField from "../components/Textfield";
import TeamMemberTable from "./TeamMemberTable";

interface FormData {
  engagementName: string;
  engagementType: string;
  companyName: string;
  country: string;
}

const EngagementForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    engagementName: "",
    engagementType: "",
    companyName: "",
    country: "United States",
  });

  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);

  const engagementTypes: DropdownOption[] = [
    { value: "audit", label: "Audit" },
    { value: "consulting", label: "Consulting" },
    { value: "tax", label: "Tax" },
    { value: "advisory", label: "Advisory" },
  ];

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string | string[]>
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleCreate = () => {
    console.log("Create clicked", formData, dateRange);
  };

  const handleAddTeamMember = () => {
    console.log("Add team member clicked");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
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

      <Box sx={{ px: 3, py: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              color: "#666",
              fontSize: "13px",
            }}
          >
            <span style={{ color: "#00a6cbff", cursor: "pointer" }}>
              Engagements
            </span>{" "}
            / New engagement
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            border: "1px solid #e0e0e0",
            borderRadius: 1,
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
              borderBottom: "0.1px solid #dededeff",
              width: "100%",
              pb: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Engagement Details
            </Typography>
            <Box sx={{ display: "flex", gap: 2, bottom: 2 }}>
              <Button
                variant="outlined"
                onClick={handleCancel}
                sx={{
                  textTransform: "uppercase",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  border: "1px solid #007CB0",
                  color: "#0284bbff",
                  px: 1.5,
                  borderRadius: 0.5,
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleCreate}
                sx={{
                  textTransform: "uppercase",
                  px: 2,
                  height: 36,
                  backgroundColor: "#007CB0",
                  fontWeight: 600,
                  fontFamily: "'Open Sans', sans-serif",
                  borderRadius: 0.5,
                }}
              >
                Create
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, minWidth: 220 }}>
              <CommonTextField
                label="Engagement Name"
                value={formData.engagementName}
                onChange={handleInputChange("engagementName") as (event: React.ChangeEvent<HTMLInputElement>) => void}
                placeholder="Enter Engagement Name"
                required
                maxLength={86}
                showCharCount
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: 220 }}>
              <CommonDropdown
                label="Engagement Type"
                value={formData.engagementType}
                onChange={handleInputChange("engagementType") as (event: SelectChangeEvent<string | string[]>) => void}
                options={engagementTypes}
                placeholder="Select Engagement Type"
                required
                size="small"
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: 220 }}>
              <CommonTextField
                label="Company Name"
                value={formData.companyName}
                onChange={handleInputChange("companyName") as (event: React.ChangeEvent<HTMLInputElement>) => void}
                placeholder="Enter Company Name"
                required
                maxLength={86}
                showCharCount
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: 220 }}>
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
                Reporting Period
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  value={dateRange}
                  onChange={(newValue) => setDateRange(newValue as [Dayjs | null, Dayjs | null])}
                  localeText={{ start: "Start Date", end: "End Date" }}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      size: "small",
                      sx: {
                        width: "100%",
                        "& .MuiInputBase-root": {
                          height: "36px",
                          fontSize: "13px",
                        },
                        "& .MuiInputBase-input": {
                          padding: "8px 12px",
                          fontSize: "13px",
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Box sx={{ flex: 1, minWidth: 220 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, borderTop: "0.1px solid #eaeaeaff", pt: 2 }}>
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
                  Country
                </Typography>
                <Info sx={{ fontSize: 12, color: "#25b3ffff", mb: 1 }} />
              </Box>
              <span style={{ fontSize: "13px", color: "#000" }}>
                United States
              </span>
            </Box>
          </Box>
        </Paper>
 <TeamMemberTable></TeamMemberTable>
        <Paper
          elevation={0}
        //   sx={{
        //     p: 1,
        //     border: "1px solid #e0e0e0",
        //     borderRadius: 1,
        //     backgroundColor: "#fff",
        //   }}
        >
         
        </Paper>

        <Box
          sx={{
            mt: 1,
            pt: 5,
            textAlign: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "11px",
              color: "#666",
            }}
          >
            © 2020. For information, contact Deloitte Global. See{" "}
            <span style={{ color: "#00a3a1", cursor: "pointer" }}>
              Privacy Statement
            </span>
            ,{" "}
            <span style={{ color: "#00a3a1", cursor: "pointer" }}>
              Cookies Policy
            </span>{" "}
            and{" "}
            <span style={{ color: "#00a3a1", cursor: "pointer" }}>
              Notices
            </span>{" "}
            for more information.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "10px",
              color: "#999",
              display: "block",
              mt: 1,
              lineHeight: 1.5,
            }}
          >
            Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited
            ("DTTL"), its global network of member firms, and their related
            entities (collectively, the "Deloitte organization"). DTTL (also
            referred to as "Deloitte Global") and each of its member firms and
            related entities is legally separate and independent entities, which
            cannot obligate or bind each other in respect of third parties.
            DTTL and each DTTL member firm and related entity is liable only for
            its own acts and omissions, and not those of each other. DTTL does
            not provide services to clients. Please see www.deloitte.com/about
            to learn more.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EngagementForm;
