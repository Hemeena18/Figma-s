import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import Analysis from "./pages/Analysis";

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
