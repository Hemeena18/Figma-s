import React from "react";
import { Grid } from "@mui/material";
import TopCards from "../Components/common/TopCards";
import RemainderCard from "../Components/common/RemainderCard";
import MouChart from "../Components/common/MouChart";
import LongTermPartnership from "../Components/common/LongTermPartnership"; 

const reminders = [ 
  { id: "1234566", name: "PSN College of Engineering and Technology", status: "Expires on", date: "27 Aug 2025"}, 
  { id: "1234379", name: "Government College of Engineering", status: "Expired", date: "25 May 2025"}, 
  { id: "1234630", name: "Francis Xavier Engineering College", status: "Expires On", date: "01 Oct 2025"},
  { id: "1234051", name: "Kamaraj Engineering College", status:"Expires On", date: "12 Jun 2025"},
  { id: "1234840", name: "Goverment College of Engineering", status:"Expires On", date: "03 Jan 2025" },
  { id: "1234284", name: "Francis Xavier Engineering College", status:"Expires On", date: "27 Sep 2025" },
  { id: "1234064", name: "Kamaraj Engineering College", status:"Expires On", date: "19 Mar 2025" }, 
  { id: "1234975", name: "PSN College of Engineering and Technology", status:"Expired", date: "30 Dec 2025" }, 
  { id: "1234851", name: "Goverment College of Engineering", status:"Expired", date: "13 Feb 2025" }, 
];
const Dashboard = () => {
  return (
    <>
      <TopCards />

     <Grid container spacing={3}>
  {/* Left Column */}
  <Grid item xs={12} md={6}>
    <RemainderCard items={reminders} />
  </Grid>

  {/* Right Column */}
  <Grid item xs={12} md={6}>
    <Grid container spacing={3} direction="column">
      <Grid item>
        <MouChart />
      </Grid>
      <Grid item>
        <LongTermPartnership />
      </Grid>
    </Grid>
  </Grid>
</Grid>

    </>
  );
};

export default Dashboard;
