import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Topbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 70,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 20px",
        background: "white",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <AccountCircleIcon sx={{ fontSize: 40, color: "#444", cursor: "pointer" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontWeight: 300 }}>Profile name</div>
          <div style={{ fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            arul@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
