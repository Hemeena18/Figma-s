import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const StatCard = ({ value, label, label2 }) => (
  <Paper
    elevation={1}
    sx={{
      p: 3.8,
      borderRadius: 2,
      minWidth: 250,          
      boxSizing: "border-box"
    }}
  >
    <Typography sx={{ fontSize: 32, fontWeight: 800 }}>
      {value}
    </Typography>
    <Typography sx={{ color: "black", fontSize: 15 }}>
      {label}
    </Typography>
    <Typography sx={{ color: "gray", fontSize: 12 }}>
      {label2}
    </Typography>
  </Paper>
);

const TopCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        mb: 3,
        flexWrap: "nowrap",    
        width: "100%",
      }}
    >
      <StatCard value="130" label="Total" label2="On boarding colleges" />
      <StatCard value="17" label="Active" label2="MoUs" />
      <StatCard value="15" label="Completed" label2="MoUs" />
      <StatCard value="9" label="Dropped" label2="MoUs" />
    </Box>
  );
};

export default TopCards;
