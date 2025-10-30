import React, { useState, useMemo, MouseEvent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  TableSortLabel,
  Pagination,
  Stack,
  Button,
} from "@mui/material";
import { MoreVert, Edit, Delete } from "@mui/icons-material";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import sortIcon from "../icons/sort-icon.svg";

export interface Column<T> {
  id: Extract<keyof T, string | number>;
  label: string;
  sortable?: boolean;
}

interface CommonTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  page: number;
  rowsPerPage: number;
  totalCount: number;
  onPageChange: (
    event: React.ChangeEvent<unknown> | null,
    newPage: number
  ) => void;
  onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEdit: (row: T | null) => void;
  onDelete: (row: T | null) => void;
  showPagination?: boolean;
  autoAdjustHeight?: boolean;
}

const CommonTable = <T extends Record<string, any>>({
  columns,
  rows,
  page,
  rowsPerPage,
  totalCount,
  onPageChange,
  onRowsPerPageChange,
  onEdit,
  onDelete,
  showPagination = true,
  autoAdjustHeight = false,
}: CommonTableProps<T>) => {
  const [selectedRow, setSelectedRow] = useState<T | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("");
  const handleSortRequest = (columnId: string | number) => {
    const isAsc = orderBy === columnId && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderBy(String(columnId));
  };

  const handleEditClick = () => {
    if (selectedRow) onEdit(selectedRow);
  };

  const handleDeleteClick = () => {
    if (selectedRow) onDelete(selectedRow);
  };

  const sortedRows = useMemo(() => {
    if (!orderBy) return rows;
    return [...rows].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return orderDirection === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return orderDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, orderBy, orderDirection]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {/* <TableContainer
        sx={{
          maxHeight: "auto",
          minHeight: 540,
          overflowY: rows.length > rowsPerPage ? "auto" : "visible",
          backgroundColor: "white",
        }}
      > */}
      <TableContainer
        sx={{
          maxHeight: rows.length > rowsPerPage ? 440 : "auto",
          minHeight: autoAdjustHeight
            ? Math.min(rows.length * 48 + 100, 440)
            : 540,
        //   overflowY: rows.length > rowsPerPage ? "auto" : "visible",
          backgroundColor: "white",
          transition: "min-height 0.3s ease",
        }}
      >
        <Table stickyHeader sx={{ flex: "1 1 auto" }}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.id}
                  sx={{
                    fontWeight: 600,
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "13px",
                    py: 2,
                    "& .MuiTableSortLabel-root": {
                      flexDirection: "row-reverse",
                      justifyContent: "flex-start",
                    },
                    "& .MuiTableSortLabel-icon": {
                      marginRight: "8px",
                      marginLeft: 0,
                    },
                  }}
                >
                  {col.sortable ? (
                    <TableSortLabel
                      active={orderBy === col.id}
                      direction={orderBy === col.id ? orderDirection : "asc"}
                      onClick={() => handleSortRequest(col.id)}
                      IconComponent={() => (
                        <img
                          src={sortIcon}
                          alt="sort"
                          style={{
                            width: 22,
                            height: 22,
                            transform:
                              orderBy === col.id && orderDirection === "desc"
                                ? "rotate(180deg)"
                                : "none",
                            transition: "transform 0.2s",
                          }}
                        />
                      )}
                    >
                      <span style={{ fontSize: "13px", fontWeight: 600 }}>
                        {col.label}
                      </span>
                    </TableSortLabel>
                  ) : (
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>
                      {col.label}
                    </span>
                  )}
                </TableCell>
              ))}
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ position: "relative", height: "100%" }}>
            {totalCount > 0 ? (
              <>
                {sortedRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      hover
                      key={index}
                      sx={{ "& td, & th": { py: 0.37 }, height: 32 }}
                    >
                      {columns.map((col) => (
                        <TableCell
                          key={col.id}
                          sx={{
                            py: 0.2,
                            fontSize: "0.85rem",
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {row[col.id]}
                        </TableCell>
                      ))}
                      <TableCell align="right">
                        <Tooltip title="More actions">
                          <IconButton
                            onClick={(e: MouseEvent<HTMLElement>) => {
                              setAnchorEl(e.currentTarget);
                              setSelectedRow(row);
                            }}
                          >
                            <MoreVert />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                {/* <TableRow
                  sx={{
                    height: `calc(440px - ${
                      Math.min(
                        rowsPerPage,
                        sortedRows.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ).length
                      ) * 48
                    }px)`,
                  }}
                >
                  <TableCell
                    colSpan={columns.length + 1}
                    sx={{
                      borderBottom: "none",
                      backgroundColor: "white",
                      p: 0,
                    }}
                  />
                </TableRow> */}
              </>
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  align="center"
                  sx={{
                    py: 6,
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "text.secondary",
                    height: 440,
                  }}
                >
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => {
            onEdit(selectedRow);
            setAnchorEl(null);
          }}
        >
          <Edit sx={{ mr: 1 }} /> Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            onDelete(selectedRow);
            setAnchorEl(null);
          }}
        >
          <Delete sx={{ mr: 1, color: "red" }} /> Delete
        </MenuItem>
      </Menu>

      {showPagination && (
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
          sx={{ p: 2 }}
        >
          <Button
            onClick={() => onPageChange(null, 0)}
            disabled={page === 0}
            size="small"
            sx={{ textTransform: "none", minWidth: "auto", px: 1 }}
          >
            First
          </Button>

          <Button
            onClick={() => onPageChange(null, page - 1)}
            disabled={page === 0}
            size="small"
            sx={{ minWidth: "auto", px: 1 }}
          >
            <ArrowLeftOutlinedIcon sx={{ fontSize: 30 }} />
          </Button>

          <Pagination
            count={Math.ceil(totalCount / rowsPerPage)}
            page={page + 1}
            onChange={(e, value) => onPageChange(e, value - 1)}
            siblingCount={1}
            boundaryCount={1}
            hidePrevButton
            hideNextButton
            variant="text"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                fontSize: "0.875rem",
                minWidth: 28,
                height: 28,
                borderRadius: "4px",
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                border: "1px solid #1976d2",
                backgroundColor: "transparent",
                color: "#1976d2",
              },
            }}
          />

          <Button
            onClick={() => onPageChange(null, page + 1)}
            disabled={page === Math.ceil(totalCount / rowsPerPage) - 1}
            size="small"
            sx={{ minWidth: "auto", px: 1 }}
          >
            <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
          </Button>

          <Button
            onClick={() =>
              onPageChange(null, Math.ceil(totalCount / rowsPerPage) - 1)
            }
            disabled={page === Math.ceil(totalCount / rowsPerPage) - 1}
            size="small"
            sx={{ textTransform: "none", minWidth: "auto", px: 1 }}
          >
            Last
          </Button>
        </Stack>
      )}
    </Paper>
  );
};

export default CommonTable;
