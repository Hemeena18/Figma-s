import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ReusableTable from "../../components/tables/ReusableTable"; // path correct pannunga

const outcomesData = [
  {
    id: "1234566",
    college: "PSN College of Engineering and Technology",
    training: "Yes",
    placement: "Not satisfied",
    coding: "Yes",
    observation: "Weak in both skills",
  },
  {
    id: "1234567",
    college: "PSN College of Engineering and Technology",
    training: "Yes",
    placement: "Not satisfied",
    coding: "Yes",
    observation: "Weak in both skills",
  },
];

const columns = [
  { header: "Id no", accessor: "id" },
  { header: "College", accessor: "college" },
  { header: "External training", accessor: "training" },
  { header: "Placement", accessor: "placement" },
  { header: "Coding platforms", accessor: "coding" },
  { header: "Observation", accessor: "observation" },
];

export default function Outcomes() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Out comes
      </Typography>

      <Typography fontSize={14} mb={3}>
              <Box component="span" sx={{ color: "#000",fontWeight: 600 }}>Analysis</Box>
              <Box component="span" sx={{ color: "text.secondary", mx: 0.5 }}> . </Box>
              <Box component="span" sx={{ color: "text.secondary" }}>Out comes</Box>
            </Typography>

      <Paper sx={{ borderRadius: 2 }}>
        <ReusableTable
          columns={columns}
          rows={outcomesData}
          showActions={false} // dots menu illa
          showStatus={false}
        />
      </Paper>
    </Box>
  );
}
