import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebarLogo from "../../assets/sidebar.png";
import "./Sidebar.css"
import {
  UilMoneyBill,
  UilStar,
  UilChartPieAlt,
  UilBuilding,
  UilBedDouble,
  UilBed,
  UilUserCircle,
  UilBookMedical,
  UilSetting,
  UilAngleDown,
  UilPlusCircle,
  UilFolderOpen,
  UilBook,
  UilFileGraph,
  Uil0Plus,
  UilUniversity,
  UilPathfinderUnite,
  UilUserSquare,
} from "@iconscout/react-unicons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Expenses");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  const options = [
    {
      label: "Hostel Expenses",
      path: "/hostels/expenses",
      icon: <UilMoneyBill />,
    },
    {
      label: "Expense Categories",
      path: "/expense/categories",
      icon: <UilStar />,
    },
    {
      label: "Expense Heads",
      path: "/expense/heads",
      icon: <UilChartPieAlt />,
    },
    { label: "Expense Items", path: "/expense/items", icon: <UilMoneyBill /> },
  ];

  return (
    <div className="sidebar  w-64 min-h-screen p-4 overflow-y-auto">
      {/* Top sidebar logo */}
      <div className="mb-6">
        <img src={sidebarLogo} alt="Sidebar logo" className="h-12" />
      </div>

      {/* Sidebar items */}
      <div className="flex flex-col space-y-2">
        <Link to="/hostels" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilBuilding />}</span> Hostels
        </Link>
        <Link to="/rooms" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilBedDouble />}</span> Rooms
        </Link>
        <Link to="/beds" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilBed />}</span> Beds
        </Link>
        <Link to="/tenants" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilUserCircle />}</span> Tenants
        </Link>
        <Link to="/bookings" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilBookMedical />}</span> Bookings
        </Link>
        <Link to="/services" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilSetting />}</span> Services
        </Link>

        {/* Dropdown for additional options */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full p-2 bg-gray-400 hover:bg-gray-400 rounded"
            aria-expanded={isOpen}
          id="expense-button">
            {selectedOption} <UilAngleDown />
          </button>
          {isOpen && (
            <ul className="absolute left-0 w-full  mt-1 rounded shadow-lg z-10" id="expense-dropdown">
              {options.map((option, index) => (
                <li key={index}>
                  <Link
                    to={option.path}
                    onClick={() => handleOptionClick(option)}
                    className="flex items-center p-2 hover:bg-gray-300"
                 id="link" >
                    <span className="mr-2">{option.icon}</span>
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link to="/stock/statuses" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilFolderOpen />}</span> Stock Statuses
        </Link>
        <Link to="/stock/demands" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilPlusCircle />}</span> Stock Demands
        </Link>
        <Link to="/petty/cash" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilMoneyBill />}</span> Petty Cash
        </Link>
        <Link to="/cash/register" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilBook />}</span> Cash Register
        </Link>
        <Link to="/tenant/report" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilFileGraph />}</span> Tenant Report
        </Link>
        <Link to="/hrm" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<Uil0Plus />}</span> HRM
        </Link>
        <Link to="/bank/accounts" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilUniversity />}</span> Bank Accounts
        </Link>
        <Link to="/units" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilPathfinderUnite />}</span> Units
        </Link>
        <Link to="/management/user" className="flex items-center p-2 hover:bg-gray-400 rounded" id="link">
          <span className="mr-2">{<UilUserSquare />}</span> Management Users
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
