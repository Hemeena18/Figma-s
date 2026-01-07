import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Menu,
  MenuItem,
  Pagination,
  PaginationItem,
  InputAdornment,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SearchIcon from "@mui/icons-material/Search";
import ReusableTable from "../../components/tables/ReusableTable";

const tabLabels = ["All", "In progress", "Completed", "Dropped"];
const ROWS_PER_PAGE = 11;

/* TABLE COLUMNS */
const projectColumns = [
  { header: "Id no", accessor: "id" },
  { header: "College", accessor: "college" },
  { header: "Location", accessor: "location" },
  { header: "Contact", accessor: "contact" },
  { header: "Start date", accessor: "start" },
  { header: "End date", accessor: "end" },
];

/* TABLE DATA */
const projectsData = [
  {
    id: "1234566",
    college: "Francis Xavier Engineering College",
    location: "Madurai",
    contact: "arul@gmail.com",
    start: "20.05.2026",
    end: "20.05.2027",
    status: "In progress",
  },
  {
    id: "1234567",
    college: "Francis Xavier Engineering College",
    location: "Madurai",
    contact: "arul2@gmail.com",
    start: "20.05.2026",
    end: "20.05.2027",
    status: "Completed",
  },
  {
    id: "1234568",
    college: "Francis Xavier Engineering College",
    location: "Madurai",
    contact: "arul3@gmail.com",
    start: "20.05.2026",
    end: "20.05.2027",
    status: "Dropped",
  },
  {
    id: "1234569",
    college: "Francis Xavier Engineering College",
    location: "Madurai",
    contact: "arul4@gmail.com",
    start: "20.05.2026",
    end: "20.05.2027",
    status: "In progress",
  },
];

export default function Projects() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const [addAnchor, setAddAnchor] = useState(null);

  /* FILTER DATA */
  const filteredData =
    tab === 0
      ? projectsData
      : projectsData.filter((p) => p.status === tabLabels[tab]);

  /* PAGINATION */
  const startIndex = (page - 1) * ROWS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE
  );

  return (
    <Box sx={{ p: 3, backgroundColor: "#f6f7fb", minHeight: "100vh" }}>
      {/* PAGE TITLE */}
      <Typography variant="h5" fontWeight={600} mb={0.3}>
        Projects
      </Typography>

      {/* BREADCRUMB */}
      <Typography fontSize={14} mb={3}>
        <Box component="span" sx={{ color: "#000", fontWeight: 600 }}>
          Projects
        </Box>
        <Box component="span" sx={{ color: "text.secondary", mx: 0.5 }}>
          {tab === 0 ? "." : "<"}
        </Box>
        <Box component="span" sx={{ color: "text.secondary" }}>
          {tabLabels[tab]}
        </Box>
      </Typography>

      {/* ADD BUTTON */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          onClick={(e) => setAddAnchor(e.currentTarget)}
          sx={{ height: 32, borderRadius: 2, textTransform: "none" }}
        >
          Add
        </Button>
      </Box>

      {/* ADD MENU */}
      <Menu
        anchorEl={addAnchor}
        open={Boolean(addAnchor)}
        onClose={() => setAddAnchor(null)}
      >
        <MenuItem>
          <InsertDriveFileIcon sx={{ mr: 1 }} />
          Single file
        </MenuItem>
        <MenuItem>
          <UploadFileIcon sx={{ mr: 1 }} />
          Upload as file
        </MenuItem>
      </Menu>

      {/* TABS + SEARCH */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          px: 2,
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Tabs
          value={tab}
          onChange={(e, v) => {
            setTab(v);
            setPage(1);
          }}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              color: "#9ca3af",
            },
            "& .Mui-selected": {
              color: "#000",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#000",
            },
          }}
        >
          {tabLabels.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>

        <TextField
          size="small"
          placeholder="search for colleges"
          sx={{ width: 240 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* TABLE */}
      <ReusableTable
        columns={projectColumns}
        rows={paginatedData}
        showStatus={tab === 0}
        showActionText={tab === 0}
      />

      {/* PAGINATION */}
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Pagination
          count={Math.ceil(filteredData.length / ROWS_PER_PAGE)}
          page={page}
          onChange={(e, value) => setPage(value)}
          siblingCount={1}
          boundaryCount={1}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              slots={{
                previous: () => <span>&lt; Previous</span>,
                next: () => <span>Next &gt;</span>,
              }}
            />
          )}
          sx={{
            "& .MuiPaginationItem-root": {
              fontWeight: 500,
            },
            "& .Mui-selected": {
              backgroundColor: "#000",
              color: "#fff",
            },
          }}
        />
      </Box>
    </Box>
  );
}
