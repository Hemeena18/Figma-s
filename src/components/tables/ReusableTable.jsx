import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function ReusableTable({
  title,
  breadcrumb,
  columns = [],
  rows = [],
  showStatus = false,
  showActionText = false,
  showActions = true, 
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  return (
    <Box>
      {title && (
        <Box mb={2}>
          <Typography variant="h6">{title}</Typography>
          {breadcrumb && (
            <Typography variant="body2" color="text.secondary">
              {breadcrumb}
            </Typography>
          )}
        </Box>
      )}

      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table size="small">
          {/* TABLE HEAD */}
          <TableHead>
            <TableRow sx={{ backgroundColor: "#e0f7fa" }}>
              {columns.map((col, i) => (
                <TableCell key={i}>
                  <b>{col.header}</b>
                </TableCell>
              ))}
              {showStatus && <TableCell><b>Status</b></TableCell>}
              {showActions && (
                <TableCell align="center" sx={{ width: 80 }}>
                  {showActionText && <b>Actions</b>}
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          {/* TABLE BODY */}
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ py: 3, color: "#999" }}
                  colSpan={columns.length + (showStatus ? 1 : 0) + (showActions ? 1 : 0)}
                >
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((col, i) => (
                    <TableCell
                      key={i}
                      sx={col.accessor === "id" ? { color: "#0047BB", fontWeight: 700 } : {}}
                    >
                      {/* CUSTOM RENDER SUPPORT */}
                      {col.render ? col.render(row) : row[col.accessor]}
                    </TableCell>
                  ))}

                  {showStatus && (
                    <TableCell>
                      <Button
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                          height: 28,
                          borderRadius: 16,
                          textTransform: "none",
                          fontSize: 12,
                          fontWeight: 500,
                          color:
                            row.status === "In progress"
                              ? "#4cbaf5"
                              : row.status === "Completed"
                              ? "#11ee54"
                              : "#ec0a0a",
                          backgroundColor:
                            row.status === "In progress"
                              ? "rgba(104,194,243,0.1)"
                              : row.status === "Completed"
                              ? "rgba(34,235,101,0.1)"
                              : "rgba(243,19,19,0.1)",
                        }}
                      >
                        {row.status}
                      </Button>
                    </TableCell>
                  )}

                  {showActions && (
                    <TableCell align="center">
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          setAnchorEl(e.currentTarget);
                          setSelectedRow(row);
                        }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* ACTION MENU */}
        {showActions && (
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <VisibilityIcon sx={{ mr: 1 }} /> View
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DownloadIcon sx={{ mr: 1 }} /> Download
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                navigate(`/projects/${selectedRow?.id}`);
              }}
            >
              <EditIcon sx={{ mr: 1 }} /> Edit
            </MenuItem>
          </Menu>
        )}
      </TableContainer>
    </Box>
  );
}
