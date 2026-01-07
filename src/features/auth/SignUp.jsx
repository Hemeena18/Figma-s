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

const SignUp = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("userName", data.name);
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userPassword", data.password);
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Paper elevation={0} sx={{ width: 380, p: 3, borderRadius: 2 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Sign up
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <TextField
            fullWidth
            placeholder="Enter your name"
            variant="standard"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{
              mb: 3,
              "& .MuiInputBase-input": { paddingBottom: "25px" }, // space between text & underline
            }}
          />

          {/* Email Field */}
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
            sx={{
              mb: 3,
              "& .MuiInputBase-input": { paddingBottom: "25px" },
            }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            variant="standard"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be 6+ chars" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{
              mb: 1,
              "& .MuiInputBase-input": { paddingBottom: "25px" },
            }}
          />

          {/* Forgot Password */}
          <Typography
            sx={{
              textAlign: "right",
              mt: 1,
              mb: 2,
              color: "gray",
              fontSize: 13,
              cursor: "pointer",
            }}
            onClick={() => alert("Forgot password clicked!")}
          >
            Forgot password
          </Typography>

          {/* SignUp Button */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              height: 46,
              backgroundColor: "#0047BB",
              textTransform: "none",
              mb: 2,
            }}
          >
            Sign up
          </Button>
        </form>

        {/* OR Divider */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ mx: 2, fontSize: 13, color: "gray" }}>
            or sign up with
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        {/* Social Buttons */}
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

        {/* Sign in Link */}
        <Typography sx={{ mt: 3, textAlign: "left", color: "gray" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#0047BB", cursor: "pointer", fontWeight: 600 }}
            onClick={() => navigate("/login")}
          >
            Sign in
          </span>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
