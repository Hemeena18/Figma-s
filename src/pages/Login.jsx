import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";

const USER_EMAIL = "arul@gmail.com";
const USER_PASSWORD = "123456";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    if (email === USER_EMAIL && pass === USER_PASSWORD) {
      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Paper elevation={0} sx={{ width: 380, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Sign in
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter your email address"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}   
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          placeholder="Password"
          variant="standard"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={handleKeyDown}   
        />

        <Typography sx={{ textAlign: "right", mt: 1, color: "gray" }}>
          Forgot password
        </Typography>

        {error && (
          <Typography sx={{ color: "red", mt: 1, fontSize: 13 }}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            mt: 3,
            backgroundColor: "#0047BB",
            height: 46,
            textTransform: "none",
            borderRadius: 1,
            "&:hover": { backgroundColor: "#003a99" },
          }}
        >
          Sign in
        </Button>

        <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ mx: 2, color: "gray", fontSize: 13 }}>
            or login with
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon sx={{ fontSize: 22 }} />}
            sx={{
              borderColor: "#D6D6D6",
              backgroundColor: "white",
              color: "gray",
              textTransform: "none",
              height: 48,
              borderRadius: 2,
            }}
          >
            google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<AppleIcon sx={{ fontSize: 22, color: "black" }} />}
            sx={{
              borderColor: "#D6D6D6",
              backgroundColor: "white",
              color: "gray",
              textTransform: "none",
              height: 48,
              borderRadius: 2,
            }}
          >
            apple
          </Button>
        </Box>

        <Typography sx={{ mt: 3, textAlign: "center", color: "gray" }}>
          Don’t have account?{" "}
          <span style={{ color: "#0047BB", fontWeight: 600, cursor: "pointer" }}>
            Sign up
          </span>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
