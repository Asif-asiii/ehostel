import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UilBars,UilEdit ,UilSearch, UilSun, UilMoon, UilUser } from "@iconscout/react-unicons";

const Navbar = ({ toggleSideBar, isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNote, setIsNote] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNote = () => {
    setIsNote(!isNote);
  };

  return (
    <nav
      className={`p-4 flex justify-between items-center transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#F0F0F0]'
          : 'bg-[#F0F0F0]'
      }`}
    >
      {/* Left Side: Hamburger & Search Bar */}
      <div className="flex items-center space-x-4 ">
        {/* Hamburger Icon */}
        <button className={isDarkMode ? 'text-white' : 'text-black'} onClick={toggleSideBar} id="hamburger">
          <UilBars size="24" />
        </button>
        {/* Search Bar */}
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <UilSearch />
          </span>
          <input
            type="text"
            className={`w-full rounded-full pl-10 pr-4 py-2 focus:outline-none transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-700 text-white focus:bg-white focus:text-gray-900'
                : 'bg-gray-200 text-black focus:bg-white focus:text-gray-900'
            }`}
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Right Side: Dark Mode Toggle & Profile */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
      
        {/* Profile Icon */}
        <div className="relative">
          <button onClick={toggleNote} className={isNote ? 'text-white focus:outline-none' : 'text-black focus:outline-none'} id="epat">
            <UilEdit size="24" />
          </button>
          {/* Dropdown */}
          {isNote && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Hostel 1
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Hostel 2
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Hostel 3
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className={isDarkMode ? 'text-white focus:outline-none' : 'text-black focus:outline-none'} id="epat">
            <UilUser size="24" />
          </button>
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
