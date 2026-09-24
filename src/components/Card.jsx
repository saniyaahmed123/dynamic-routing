import React from 'react';

function Card(props) {
    return (
        // Add "h-full" here so all cards match the tallest card in the row
        <div className="group bg-slate-100 rounded-3xl border border-gray-200 p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between w-full max-w-xs text-left h-full">
            
            {/* Top Image Container */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-white border border-gray-100 flex-shrink-0">
                <img 
                    src={props.image} 
                    alt={props.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-blue-950 to-blue-900 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-xl shadow-md backdrop-blur-md bg-opacity-90">
                    {props.badge}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
                   {props.title}
                </h3>

                <p className="text-[11px] text-gray-500 mb-3 font-medium line-clamp-1">
                    {props.instructor}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mb-4 text-[10px]">
                    <span className="bg-teal-50 text-teal-700 font-semibold px-2 py-0.5 rounded-md border border-teal-100">
                        Bestseller
                    </span>
                    <span className="bg-white text-gray-600 px-2 py-0.5 rounded-md font-medium border border-gray-200">
                        Course
                    </span>
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-800 font-bold px-1.5 py-0.5 rounded-md border border-amber-100">
                        <span>{props.rating}</span>
                    </div>
                    <span className="text-gray-500 font-medium">
                        ({props.reviews} ratings)
                    </span>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="flex items-baseline gap-2 mt-auto pt-2.5 border-t border-gray-200">
                <span className="text-lg font-black text-gray-900 tracking-tight">
                    {props.price}
                </span>
                <span className="text-xs text-gray-400 line-through font-semibold">
                    {props.originalPrice}
                </span>
            </div>

        </div>
    );
}

export default Card;