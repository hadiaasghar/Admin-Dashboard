import { NavLink } from "react-router-dom";
import { GrArticle, GrUserAdmin } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageProfile from "./userProfile/ImageProfile";
import { loguserOut } from "../features/authencation/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleLogout = () => dispatch(loguserOut());

  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <GrUserAdmin size={36} className="text-blue-500" />
          <h1 className="hidden md:block font-semibold text-xl">Admin Panel</h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/home"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <GrArticle />
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/users"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <FaPeopleGroup />
            <p>Users</p>
          </NavLink>
          <NavLink
            to="/create-user"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <PiHandbagSimpleFill />
            <p>Create User</p>
          </NavLink>
        </nav>

        {/* Auth Section */}
        <div className="hidden md:flex items-center space-x-6">
          {!user ? (
            <>
              <NavLink to="/sign-up" className="text-blue-600 font-medium">
                Join Now
              </NavLink>
              <NavLink to="/sign-in">
                <button className="px-4 py-1 border-2 text-blue-600 border-blue-600 rounded-full">
                  Sign In
                </button>
              </NavLink>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <ImageProfile />
              <h5 className="font-medium">{user?.f_name}</h5>
              <LuLogOut
                size={24}
                className="text-red-500 cursor-pointer"
                onClick={handleLogout}
              />
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={handleToggle}>
          <IoIosMenu size={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink to="/home" className="text-gray-700 hover:text-blue-600">
              Home
            </NavLink>
            <NavLink to="/users" className="text-gray-700 hover:text-blue-600">
              Users
            </NavLink>
            <NavLink
              to="/create-user"
              className="text-gray-700 hover:text-blue-600"
            >
              Create User
            </NavLink>

            {!user ? (
              <>
                <NavLink to="/sign-up" className="text-blue-600 font-medium">
                  Join Now
                </NavLink>
                <NavLink to="/sign-in">
                  <button className="px-4 py-1 border-2 text-blue-600 border-blue-600 rounded-full">
                    Sign In
                  </button>
                </NavLink>
              </>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <ImageProfile />
                <h5 className="font-semibold">{user?.f_name}</h5>
                <button className="text-red-500" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
