import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    <Box sx={{ 

          display: "flex",
           height: "100vh", 
           backgroundColor: "#f5f6fa",
           overflow: "hidden", 
           }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box sx={{ 
          
          flex: 1, 
          display: "flex", 
          flexDirection: "column",
          minWidth: 0,
           }}>
        <Topbar />

        {/* Outlet area */}
        <Box sx={{ 
          
          flex: 1,
           p: 3, 
           overflowY: "auto", 
           backgroundColor:"litegray", 
           }}>
          <Outlet />
        </Box>
      </Box>

    </Box>
  );
};

export default Layout;
