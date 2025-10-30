import React, { useState, ChangeEvent } from "react";
import { Button, Box, Typography, MenuItem, TextField } from "@mui/material";
import CommonTable from "../components/CommonTable";
import Header from "../layout/Header";
import Modal from "../components/Modal";
import warningicon from "../icons/warning-icon.png";
import clearicon from "../icons/clear-icon.png";
import clearicondisable from "../icons/clear-icon1.png";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import CommonDropdown from "../components/Dropdown";
import CommonTextField from "../components/Textfield";
import { useNavigate } from "react-router-dom";
import { ContainedButton } from "../components/Button";

interface Engagement {
  engagementName: string;
  engagementType: string;
  companyName: string;
  reportingPeriod: string;
  creationDate: string;
}

interface Filters {
  engagementName: string;
  engagementType: string;
  companyName: string;
  dateRange: DateRange<Dayjs>;
}

interface Column {
  id: keyof Engagement;
  label: string;
  sortable: boolean;
}
const engagements: Engagement[] = [
  {
    engagementName: "Project Phoenix",
    engagementType: "Financial Data",
    companyName: "Stark Industries",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
  {
    engagementName: "Operation Blue Sky",
    engagementType: "Financial Data",
    companyName: "Wayne Enterprises",
    reportingPeriod: "01/01/2024 - 01/01/2025",
    creationDate: "01/01/2024",
  },
];

const Dashboard: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({
    engagementName: "",
    engagementType: "",
    companyName: "",
    dateRange: [null, null],
  });
  const navigate = useNavigate();

  const columns: Column[] = [
    { id: "engagementName", label: "Engagement Name", sortable: true },
    { id: "engagementType", label: "Engagement Type", sortable: false },
    { id: "companyName", label: "Company Name", sortable: true },
    { id: "reportingPeriod", label: "Reporting Period", sortable: true },
    { id: "creationDate", label: "Creation Date", sortable: true },
  ];

  const confirmDelete = () => {
    setOpenModal(false);
  };

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      engagementName: "",
      engagementType: "",
      companyName: "",
      dateRange: [null, null],
    });
  };

  const handleEdit = (row: Engagement | null) => {
    if (!row) return;
  };

  const handleDelete = (row: Engagement | null) => {
    setOpenModal(true);
  };

  const handleCreateEngagement = () => {
    navigate("/engagement");
  }

  const anyFilterApplied =
    filters.engagementName ||
    filters.engagementType ||
    filters.companyName ||
    (filters.dateRange[0] && filters.dateRange[1]);

  const handleCreate = (): void => {
    
  };

  return (
    <>
      <Header showLocationDropdown={true} showUserSection={true} />
      <div
        style={{
          padding: "6px 24px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #D9D9D9",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "14px",
          }}
        >
          Engagements Dashboard
        </Typography>

      <ContainedButton onClick={handleCreateEngagement}>Create Engagement</ContainedButton>
      </div>

      <Box sx={{ backgroundColor: "#f5f5f5" }}>
        <Box sx={{ p: 3, color: "text.primary" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              borderBottom: "1px solid #D9D9D9",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "16px",
                }}
              >
                {engagements.length} items
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 3,
                flexWrap: "wrap",
                mt: 1,
              }}
            >
              <CommonDropdown
                label="Engagement Name"
                value={filters.engagementName}
                onChange={(e) =>
                  handleFilterChange("engagementName", e.target.value)
                }
                options={[
                  { value: "", label: "All Engagement Names" },
                  ...Array.from(
                    new Set(engagements.map((e) => e.engagementName))
                  ).map((name) => ({ value: name, label: name })),
                ]}
                sx={{ width: 380 }}
              />

              <CommonDropdown
                label="Engagement Type"
                value={filters.engagementType}
                onChange={(e) =>
                  handleFilterChange("engagementType", e.target.value)
                }
                options={[
                  { value: "", label: "All Engagement Types" },
                  { value: "Financial Data", label: "Financial Data" },
                  { value: "Audit", label: "Audit" },
                ]}
                sx={{ width: 380 }}
              />

              <CommonDropdown
                label="Company Name"
                value={filters.companyName}
                onChange={(e) =>
                  handleFilterChange("companyName", e.target.value)
                }
                options={[
                  { value: "", label: "All Company Names" },
                  ...Array.from(
                    new Set(engagements.map((e) => e.companyName))
                  ).map((name) => ({ value: name, label: name })),
                ]}
                sx={{ width: 380 }}
              />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "13px", mb: 0.5 }}>
                  Reporting Period
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateRangePicker
                    value={filters.dateRange}
                    onChange={(newValue) =>
                      handleFilterChange("dateRange", newValue)
                    }
                    localeText={{ start: "Start Date", end: "End Date" }}
                    format="DD/MM/YYYY"
                    slotProps={{
                      textField: { size: "small", sx: { width: 380 } },
                    }}
                  />
                </LocalizationProvider>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  ml: "auto",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "13px",
                    mb: 0.5,
                    color: "transparent",
                  }}
                >
                  Clear
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: anyFilterApplied ? 0 : 1.5,
                    py: anyFilterApplied ? 0 : 0.5,
                    borderRadius: 0.5,
                    height: 32,
                    width: 180,
                    fontWeight: 600,
                    fontSize: "14px",
                    backgroundColor: anyFilterApplied
                      ? "transparent"
                      : "#F7F7F7",
                    border: anyFilterApplied ? "none" : "1px solid #E0E0E0",
                    cursor: anyFilterApplied ? "pointer" : "default",
                  }}
                  onClick={() => {
                    if (anyFilterApplied) handleClearFilters();
                  }}
                >
                  <img
                    src={anyFilterApplied ? clearicon : clearicondisable}
                    alt="clear"
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 6,
                      opacity: anyFilterApplied ? 1 : 0.5,
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: anyFilterApplied ? "#007CB0" : "#D9D9D9",
                    }}
                  >
                    CLEAR FILTERS
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <CommonTable<Engagement>
            columns={columns}
            rows={engagements}
            page={page}
            rowsPerPage={rowsPerPage}
            totalCount={engagements.length}
            onPageChange={(_, newPage: number) => setPage(newPage)}
            onRowsPerPageChange={(e: ChangeEvent<HTMLInputElement>) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
            onEdit={handleEdit}
            onDelete={handleDelete}
            showPagination={true}
          />
          <Modal
            open={openModal}
            title="Delete engagement"
            message={`This engagement has one or more financial statements. Please delete the financial statement(s) before deleting the engagement.`}
            icon={
              <img
                src={warningicon}
                alt="warning"
                style={{ width: 22, height: 22 }}
              />
            }
            cancelText="CANCEL"
            onCancel={() => setOpenModal(false)}
          />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
