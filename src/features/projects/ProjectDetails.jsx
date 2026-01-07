import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { useParams } from "react-router-dom";
import UploadModal from "./UploadModal"; // ✅ IMPORT MODAL

const ProjectDetails = () => {
  const { id } = useParams();

  // ✅ MODAL STATE
  const [openEdit, setOpenEdit] = useState(false);

  const project = {
    name: "Francis Xavier Engineering College",
    location: "Madurai",
    sdate: "20.05.2026",
    edate: "20.06.2027",
    email: "arul@gmail.com",
    status: "In progress",
    pname: "Arulmary.R",
    pemail: "arulmary@gmail.com",
    pno: "9456789875",
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* HEADER */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
        <Box>
          <Typography variant="h5" fontWeight={600}>
            {project.name}
          </Typography>
          <Typography sx={{ mt: 0.5 }}>
  <Box component="span" sx={{ color: "#000" }}>Projects</Box>
  <Box component="span" sx={{ color: "#000", mx: 0.5 }}> . </Box>
  <Box component="span" sx={{ color: "#000", mx: 0.5 }}>All</Box>
  <Box component="span" sx={{ color: "#000", mx: 0.5 }}> . </Box>
  <Box component="span" sx={{ color: "#6b7280", mx: 0.5 }}>{project.name}</Box>
</Typography>

        </Box>

        {/* ✅ EDIT BUTTON */}
        <Button
          startIcon={<EditIcon />}
          variant="contained"
          onClick={() => setOpenEdit(true)}   // ✅ OPEN MODAL
          sx={{
            width: "100px",
            height: "32px",
            fontSize: "14px",
            textTransform: "none",
            backgroundColor: "#0d47a1",
            mt: 7,
            borderRadius: 2,
          }}
        >
          Edit
        </Button>
      </Box>

      {/* CARD */}
      <Box sx={{ width: "1070px", mb: 3 }}>
        <Card sx={{ p: 5, width: "1000px", height: "550px" }}>
          <CardContent>
            <Box sx={{ display: "flex", gap: 3 }}>
              {/* LEFT */}
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={600}>College Details</Typography>
                <Divider sx={{ width: "110px", borderBottom: "2px solid #d1d5db", mb: 2 }} />

                <Typography color="#6b7280">College ID</Typography>
                <Typography mb={2}>{id}</Typography>

                <Typography color="#6b7280">College name</Typography>
                <Typography mb={2}>{project.name}</Typography>

                <Typography color="#6b7280">Location</Typography>
                <Typography mb={2}>{project.location}</Typography>

                <Typography color="#6b7280">Start date</Typography>
                <Typography mb={2}>{project.sdate}</Typography>

                <Typography color="#6b7280">End date</Typography>
                <Typography mb={2}>{project.edate}</Typography>

                <Typography color="#6b7280">Contact</Typography>
                <Typography mb={2}>{project.email}</Typography>

                <Typography color="#6b7280">Status</Typography>
                <Typography>{project.status}</Typography>
              </Box>

              <Divider orientation="vertical" flexItem />

              {/* RIGHT */}
              <Box sx={{ flex: 1, pl: 3 }}>
                <Typography fontWeight={600}>One point of contact</Typography>
                <Divider sx={{ width: "145px", borderBottom: "2px solid #d1d5db", mb: 2 }} />

                <Typography color="#6b7280">Person name</Typography>
                <Typography mb={2}>{project.pname}</Typography>

                <Typography color="#6b7280">Email id</Typography>
                <Typography mb={2}>{project.pemail}</Typography>

                <Typography color="#6b7280">Phone no</Typography>
                <Typography mb={6}>{project.pno}</Typography>

                <Typography fontWeight={600}>Document</Typography>
                <Divider sx={{ width: "90px", borderBottom: "2px solid #d1d5db", mb: 2 }} />

                <Box sx={{ backgroundColor: "#f3f4f6", p: 2, borderRadius: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <InsertDriveFileOutlinedIcon sx={{ fontSize: 50 }} />
                      <Box>
                        <Typography fontWeight={500}>Document</Typography>
                        <Typography fontSize={12} color="text.secondary">
                          size: 13.76 kb
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        borderColor: "#d1d5db",
                        color: "#0ea5e9",
                        fontWeight: 600,
                      }}
                    >
                      DOWNLOAD
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* ✅ EDIT MODAL */}
      <UploadModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      />
    </Box>
  );
};

export default ProjectDetails;
