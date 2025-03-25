import React from "react";
import Logout from "../components/auth/Logout";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center px-4">
      <h1 className="text-center text-lg md:text-2xl mt-4 md:mt-6">
        Join us and take your career to new heights!
      </h1>

      <div className="flex items-center mt-4 md:mt-6 justify-center">
        <Logout />
      </div>
    </div>
  );
};

export default SignIn;
