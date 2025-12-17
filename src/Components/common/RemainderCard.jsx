import React from "react";
import { Box, Paper, Typography, Chip } from "@mui/material";

const ReminderCard = ({ items = [] }) => {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2, width: 680 }}>
   
      
      <Typography sx={{ 
        
             fontWeight: 700,
             mb: 1, 
             borderBottom: "2px solid #e5e7eb",
             pb: 1.5 
              }}>Reminders</Typography>

      {items.map((it) => (
        <Box
          key={it.id}
          sx={{
            display: "grid",
            gridTemplateColumns: "70px 325px 120px 140px", 
            alignItems: "center",
            py: 1.8,
            columnGap: "20px",
          }}
        >
          {/* ID */}
          <Typography sx={{ fontWeight: 700, color: "#0047BB" }}>
            {it.id}
          </Typography>

          {/* NAME */}
          <Typography
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {it.name}
          </Typography>

          {/* STATUS */}
          <Chip
            label={it.status}
            size="small"
            sx={{
              backgroundColor:
                it.status === "Expired" ? "#FDEAEA" : "#FFF3E0",
              color:
                it.status === "Expired" ? "#D32F2F" : "#B26B00",
              height: 32,
              fontSize: 14,
              fontWeight: 700,
              px: 1.5,
              borderRadius: 2
            }}
          />

          {/* DATE */}
          <Typography sx={{ fontWeight: 600,fontsize:12 }}>
            {it.date}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default ReminderCard;
