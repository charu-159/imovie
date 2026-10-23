import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import UserProtection from "./components/protection/UserProtection";
import AdminProtection from "./components/protection/AdminProtection";

// Pages (User)
import Landing from "./pages/Landing";
import Login from "/pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";

// Pages (Admin)
import AdminMovies from "/pages/admin/AdminMovies";
import AdminBookings from "/pages/admin/AdminBookings";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Header />

      {/* Routes */}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected user routes */}
        <Route
          path="/home"
          element={
            <UserProtection>
              <Home />
            </UserProtection>
          }
        />
        <Route
          path="/bookings"
          element={
            <UserProtection>
              <Bookings />
            </UserProtection>
          }
        />
        <Route
          path="/dashboard"
          element={
            <UserProtection>
              <Dashboard />
            </UserProtection>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin/movies"
          element={
            <AdminProtection>
              <AdminMovies />
            </AdminProtection>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <AdminProtection>
              <AdminBookings />
            </AdminProtection>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

