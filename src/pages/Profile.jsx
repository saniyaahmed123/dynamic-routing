// JavaScript
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import {contextObj} from '../contextApi/UserContext'
function Profile() {
  const data = useContext(contextObj)
   console.log(data)
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Navbar />
            
            {/* Full-Page Wrapper */}
            <div className="flex-1 w-full pb-16">
                
                {/* Full-Width Dark Blue Header Banner */}
                <div className="w-full h-44 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 px-8 shadow-sm"></div>

                {/* Profile Header Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between -mt-12 mb-8 px-2">
                        
                        {/* Left side: Avatar and Name grouped properly */}
                        <div className="flex items-end space-x-5">
                            {/* Avatar overlapping the banner */}
                            <div className="w-28 h-28 rounded-full bg-white text-blue-900 font-bold text-4xl flex items-center justify-center border-4 border-white shadow-md shrink-0">
                                A
                            </div>
                            
                            {/* Name and Badge sitting cleanly in the white section */}
                            <div className="pb-1">
                                <h1 className="text-2xl font-bold text-slate-900">
                                    Ali
                                </h1>
                                <div className="mt-1">
                                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-900 text-white">
                                        Student
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Information Grid Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        {/* Contact Info Card */}
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                            <h2 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Contact Info
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs text-slate-400 font-medium block">Email</span>
                                    <p className="text-sm text-slate-800 font-medium mt-0.5">ali@gmail.com</p>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-400 font-medium block">Phone</span>
                                    <p className="text-sm text-slate-800 font-medium mt-0.5">03128882941</p>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-400 font-medium block">Address</span>
                                    <p className="text-sm text-slate-800 font-medium mt-0.5">B 103, Block 19 F.B Area</p>
                                </div>
                            </div>
                        </div>

                        {/* Personal & Academic Information Cards (Span 2 columns) */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                                <h2 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    Personal Information
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs text-slate-400 font-medium block">Gender</span>
                                        <p className="text-sm text-slate-800 font-medium mt-0.5">Male</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-400 font-medium block">Date of Birth</span>
                                        <p className="text-sm text-slate-800 font-medium mt-0.5">January 15, 2004</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-400 font-medium block">Last Qualification</span>
                                        <p className="text-sm text-slate-800 font-medium mt-0.5">Intermediate</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-400 font-medium block">Student ID</span>
                                        <p className="text-sm text-slate-800 font-medium mt-0.5">EDP-2026-941</p>
                                    </div>
                                </div>
                            </div>

                            {/* Enrolled Courses Section */}
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                                    <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                        </svg>
                                        Enrolled Courses
                                    </h2>
                                    <span className="bg-blue-50 text-blue-900 text-xs font-bold px-2.5 py-1 rounded-full">1</span>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-800">Modern Web Application Development</span>
                                    <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded">In Progress</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;