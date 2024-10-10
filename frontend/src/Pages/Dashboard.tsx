import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Dashboard = () => {
  const location = useLocation()
  const { token } = location.state
  const navigate = useNavigate()


  const testAPI = async (e) => {
    try{
      const response = await axiosInstance.get("/auth/testAccess", {
        headers:{
          "Authorization": `Bearer ${token}`
        }
       })
       console.log(response)
    }
    catch(err){
      navigate("/login")
    }
     
  }


  return <div>
    <div className="">
      <button onClick={testAPI}>Test API</button>
    </div>
  </div>;
};

export default Dashboard;
