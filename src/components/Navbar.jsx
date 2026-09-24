import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md border-b border-gray-200">
        {/* Logo and Brand Name */}
        <div className="flex items-center ms-5">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-gray-900 tracking-tight">
            <img src={logo} className="h-10 w-auto object-contain" alt="EduPulse Logo" />
            EduPulse
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input type="text" placeholder="Search for anything..." className="w-full pl-11 pr-4 py-3.5 text-sm bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition" />
          </div>
        </div>

        {/* Navigation Links & Actions */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
            {/* Modernized Home Link */}
            <NavLink to="/" className={`${({isActive})=>  isActive ? 'underline underline-offset-8 decoration-2 decoration-indigo-600 font-semibold text-indigo-600' : ''} hover:text-indigo-600 transition`}>
              Home
            </NavLink>

            {/* Modernized Courses Link */}
            <NavLink to="/courses" className={`${({isActive})=> isActive ? 'underline underline-offset-8 decoration-2 decoration-indigo-600 font-semibold text-indigo-600' : ''} hover:text-indigo-600 transition`}>
              Courses
            </NavLink>
          </div>

          {/* Cart Icon */}
          <a href="#" className="text-gray-700 hover:text-indigo-600 p-1 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </a>

          <Button text="contact" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
