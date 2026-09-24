import React, { useState } from 'react';


function Carousel({ data }) {
    console.log(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);

    const carousel = data[currentIndex];

    return (
        <div className='flex justify-center'>
            <div className={`relative w-340  rounded-b-sm overflow-hidden shadow-lg my-10 mx-6 py-18`} style={{ backgroundImage: `url(${carousel.image})` }}>

                {/* Previous Button with Icon */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-md transition flex items-center justify-center"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>

                {/* White box container shifted to the left */}
                <div className="max-w-xl ml-6 lg:ml-16 bg-white rounded-lg shadow-xl px-6 py-10  text-gray-900 z-10 relative">
                    <h2 className="text-3xl font-bold mb-4">{carousel.title}</h2>
                    <p className="text-gray-600 mb-6">{carousel.description}</p>
                    <button className="px-6 py-2.5 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition">
                        {carousel.buttonText}
                    </button>
                </div>

                {/* Next Button with Icon */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-md transition flex items-center justify-center"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>
        </div>
    );
}

export default Carousel;