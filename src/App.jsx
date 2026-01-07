import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./features/components/layouts/Layout";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";

import Dashboard from "./features/dashboard/Dashboard";
import Projects from "./features/projects/Projects";
import ProjectDetails from "./features/projects/ProjectDetails";

// 🔥 Analysis
import AnalysisLayout from "./features/analysis/AnalysisLayout";
import Outcomes from "./features/analysis/Outcomes";
import Expectations from "./features/analysis/Expectations";

// 🔥 Activities
import ActivitiesLayout from "./features/activities/ActivitiesLayout";
import Symposium from "./features/activities/Symposium";
import Hackathon from "./features/activities/Hackathon";
import Placement from "./features/activities/Placement";
import Internship from "./features/activities/Internship";
import GuestLecture from "./features/activities/GuestLecture";
import Workshop from "./features/activities/Workshop";
import Programme from "./features/activities/Programme";

function App() {
  return (
    <Routes>
      {/* 🔓 Public */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* 🔒 Protected */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        {/* 🔥 Analysis */}
        <Route path="/analysis" element={<AnalysisLayout />}>
          <Route index element={<Navigate to="outcomes" replace />} />
          <Route path="outcomes" element={<Outcomes />} />
          <Route path="expectations" element={<Expectations />} />
        </Route>

        {/* 🔥 Activities */}
        <Route path="/activities" element={<ActivitiesLayout />}>
          <Route index element={<Navigate to="symposium" replace />} />
          <Route path="symposium" element={<Symposium />} />
          <Route path="hackathon" element={<Hackathon />} />
          <Route path="placement" element={<Placement />} />
          <Route path="internship" element={<Internship />} />
          <Route path="guest-lecture" element={<GuestLecture />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="programme" element={<Programme />} />
        </Route>
      </Route>

      {/* 🛡 Safety */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
