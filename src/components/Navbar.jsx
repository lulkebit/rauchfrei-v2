import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-[#6AB04C] to-[#BADC58] text-gray-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-[#6AB04C] to-[#BADC58] rounded-box w-52"
          >
            <li>
              <Link to="/">Übersicht</Link>
            </li>
            <li>
              <Link to="/health">Gesundheit</Link>
            </li>
            <li>
              <Link to="/savings">Sparziele</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2 fill-current text-gray-800"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
          Rauchfrei
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Übersicht</Link>
          </li>
          <li>
            <Link to="/health">Gesundheit</Link>
          </li>
          <li>
            <Link to="/savings">Sparziele</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/settings" className="btn btn-ghost">
          Einstellungen
        </Link>
      </div>
    </div>
  );
};

export default Navbar;