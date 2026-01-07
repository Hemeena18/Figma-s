import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ReusableTable from "../../components/tables/ReusableTable"; // path correct pannunga

const guestLectureData = [
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    topic: "UX UI design",
    students: 10,
  },
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    topic: "UX UI design",
    students: 10,
  },
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    topic: "UX UI design",
    students: 10,
  },
];

const columns = [
  { header: "Id no", accessor: "id" },
  { header: "College", accessor: "college" },
  { header: "Topic", accessor: "topic" },
  { header: "No of students", accessor: "students" },
];

export default function GuestLecture() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Guest lecture
      </Typography>
      <Typography fontSize={14} mb={3}>
              <Box component="span" sx={{ color: "#000",fontWeight: 600 }}>Activities</Box>
              <Box component="span" sx={{ color: "text.secondary", mx: 0.5 }}> . </Box>
              <Box component="span" sx={{ color: "text.secondary" }}>GuestLecture</Box>
            </Typography>

      {/* SAME wrapper as before */}
      <Paper sx={{ borderRadius: 2 }}>
        <ReusableTable
          columns={columns}
          rows={guestLectureData}
          showActions={false}   // dots menu illa
          showStatus={false}
        />
      </Paper>
    </Box>
  );
}
