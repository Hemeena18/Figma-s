import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import ReusableTable from "../../components/tables/ReusableTable"; // path correct pannunga

const programmeData = [
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    dept: "ECE",
    students: 10,
    date: "10.09.2025",
  },
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    dept: "ECE",
    students: 10,
    date: "10.09.2025",
  },
];

export default function Programme() {
  const [activeTab, setActiveTab] = useState(0);

  // 🔥 Dynamic column based on tab (SAME behavior as before)
  const columns = [
    { header: "Id no", accessor: "id" },
    { header: "College", accessor: "college" },
    { header: "Department", accessor: "dept" },
    {
      header: activeTab === 0 ? "No of students" : "No of faculties",
      accessor: "students",
    },
    { header: "Date", accessor: "date" },
  ];

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Development Programme
      </Typography>
      <Typography fontSize={14} mb={3}>
              <Box component="span" sx={{ color: "#000",fontWeight: 600 }}>Activities</Box>
              <Box component="span" sx={{ color: "text.secondary", mx: 0.5 }}> . </Box>
              <Box component="span" sx={{ color: "text.secondary" }}>Programme</Box>
            </Typography>
      <Paper sx={{ borderRadius: 2 }}>
        {/* Tabs – SAME */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
            <Tab label="SDP" sx={{ textTransform: "none", fontWeight: 600 }} />
            <Tab label="FDP" sx={{ textTransform: "none", fontWeight: 600 }} />
          </Tabs>
        </Box>

        {/* Table – ONLY replaced */}
        <ReusableTable
          columns={columns}
          rows={programmeData}
          showActions={false}
          showStatus={false}
        />
      </Paper>
    </Box>
  );
}
