import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function CategoryBar() {
    let location = useLocation();


    return (
        <div className="w-full bg-white border-b border-gray-200 shadow-xs overflow-x-auto">
            <div className="max-w-7xl mx-auto px-16 flex items-center space-x-4 py-3 text-sm whitespace-nowrap">

                {/* IT Category Tab */}
                <button className={`px-5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${location.pathname.includes('IT')
                        ? 'bg-blue-900 text-white font-bold shadow-md shadow-indigo-100'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 font-medium border border-gray-200'
                    }`}>
                    <NavLink to='IT'>IT Courses</NavLink>
                </button>

                {/* Lifestyle Category Tab */}
                <button className={`px-5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${location.pathname.includes('Lifestyle')
                        ? 'bg-blue-900 text-white font-bold shadow-md shadow-indigo-100'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 font-medium border border-gray-200'
                    }`}>
                    <NavLink to='Lifestyle'>Lifestyle Courses</NavLink>
                </button>

            </div>
        </div>
    );
}

export default CategoryBar;