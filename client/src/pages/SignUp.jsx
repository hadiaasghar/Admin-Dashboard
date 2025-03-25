// import React from "react";
// import Register from "../components/auth/Register";

// const SignUp = () => {
//   return (
//     <>
//       <div className="h-100% bg-gray-200  ">
       

//         <h1 className=" text-center md:text-2xl">
//         Join us and take your career to new heights!
//         </h1>

//         <div className="flex items-center mt-2   justify-center">
//           <Register />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;



import React from "react";
import Register from "../components/auth/Register";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center px-4">
      <h1 className="text-center text-lg md:text-2xl mt-4 md:mt-6">
        Join us and take your career to new heights!
      </h1>

      <div className="flex items-center mt-4 md:mt-6 justify-center">
        <Register />
      </div>
    </div>
  );
};

export default SignUp;
