import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ReusableTable from "../../components/tables/ReusableTable";

const hackathonData = [
  {
    id: "1234566",
    college: "Francis Xavier Engineering College",
    dept: "ECE",
    students: 10,
    date: "20.05.2025",
  },
  {
    id: "1234566",
    college: "Francis Xavier Engineering College",
    dept: "ECE",
    students: 10,
    date: "20.05.2025",
  },
  {
    id: "1234566",
    college: "Francis Xavier Engineering College",
    dept: "ECE",
    students: 10,
    date: "20.05.2025",
  },
];

const columns = [
  { header: "Id no", accessor: "id" },
  { header: "College", accessor: "college" },
  { header: "Department", accessor: "dept" },
  { header: "No of students", accessor: "students" },
  { header: "Date", accessor: "date" },
];

export default function Hackathon() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Hackathon
      </Typography>

      {/* Breadcrumb */}
      <Typography fontSize={14} mb={3}>
        <Box component="span" sx={{ color: "#000",fontWeight: 600 }}>Activities</Box>
        <Box component="span" sx={{ color: "text.secondary", mx: 0.5 }}> . </Box>
        <Box component="span" sx={{ color: "text.secondary" }}>Hackathon</Box>
      </Typography>

      <Paper sx={{ borderRadius: 2 }}>
        <ReusableTable
          columns={columns}
          rows={hackathonData}
          showActions={false}
          showStatus={false}
        />
      </Paper>
    </Box>
  );
}
