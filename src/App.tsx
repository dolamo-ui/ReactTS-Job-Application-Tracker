
// File: src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddJob from "./pages/Addjob";
import EditJob from "./pages/EditJob";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages with Navbar */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/add-job"
          element={
            <>
              <Navbar />
              <AddJob />
            </>
          }
        />
        <Route
          path="/edit-job/:id"
          element={
            <>
              <Navbar />
              <EditJob />
            </>
          }
        />

        {/* 🔹 Catch-All Route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
