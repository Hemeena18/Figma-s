import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ReusableTable from "../../components/tables/ReusableTable"; // path correct pannunga

const workshopData = [
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    topic: "UX UI design",
    students: 10,
    date: "10.09.2025",
  },
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    topic: "UX UI design",
    students: 10,
    date: "10.09.2025",
  },
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    topic: "UX UI design",
    students: 10,
    date: "10.09.2025",
  },
];

const columns = [
  { header: "Id no", accessor: "id" },
  { header: "College", accessor: "college" },
  { header: "Topic", accessor: "topic" },
  { header: "No of students", accessor: "students" },
  { header: "Date", accessor: "date" },
];

export default function Workshop() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Workshop
      </Typography>
      <Typography fontSize={14} mb={3}>
              <Box component="span" sx={{ color: "#000",fontWeight: 600 }}>Activities</Box>
              <Box component="span" sx={{ color: "text.secondary", mx: 0.5 }}> . </Box>
              <Box component="span" sx={{ color: "text.secondary" }}>Workshop</Box>
            </Typography>
      {/* SAME wrapper as before */}
      <Paper sx={{ borderRadius: 2 }}>
        <ReusableTable
          columns={columns}
          rows={workshopData}
          showActions={false}   // no dots menu
          showStatus={false}
        />
      </Paper>
    </Box>
  );
}
