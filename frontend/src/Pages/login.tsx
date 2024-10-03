import { useState } from "react";
import "../App.css";
import axiosInstance from "../utils/axiosInstance";
// import { useHistory } from "react-router-dom";

//let navigate = useNavigate();
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    console.log(response);
  };

  // const history = useHistory();

  // const routeChange = () => {
  //   let path = `/signup`;
  //   history.push(path);
  // };

  return (
    <div className="flex w-full h-screen">
      {/* first Div for the lefthand side */}
      <div className="w-full flex flex-col items-center justify-center lg:w-1/2 bg-white px-10 py-20 rounded-3xl border border-grey">
        <div className="w-full max-w-md border-2 border-gray-200 rounded-xl p-8">
          <h1 className="text-5xl font-semibold">Welcome Back </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome Back! Please Enter your details{" "}
          </p>
          <form>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-lg font-medium">Password</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your Passowrd"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-8 flex justify-between">
                <div>
                  <input type="checkbox" id="remember" />
                  <label className="ml-2 font-medium text-base">
                    RememberMe
                  </label>
                </div>
                <button className="font-medium text-base text-violet-500">
                  Forgot Password
                </button>
              </div>
              <div className="justify-center">
                <div className="mt-8 flex justify-center space-x-10 ">
                  <button
                    className="active:scale-[.95] active:duration-75 hover:scale-[1.05] ease-in-out transition-all w-100 px-6 py-4  rounded-full bg-violet-500 text-white text-lg font-bold w-full"
                    onClick={login}
                  >
                    Sign In
                  </button>
                </div>
                <div className="mt-8 flex justify-center items-center">
                  <p className="font-medium text-base">Don't Have a Account?</p>
                  <button
                    // onClick={routeChange}
                    className="text-violet-500 text-base font-medium ml-2"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* right side of the page */}
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-full animate-bounce" />
        <div className="w-full absolute bottom-0 h-1/2 bg-white/10 backdrop-blur-lg " />
      </div>
    </div>
  );
};

export default Login;
