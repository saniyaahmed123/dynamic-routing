import React from 'react';
import Card from '../components/Card';

// 1. Import your local images from assets/courses
import course1 from '../assets/courses/course1.png';
import course2 from '../assets/courses/course2.png';
import course3 from '../assets/courses/course3.png';
import course4 from '../assets/courses/course4.png';
import course5 from '../assets/courses/course5.png';
import course6 from '../assets/courses/course6.png';
import course7 from '../assets/courses/course7.png';

function IT() {
    const ITCourses = [
        {
            id: 1,
            title: "100 Days of Code: The Complete Python Pro Bootcamp",
            instructor: "Dr. Angela Yu, Developer and Lead Instructor",
            image: course1,
            badge: "Bestseller",
            rating: 4.7,
            reviews: 436444,
            price: "$9.99",
            originalPrice: "$59.99"
        },
        {
            id: 2,
            title: "The Complete Web Development Bootcamp",
            instructor: "Dr. Angela Yu, Developer and Lead Instructor",
            image: course2,
            badge: "Bestseller",
            rating: 4.8,
            reviews: 372100,
            price: "$11.99",
            originalPrice: "$84.99"
        },
        {
            id: 3,
            title: "Machine Learning A-Z: AI, Python & R",
            instructor: "Kirill Eremenko, Hadelin de Ponteves",
            image: course3,
            badge: "Hot",
            rating: 4.5,
            reviews: 165890,
            price: "$12.99",
            originalPrice: "$79.99"
        },
        {
            id: 4,
            title: "React - The Complete Guide (incl. Hooks, Router, Redux)",
            instructor: "Maximilian Schwarzmüller",
            image: course4,
            badge: "Highest Rated",
            rating: 4.6,
            reviews: 210450,
            price: "$10.99",
            originalPrice: "$69.99"
        },
        {
            id: 5,
            title: "Advanced JavaScript Concepts & Architecture",
            instructor: "Maximilian Schwarzmüller",
            image: course5,
            badge: "Popular",
            rating: 4.6,
            reviews: 142000,
            price: "$11.99",
            originalPrice: "$64.99"
        },
        {
            id: 6,
            title: "NodeJS, Express, MongoDB & More Bootcamp",
            instructor: "Jonas Schmedtmann",
            image: course6,
            badge: "Bestseller",
            rating: 4.8,
            reviews: 198200,
            price: "$13.99",
            originalPrice: "$89.99"
        },
        {
            id: 7,
            title: "Data Structures and Algorithms Masterclass",
            instructor: "Colt Steele",
            image: course7,
            badge: "Highest Rated",
            rating: 4.9,
            reviews: 95400,
            price: "$14.99",
            originalPrice: "$94.99"
        }
    ];

    return (
        <div className="p-8">
            <div className="mb-8 mx-16">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">IT Courses</h1>
                <p className="text-sm text-gray-500 mt-1">Explore your creative side and learn new skills with our expert-led courses.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-16">
                {ITCourses.map((course) => (
                    <div key={course.id}>
                        <Card
                            title={course.title}
                            instructor={course.instructor}
                            image={course.image}
                            badge={course.badge}
                            rating={course.rating}
                            reviews={course.reviews}
                            price={course.price}
                            originalPrice={course.originalPrice}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IT;