import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import ReusableTable from "../../components/tables/ReusableTable";

// Data
const expectationsData = [
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    expectations: [
      { label: "Spend internship", color: "#9C27B0" },
      { label: "Placement offer", color: "#FF7043" },
      { label: "Training", color: "#E53935" },
      { label: "One credit course", color: "#0288D1" },
    ],
  },
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    expectations: [
      { label: "Free internship", color: "#0beb16ff" },
      { label: "Placement offer", color: "#FF7043" },
      { label: "Stipend internship", color: "#9C27B0" },
      { label: "Training", color: "#E53935" },
    ],
  },
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    expectations: [
      { label: "Placement training", color: "#1976D2" },
      { label: "Stipend internship", color: "#9C27B0" },
      { label: "Self finance internship", color: "#e9da12ff" },
      { label: "One credit course", color: "#0288D1" },
    ],
  },
];

// Expectations renderer
const renderExpectations = (row) => (
  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
    {row.expectations.map((exp, i) => (
      <Chip
        key={i}
        label={exp.label}
        sx={{
          backgroundColor: `${exp.color}22`, // light background
          color: exp.color,                  // dark text
          fontSize: 12,
          height: 28,
          fontWeight: 600,
          borderRadius: "16px",
          border: `1px solid ${exp.color}55`,
        }}
      />
    ))}
  </Box>
);

// Table columns
const columns = [
  { header: "Id no", accessor: "id" },
  { header: "College", accessor: "college" },
  {
    header: "Expectations",
    accessor: "expectations",
    render: renderExpectations,
  },
];

export default function Expectations() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Expectations
      </Typography>

      <Typography fontSize={14} mb={3}>
        <Box component="span" sx={{ color: "#000", fontWeight: 600 }}>
          Analysis
        </Box>
        <Box component="span" sx={{ color: "text.secondary", mx: 0.5 }}>
          .
        </Box>
        <Box component="span" sx={{ color: "text.secondary" }}>
          Expectations
        </Box>
      </Typography>

      <Paper sx={{ borderRadius: 2 }}>
        <ReusableTable
          columns={columns}
          rows={expectationsData}
          showActions={false}
          showStatus={false}
        />
      </Paper>
    </Box>
  );
}
