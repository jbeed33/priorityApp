import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Login />} /> */}
        <Route index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
