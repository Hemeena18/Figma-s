import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  Collapse,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import TimelineIcon from "@mui/icons-material/Timeline";
import InsightsIcon from "@mui/icons-material/Insights";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [analysisOpen, setAnalysisOpen] = useState(false);

  // 🔥 AUTO OPEN based on URL
  useEffect(() => {
    setActivitiesOpen(location.pathname.startsWith("/activities"));
    setAnalysisOpen(location.pathname.startsWith("/analysis"));
  }, [location.pathname]);

  const activities = [
    { label: "Symposium", path: "symposium" },
    { label: "Hackathon", path: "hackathon" },
    { label: "Placement", path: "placement" },
    { label: "Internship", path: "internship" },
    { label: "Guest Lecture", path: "guest-lecture" },
    { label: "Workshop", path: "workshop" },
    { label: "Programme", path: "programme" },
  ];

  const analysisMenus = [
    { label: "Outcomes", path: "outcomes" },
    { label: "Expectations", path: "expectations" },
  ];

  const getButtonStyles = (isActive) => ({
    backgroundColor: isActive ? "#85AFD9" : "transparent",
    color: isActive ? "#1E3A8A" : "inherit",
    "& .MuiSvgIcon-root": {
      color: isActive ? "#1E3A8A" : "inherit",
    },
    "&:hover": {
      backgroundColor: isActive ? "#85AFD9" : "#f0f0f0",
    },
    transition: "background-color 0.2s, color 0.2s",
    mb: 0.5,
    borderRadius: 1,
  });

  return (
    <Box
      sx={{
        width: 180,
        minHeight: "100vh",
        pt: 8,
        backgroundColor: "white",
      }}
    >
      <List>
        {/* Dashboard */}
        <ListItemButton
          component={NavLink}
          to="/dashboard"
          sx={getButtonStyles(location.pathname === "/dashboard")}
        >
          <DashboardIcon />
          <Typography ml={1}>Dashboard</Typography>
        </ListItemButton>

        {/* Projects */}
        <ListItemButton
          component={NavLink}
          to="/projects"
          sx={getButtonStyles(location.pathname === "/projects")}
        >
          <FolderIcon />
          <Typography ml={1}>Projects</Typography>
        </ListItemButton>

        {/* Activities MAIN */}
        <ListItemButton
          sx={{
            ...getButtonStyles(location.pathname.startsWith("/activities")),
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => navigate("/activities")}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TimelineIcon />
            <Typography ml={1}>Activities</Typography>
          </Box>
          {activitiesOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </ListItemButton>

        {/* Activities SUB */}
        <Collapse in={activitiesOpen}>
          {activities.map((item) => {
            const isActive =
              location.pathname === `/activities/${item.path}`;
            return (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={`/activities/${item.path}`}
                sx={{ pl: 5, ...getButtonStyles(isActive) }}
              >
                <Typography fontSize={13}>{item.label}</Typography>
              </ListItemButton>
            );
          })}
        </Collapse>

        {/* Analysis MAIN */}
        <ListItemButton
          sx={{
            ...getButtonStyles(location.pathname.startsWith("/analysis")),
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => navigate("/analysis")}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InsightsIcon />
            <Typography ml={1}>Analysis</Typography>
          </Box>
          {analysisOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </ListItemButton>

        {/* Analysis SUB */}
        <Collapse in={analysisOpen}>
          {analysisMenus.map((item) => {
            const isActive =
              location.pathname === `/analysis/${item.path}`;
            return (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={`/analysis/${item.path}`}
                sx={{ pl: 5, ...getButtonStyles(isActive) }}
              >
                <Typography fontSize={13}>{item.label}</Typography>
              </ListItemButton>
            );
          })}
        </Collapse>
      </List>
    </Box>
  );
};

export default Sidebar;
