// import React from "react";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import Createuser from "./pages/Createuser";
// import ListofUsers from "./pages/ListofUsers";
// import Home from "./pages/Home";
// import Notfound from "./pages/NotFound";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Welcome from "./pages/Welcome";

// const App = () => {
//   return (
//     <>

//       <Router>

//         <Routes>
//           <Route path="/" element={<Welcome />}></Route>
//           <Route path="/home" element={<Home />}></Route>

//           <Route path="/create-user" element={<Createuser />}></Route>
//           <Route path="/users" element={<ListofUsers />}></Route>

//           <Route path="*" element={<Notfound />}></Route>
//           <Route path="/sign-in" element={<SignIn />}></Route>
//           <Route path="/sign-up" element={<SignUp />}></Route>
//         </Routes>

//       </Router>
//       <Toaster />
//     </>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Createuser from "./pages/Createuser";
import ListofUsers from "./pages/ListofUsers";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/create-user" element={<Createuser />} />
            <Route path="/users" element={<ListofUsers />} />
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
