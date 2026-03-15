import React, { useState } from "react";
import { LayoutDashboard, ArrowRightLeft, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkStyle = (path) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg ${
      location.pathname === path
        ? "text-green-700 font-bold"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="w-full bg-white px-6 sm:px-16 py-4">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-xl font-bold">Finance Tracker</h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={linkStyle("/")}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link to="/transactions" className={linkStyle("/transactions")}>
            <ArrowRightLeft size={18} />
            Transactions
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">

          <Link
            to="/"
            className={linkStyle("/")}
            onClick={() => setOpen(false)}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/transactions"
            className={linkStyle("/transactions")}
            onClick={() => setOpen(false)}
          >
            <ArrowRightLeft size={18} />
            Transactions
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;