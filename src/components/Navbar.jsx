import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {

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
            <NavLink to="/" className={({ isActive }) => isActive ? 'underline underline-offset-8 decoration-2 decoration-indigo-600 font-semibold text-indigo-600 hover:text-indigo-600 transition' : 'hover:text-indigo-600 transition'}>
              Home
            </NavLink>

            {/* Modernized Courses Link */}
            <NavLink to="/courses" className={({ isActive }) => isActive ? 'underline underline-offset-8 decoration-2 decoration-indigo-600 font-semibold text-indigo-600 hover:text-indigo-600 transition' : 'hover:text-indigo-600 transition'}>
              Courses
            </NavLink>
          </div>

          {/* Settings Icon (Replaced Shopping Cart) */}
          <a href="#" className="text-gray-700 hover:text-[#202230] p-1 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </a>

          {/* User Section with Initial Avatar, Welcome Text, and Student Badge */}
          <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
            <NavLink to='/profile' className={(isActive) => { isActive ? 'text-blue-950 ' : ' ' }}><div className="w-9 h-9 rounded-full bg-[#202230] text-white font-bold flex items-center justify-center text-sm shadow-sm">
              A
            </div></NavLink>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-gray-800">Welcome, Ali</span>
              <span className="text-[10px] font-medium text-[#202230] bg-indigo-50 px-2 py-0.5 rounded-full w-fit mt-0.5">
                Student
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;