import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./features/components/layouts/Layout";
import Login from "./features/auth/Login";
import Dashboard from "./features/dashboard/Dashboard";
import Projects from "./features/projects/Projects";
import Activities from "./features/activities/Activities";
import Analysis from "./features/analysis/Analysis";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />

      {/* Protected - uses Layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/analysis" element={<Analysis />} />
      </Route>
    </Routes>
  );
}

export default App;
