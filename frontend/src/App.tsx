import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import axiosInstance from "./utils/axiosInstance";
import { useAppDispatch } from "./utils/constants";
import { updateToken } from "./utils/store/slices/iconGen";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster"

function App() {
  const is_loggedin = true

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const fetchAccessToken = async () => {
    try{
      const response = await axiosInstance.get("/auth/refreshAccessToken")
      const data = await response.data

      dispatch(updateToken(data.access_token))
      
    }
    catch(err){
      navigate("/login")
    }
  }

  useEffect(() => {
    fetchAccessToken()
  }, [])


  return (
    <div className="flex">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Dashboard is_loggedin={is_loggedin}/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
