import React from "react";

const SignUp = ({ is_loggedin}:{is_loggedin:boolean}) => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex flex-col items-center justify-center bg-white px-10 py-20 rounded-3xl border border-grey">
        <div className="w-full max-w-md border-2 border-gray-200 rounded-xl p-8">
          <h1 className="text-5xl font-semibold">Sign Up Form </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Enter the details for the Signup
          </p>
          <form>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">First Name</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your FirstName"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Last Name</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your LastName"
                />
              </div>
              <div>
                <label className="text-lg font-medium">
                  Email ID <span> </span>
                  <span className="text-sm font-small">
                    (This will be used as your Login)
                  </span>
                </label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your Emai Id"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Password</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter Your Password"
                />
              </div>
              <div>
                <label className="text-lg font-medium">Confirm Password</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Confirm the Password"
                />
              </div>
              <div className="flex justify-center pt-5">
                <button className=" px-6 py-2 font-medium bg-violet-500  text-white rounded-full hover:bg-violet-600 transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
