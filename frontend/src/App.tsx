import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="flex">
      <Routes>
        {/* Use `element` instead of `component` */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
