import React from 'react';
import grid from '../assets/grid.png';

function Section1() {
    return (
        <div className="max-w-[84rem] mx-auto px-6 py-10">
            {/* Main Dark Container Card */}
            <div className="bg-[#202230] rounded-3xl px-10 lg:px-16 py-16 lg:py-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5 shadow-2xl">
                
                {/* Left Section: Content & CTA */}
                <div className="lg:w-[45%] flex flex-col items-start text-left">
                    
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-normal mb-4 leading-tight text-white font-sans">
                        Reimagine your career in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">AI era</span>
                    </h2>
                    
                    <p className="text-gray-300 text-sm lg:text-base mb-8 leading-relaxed font-normal">
                        Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
                    </p>

                    {/* Features List (2x2 Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8 w-full text-sm text-gray-200">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-950 flex items-center justify-center text-purple-300 flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-200 tracking-tight">Learn AI and more</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-300 flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-3.5 2 1-4.2-3.2-2.8 4.3-.4L12 5l1.6 3.6 4.3.4-3.2 2.8 1 4.2z" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-200 tracking-tight">Prep for a certification</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-blue-300 flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-200 tracking-tight">Practice with AI coaching</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-amber-950 flex items-center justify-center text-amber-300 flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-200 tracking-tight">Advance your career</span>
                        </div>
                    </div>

                    {/* CTA Button & Pricing */}
                    <div className="flex flex-col items-start gap-3 w-full">
                        <button className="bg-white text-gray-950 font-bold px-7 py-3 rounded-xl hover:bg-gray-100 transition shadow-sm cursor-pointer text-sm">
                            Learn more
                        </button>
                        <span className="text-xs text-gray-400">
                            Starting at <span className="text-white font-medium">$11.00/month</span>
                        </span>
                    </div>

                </div>

                {/* Right Section: Integrated Grid Image Layout Matching Reference */}
                <div className="lg:w-[55%] w-full flex items-center justify-center">
                    <div className="w-full flex items-center justify-center overflow-hidden relative">
                        <img 
                            src={grid}
                            alt="Reimagine career layout asset" 
                            className="w-full h-auto max-h-[420px] object-contain rounded-2xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section1;