import { Paper, Typography, Box } from "@mui/material";

const LongTermPartnership = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
         height: 220,
        p: 3,
        borderRadius: 2,
        mx: "auto",
      }}
    >
      {/* TITLE */}
      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        Long-term Partnerships
      </Typography>

      {/* LINE */}
      <Box
        sx={{
          height: "1px",
          width: "100%",
          backgroundColor: "#e5e7eb",
          mb: 2,
        }}
      />

      {/* CONTENT */}
      <Box sx={{ fontSize: 14, lineHeight: 1.9 }}>
        <Box>
          <span style={{ marginRight: 6 }}>✎</span>
          <strong>Francis Xavier Engineering College</strong>
          <br />
          <Box component="span" sx={{ ml: 3, color: "text.secondary" }}>
            Started in 2018 → Active till 2026
          </Box>
        </Box>

        <Box mt={2}>
          <span style={{ marginRight: 6 }}>✎</span>
          <strong>Government College of Engineering</strong>
          <br />
          <Box component="span" sx={{ ml: 3, color: "text.secondary" }}>
            Started in 2018 → Active till 2026
          </Box>
        </Box>

        <Box mt={2}>
          <span style={{ marginRight: 6 }}>✎</span>
          <strong>PSN College of Engineering and Technology</strong>
          <br />
          <Box component="span" sx={{ ml: 3, color: "text.secondary" }}>
            Started in 2018 → Active till 2026
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default LongTermPartnership;
