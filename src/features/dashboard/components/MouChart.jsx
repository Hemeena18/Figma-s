import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// DATA
const yearlyData = [
  { name: "2021", value: 30 },
  { name: "2022", value: 35 },
  { name: "2023", value: 60 },
  { name: "2024", value: 50 },
  { name: "2025", value: 80 },
];

const monthlyData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 32 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 52 },
  { name: "May", value: 80 },
  { name: "Jun", value: 35 },
];

// CUSTOM TOOLTIP
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: 6,
          fontSize: 12,
        }}
      >
        {payload[0].value}
      </div>
    );
  }
  return null;
};

const MouChart = () => {
  const [view, setView] = useState("yearly");

  return (
    <Paper
      elevation={1}
      sx={{
        width: "92%",
        height: 300,
        p: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>MoU Statistics</Typography>

        <Select
          size="small"
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </Select>
      </Box>

      {/* DIVIDER */}
      <Box sx={{ height: "1px", backgroundColor: "#e5e7eb", mb: 2 }} />

      {/* CHART */}
      <Box sx={{ flex: 1, minHeight: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={view === "yearly" ? yearlyData : monthlyData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />

            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              interval={0} // show all months/years
            />

            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

            <Bar dataKey="value" barSize={30} fill="#cfe1f4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default MouChart;
