import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";

function App() {
  const is_loggedin = true
  return (
    <div className="flex">
      <Routes>
        {/* Use `element` instead of `component` */}
        <Route path="/login" element={<Login is_loggedin={is_loggedin}/>} />
        <Route path="/signup" element={<SignUp is_loggedin={is_loggedin}/>} />
        <Route path="/dashboard" element={<Dashboard is_loggedin={is_loggedin}/>} />
      </Routes>
    </div>
  );
}

export default App;
