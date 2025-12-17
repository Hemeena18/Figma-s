import React from "react";
import { Box, Typography, List, ListItemButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import TimelineIcon from "@mui/icons-material/Timeline";
import InsightsIcon from "@mui/icons-material/Insights";
import { NavLink, useLocation } from "react-router-dom";

const menu = [
  { key: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { key: "projects", label: "Projects", icon: <FolderIcon /> },
  { key: "activities", label: "Activities", icon: <TimelineIcon /> },
  { key: "analysis", label: "Analysis", icon: <InsightsIcon /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 150,
        minHeight: "100vh",
        backgroundColor: "white",
        color: "#070a0eff",
        pt: 8,
        overflow: "hidden",
      }}
    >
      <List>
        {menu.map((m) => {
          // Active if pathname matches key, default Dashboard
          const isActive =
            location.pathname === `/${m.key}` ||
            (location.pathname === "/" && m.key === "dashboard"); // default active

          return (
            <NavLink
              key={m.key}
              to={`/${m.key}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton
                sx={{
                  mb: 1,
                  borderRadius: 1,
                  backgroundColor: isActive ? "#85AFD9" : "transparent",
                  color: isActive ? "#034CA5" : "black",
                  "&:hover": { backgroundColor: "#C0D6EC" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ color: isActive ? "#034CA5" : "#02040cff" }}>
                    {m.icon}
                  </Box>
                  <Typography sx={{ fontWeight: isActive ? 700 : 500 }}>
                    {m.label}
                  </Typography>
                </Box>
              </ListItemButton>
            </NavLink>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
