import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import CommonTable, { Column } from "../components/CommonTable";
import Modal from "../components/Modal";
import MultiSelectModal, { Field } from "../components/MultiSelectModal";
import warningCircleIcon from "../icons/warningcircle-icon.png";

interface TeamMemberRow {
  userName: React.ReactNode;
  email: React.ReactNode;
  role: string;
  country: string;
}

const TeamMemberTable: React.FC = () => {
  const columns: Column<TeamMemberRow>[] = [
    { id: "userName", label: "User Name", sortable: true },
    { id: "email", label: "E-mail", sortable: true },
    { id: "role", label: "Role", sortable: true },
    { id: "country", label: "Country", sortable: true },
  ];

  const [rows, setRows] = useState<TeamMemberRow[]>([
    {
      userName: (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "black",
              color: "white",
              fontSize: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            RF
          </Box>
          <Typography sx={{ fontWeight: 500 }}>Robert Fox</Typography>
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              px: 1,
              borderRadius: "12px",
              fontSize: "0.7rem",
              color: "#333",
            }}
          >
            You
          </Box>
        </Box>
      ),
      email: (
        <a
          href="mailto:rfox@deloitte.com"
          style={{
            color: "#1976d2",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          rfox@deloitte.com
        </a>
      ),
      role: "Engagement Owner",
      country: "United States",
    },
  ]);

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const handlePageChange = (_event: React.ChangeEvent<unknown> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (row: TeamMemberRow | null) => {
    if (row) console.log("Edit clicked:", row);
  };

  const handleDelete = (row: TeamMemberRow | null) => {
    if (row) {
      console.log("Delete clicked:", row);
      setOpenDeleteModal(true);
    }
  };

  const handleAddMember = () => setOpenAddModal(true);

  const handleSaveMembers = (members: Record<string, string>[]) => {
    console.log("Saved team members:", members);
    setOpenAddModal(false);
  };

  const handleConfirmDelete = () => {
    console.log("Confirmed delete!");
    setOpenDeleteModal(false);
  };

  const fields: Field[] = [
    {
      name: "name",
      label: "Team Member Name",
      type: "text",
      placeholder: "Enter name",
      required: true,
      icon: "search",
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      placeholder: "Select role",
      required: true,
      options: [
        { label: "Manager", value: "Manager" },
        { label: "Analyst", value: "Analyst" },
        { label: "Auditor", value: "Auditor" },
        { label: "Reviewer", value: "Reviewer" },
      ],
    },
  ];

  return (
    <Box >
      <Box sx={{ p:0.2, color: "text.primary" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.2,
            px: 2,
            py: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "16px",
            }}
          >
            Team Members
          </Typography>
          <Button
            variant="text"
            onClick={handleAddMember}
            sx={{
              fontWeight: 600,
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              color: "#007CB0",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontFamily: "'Open Sans', sans-serif",
              fontStyle: "semibold",
            }}
          >
            + Add Team Member(s)
          </Button>
        </Box>

        <CommonTable<TeamMemberRow>
          columns={columns}
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
          totalCount={rows.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
          showPagination={false}
          autoAdjustHeight
        />

        <Modal
          open={openDeleteModal}
          title="Data cancellation"
          message="You have unsaved data. Are you sure you want to cancel and leave without saving?"
          icon={
            <img
              src={warningCircleIcon}
              alt="warning"
              style={{
                width: 24,
                height: 24,
                fontWeight: "600",
              }}
            />
          }
          cancelText="CANCEL"
          confirmText="CONFIRM"
          onCancel={() => setOpenDeleteModal(false)}
          onConfirm={handleConfirmDelete}
          confirmButtonProps={{
            variant: "contained",
            sx: {
              backgroundColor: "#007CB0",
              "&:hover": { backgroundColor: "#007CB0" },
            },
          }}
        />

        <MultiSelectModal
          open={openAddModal}
          onClose={() => setOpenAddModal(false)}
          onSave={handleSaveMembers}
          title="Add Team Member(s)"
          addButtonText="Add Team Member"
          cancelText="Cancel"
          saveText="Save"
          dialogWidth={700}
          fields={fields}
        />
      </Box>
    </Box>
  );
};

export default TeamMemberTable;
