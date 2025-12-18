import React from "react";
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
import { useForm } from "react-hook-form";

const USER_EMAIL = "arul@gmail.com";
const USER_PASSWORD = "123456";

const Login = () => {
  const navigate = useNavigate();

  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    clearErrors("login"); // clear previous login error
    if (data.email === USER_EMAIL && data.password === USER_PASSWORD) {
      navigate("/dashboard");
    } else {
      setError("login", { type: "manual", message: "Invalid Email or Password!" });
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            placeholder="Enter your email address"
            variant="standard"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            placeholder="Password"
            variant="standard"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{ mb: 1 }}
          />

          <Typography sx={{ textAlign: "right", mt: 1, color: "gray" }}>
            Forgot password
          </Typography>

          {errors.login && (
            <Typography sx={{ color: "red", mt: 1, fontSize: 13 }}>
              {errors.login.message}
            </Typography>
          )}

          <Button
            fullWidth
            variant="contained"
            type="submit"
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
        </form>

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
