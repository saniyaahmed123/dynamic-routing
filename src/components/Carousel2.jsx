import React from 'react';
import cc1 from '../assets/carousel/cc1.png';
import cc2 from '../assets/carousel/cc2.png';
import cc3 from '../assets/carousel/cc3.png';
import cc4 from '../assets/carousel/cc4.png';
import cc5 from '../assets/carousel/cc5.png';

function Carousel2() {
    const cards = [
        { title: "Large Language Models", image: cc1 },
        { title: "Machine Learning", image: cc2 },
        { title: "AI Agents", image: cc3 },
        { title: "Web Development", image: cc4 },
        { title: "Data Science", image: cc5 }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                
                {/* Left Section: Title and Description */}
                <div className="lg:w-1/3 text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-snug">
                        Learn <span className="italic font-normal">essential</span> career and life skills
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        EduPulse helps you build in-demand skills fast and advance your career in a changing job market.
                    </p>
                </div>

                {/* Right Section: Zero-JS Scroll-Snap Carousel */}
                <div className="lg:w-2/3 w-full relative">
                    
                    {/* Scrollable Container with CSS Snap */}
                    <div 
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {cards.map((card, index) => (
                            <div 
                                key={index} 
                                className="w-[380px] flex-shrink-0 snap-start box-border"
                            >
                                <div 
                                    className="rounded-3xl p-8 h-[430px] flex flex-col justify-between shadow-sm relative overflow-hidden group cursor-pointer border border-black/5 transition-all duration-300 hover:shadow-md bg-cover bg-center w-full"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-300"></div>

                                    <div className="relative z-10 flex-grow"></div>

                                    {/* White Card Title Box */}
                                    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between relative z-10">
                                        <span className="font-bold text-gray-900 text-sm tracking-tight truncate">{card.title}</span>
                                        <span className="text-gray-800 font-bold group-hover:translate-x-1 transition-transform ml-2">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-4">Swipe or scroll horizontally to see more</p>

                </div>

            </div>
        </div>
    );
}

export default Carousel2;