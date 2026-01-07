import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import CheckIcon from "@mui/icons-material/Check";
import BlockIcon from "@mui/icons-material/Block";

const UploadModal = ({ open, onClose }) => {
  const fileRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("success"); 
  // success | error

  /* FILE CHOOSE */
  const handleChooseFile = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // PDF only
    if (file.type !== "application/pdf") {
      alert("Only PDF allowed");
      return;
    }

    setSelectedFile(file);
  };

  /*  UPDATE CLICK */
  const handleUpdate = () => {
    if (!selectedFile) {
      alert("Please attach document");
      return;
    }

    // simulate API upload
    setUploadModalOpen(true);

    setTimeout(() => {
      // change to "error" if needed
      setUploadStatus("success");
    }, 800);
  };

  return (
    <>
      {/* MAIN EDIT MODAL */}
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <DialogContent sx={{ p: 4, position: "relative" }}>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 12, right: 12 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography fontWeight={600} fontSize={18} mb={3}>
            Edit College Details
          </Typography>

          <Box sx={{ display: "flex", gap: 4 }}>
            {/* LEFT */}
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={1}>
                College Information:
              </Typography>
              <TextField fullWidth placeholder="College name" sx={{ mb: 2 }} />
              <TextField fullWidth placeholder="Location" sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField fullWidth type="date" />
                <TextField fullWidth type="date" />
              </Box>

              <Typography fontWeight={600} mb={1}>
                Contact:
              </Typography>
              <TextField fullWidth placeholder="Mail Id" sx={{ mb: 2 }} />

              <Typography fontWeight={600} mb={1}>
                One point of contact:
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField fullWidth placeholder="Name" />
                <TextField fullWidth placeholder="Phone no" />
              </Box>
              <TextField fullWidth placeholder="Mail Id" />
            </Box>

            <Divider orientation="vertical" flexItem />

            {/* RIGHT */}
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={1}>
                Document
              </Typography>

              {/* Upload Box */}
              <Box
                onClick={handleChooseFile}
                sx={{
                  border: "2px dashed #d1d5db",
                  borderRadius: 3,
                  py: 6,
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <CloudUploadOutlinedIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography fontWeight={600}>UPLOAD DOCUMENT</Typography>
                <Typography fontSize={13} color="text.secondary">
                  Drag and drop files here
                </Typography>
              </Box>

              {/* Selected File Display */}
              {selectedFile && (
                <Box
                  sx={{
                    mt: 2,
                    p: 1.5,
                    borderRadius: 1,
                    backgroundColor: "#f1f5f9",
                    fontSize: 13,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>{selectedFile.name}</Typography>
                  <Typography color="green">Uploaded</Typography>
                </Box>
              )}

              <input
                type="file"
                hidden
                ref={fileRef}
                onChange={handleFileChange}
              />
            </Box>
          </Box>

          {/* FOOTER */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4, gap: 2 }}>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleUpdate}>
              Update
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* SUCCESS / FAILURE MODAL */}
      <Dialog open={uploadModalOpen} onClose={() => setUploadModalOpen(false)}>
        <DialogContent sx={{ p: 5, textAlign: "center", minWidth: 400 }}>
          {uploadStatus === "success" ? (
            <>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <CheckIcon sx={{ color: "#fff" }} />
              </Box>
              <Typography fontWeight={700} color="green">
                SUCCESSFULLY UPLOADED !
              </Typography>
              <Typography fontSize={14}>
                Your file has been uploaded.
              </Typography>
            </>
          ) : (
            <>
              <BlockIcon />
              <Typography fontWeight={700} color="red">
                UPLOAD FAILED
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadModal;
