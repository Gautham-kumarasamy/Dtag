import React, { useState } from "react";
import { Box, Typography, Paper, SelectChangeEvent } from "@mui/material";
import { Info } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Dayjs } from "dayjs";
import CommonDropdown, { DropdownOption } from "../components/Dropdown";
import CommonTextField from "../components/Textfield";
import TeamMemberTable from "./TeamMemberTable";
import Footer from "../layout/Footer";
import "../pages/CreateEngagement.css";
import Header from "../layout/Header";
import { ContainedButton, OutlinedButton } from "../components/Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);

  const engagementTypes: DropdownOption[] = [
    { value: "audit", label: "Audit" },
    { value: "consulting", label: "Consulting" },
    { value: "tax", label: "Tax" },
    { value: "advisory", label: "Advisory" },
  ];

  const handleInputChange =
    (field: keyof FormData) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | SelectChangeEvent<string | string[]>
    ) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const handleCreate = () => {
    console.log("Create clicked", formData, dateRange);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header showLocationDropdown={true} showUserSection={true} />

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
              <OutlinedButton onClick={handleCancel}>Cancel</OutlinedButton>
              <ContainedButton onClick={handleCreate}>Create</ContainedButton>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, minWidth: 220 }}>
              <CommonTextField
                label="Engagement Name"
                value={formData.engagementName}
                onChange={
                  handleInputChange("engagementName") as (
                    event: React.ChangeEvent<HTMLInputElement>
                  ) => void
                }
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
                onChange={
                  handleInputChange("engagementType") as (
                    event: SelectChangeEvent<string | string[]>
                  ) => void
                }
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
                onChange={
                  handleInputChange("companyName") as (
                    event: React.ChangeEvent<HTMLInputElement>
                  ) => void
                }
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
                  onChange={(newValue) =>
                    setDateRange(newValue as [Dayjs | null, Dayjs | null])
                  }
                  localeText={{ start: "Start Date", end: "End Date" }}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      size: "small",
                      sx: {
                        width: "100%",

                        "& .MuiPickersInputBase-sectionsContainer": {
                          padding: "7px 4px",
                        },
                        "& .MuiOutlinedInput-root": {
                          height: "40px",
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  borderTop: "0.1px solid #eaeaeaff",
                  pt: 2,
                }}
              >
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
      </Box>
      <div className="footer-container">
        <Footer />
      </div>
    </Box>
  );
};

export default EngagementForm;
