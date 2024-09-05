import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Hostels from './pages/hostels/Hostels';
import Rooms from './pages/rooms/Rooms';
import Beds from './pages/beds/Beds';
import Tenants from './pages/tenants/Tenants';
import Bookings from './pages/bookings/Bookings';
import Services from './pages/services/Services';
import HostelExpenses from './pages/hostel-expenses/HostelExpenses';
import ExpenseCategories from './pages/exp-categories/ExpeenseCategories';
import ExpenseHeads from './pages/exp-heads/ExpenseHeads';
import ExpenseItems from './pages/exp-items/ExpenseItems';
import StockStatuses from './pages/stock-statuses/StockStatuses';
import StockDemands from './pages/stock-demands/StockDemands';
import PettyCash from './pages/petty-cash/PettyCash';
import CashRegister from './pages/cash-register/CashRegister';
import TenantsReport from './pages/tenant-reports/TenantReport';
import Hrm from './pages/hrm/Hrm';
import BankAccounts from './pages/bank-accounts/BankAccounts';
import Units from './pages/units/Units';
import ManagementUser from './pages/management-user/ManagementUser';
import Navbar from './components/navbar/Navbar';
import AddHostel from './pages/hostels/AddHostel';
import AddRoomTable from './pages/rooms/AddRoomTable';
const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex">
      {isSideBarOpen && <Sidebar />}
      <div
        className={`flex-1 p-4 min-h-screen text-[#665429] transition-colors duration-300 ${
          isDarkMode
            ? 'bg-gray-100'
            : 'bg-gray-100'
        }`}

      >
        <Navbar
          toggleSideBar={toggleSideBar}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          
        />
        <Routes>
          <Route path="/hostels" element={<Hostels />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hostels/expenses" element={<HostelExpenses />} />
          <Route path="/expense/categories" element={<ExpenseCategories />} />
          <Route path="/expense/heads" element={<ExpenseHeads />} />
          <Route path="/expense/items" element={<ExpenseItems />} />
          <Route path="/stock/statuses" element={<StockStatuses />} />
          <Route path="/stock/demands" element={<StockDemands />} />
          <Route path="/petty/cash" element={<PettyCash />} />
          <Route path="/cash/register" element={<CashRegister />} />
          <Route path="/tenant/reports" element={<TenantsReport />} />
          <Route path="/hrm" element={<Hrm />} />
          <Route path="/bank/accounts" element={<BankAccounts />} />
          <Route path="/units" element={<Units />} />
          <Route path="/management/user" element={<ManagementUser />} />
          <Route path='/add/hostel' element={<AddHostel />} />
          <Route path='/add/room' element={<AddRoomTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
