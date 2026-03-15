import React from "react";
import { LayoutDashboard, ArrowRightLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl ${
      location.pathname === path
        ? "text-green-700 font-bold"
        : "text-gray-500 hover:bg-gray-100"
    }`;

  return (
    <div className="w-60 bg-white p-6 flex flex-col gap-6 border-r">

      <h2 className="text-xl font-bold">Finance Tracker</h2>

      <Link to="/" className={linkStyle("/")}>
        <LayoutDashboard size={20} />
        Dashboard
      </Link>

      <Link to="/transactions" className={linkStyle("/transactions")}>
        <ArrowRightLeft size={20} />
        Transactions
      </Link>

    </div>
  );
};

export default Navbar;