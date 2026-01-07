import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const AnalysisLayout = () => {
  return (
    <Box p={2}>
      <Outlet />
    </Box>
  );
};

export default AnalysisLayout;
