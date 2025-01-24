import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Dashboard from '../pages/MenuAdmin/Dashboard';
import StudentDashboard from '../pages/MenuEstudiante/StudentDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/MenuAdmin/*" element={<Dashboard />} />
      <Route path="/MenuEstudiante/*" element={<StudentDashboard />} />
    </Routes>
  );
};

export default AppRoutes; 