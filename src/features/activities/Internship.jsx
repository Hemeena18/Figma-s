import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import ReusableTable from "../../components/tables/ReusableTable"; // correct path

const internshipData = [
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    role: "UX UI design",
    students: 10,
    duration: "3 months",
  },
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    role: "UX UI design",
    students: 10,
    duration: "3 months",
  },
];

const columns = [
  { header: "Id no", accessor: "id" },
  { header: "College", accessor: "college" },
  { header: "Role", accessor: "role" },
  { header: "No of students", accessor: "students" },
  { header: "Duration", accessor: "duration" },
];

export default function Internship() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Internship
      </Typography>
      <Typography fontSize={14} mb={3}>
              <Box component="span" sx={{ color: "#000",fontWeight: 600 }}>Activities</Box>
              <Box component="span" sx={{ color: "text.secondary", mx: 0.5 }}> . </Box>
              <Box component="span" sx={{ color: "text.secondary" }}>Internship</Box>
            </Typography>

      <Paper sx={{ borderRadius: 2 }}>
        {/* Tabs – SAME as before */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
            <Tab label="Free" sx={{ textTransform: "none", fontWeight: 600 }} />
            <Tab label="Paid" sx={{ textTransform: "none", fontWeight: 600 }} />
          </Tabs>
        </Box>

        {/* Table – ONLY changed part */}
        <ReusableTable
          columns={columns}
          rows={internshipData}
          showActions={false}   // dots menu illa
          showStatus={false}
        />
      </Paper>
    </Box>
  );
}
