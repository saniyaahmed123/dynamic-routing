import React from 'react';
import Card from '../components/Card';

// Import local images from course8 to course12
import course8 from '../assets/courses/course8.png';
import course9 from '../assets/courses/course9.png';
import course10 from '../assets/courses/course10.png';
import course11 from '../assets/courses/course11.png';
import course12 from '../assets/courses/course12.png';

function Lifestyle() {
  const LifestyleCourses = [
    {
      id: 1,
      title: "The Ultimate Photography Masterclass for Beginners",
      instructor: "Mark Wallace, Professional Photographer",
      image: course8,
      badge: "Featured",
      rating: 4.8,
      reviews: 42110,
      price: "$11.99",
      originalPrice: "$79.99"
    },
    {
      id: 2,
      title: "UI/UX Design Specialization: From Concept to Wireframe",
      instructor: "Daniel Walter Scott, Lead Designer",
      image: course9,
      badge: "Popular",
      rating: 4.9,
      reviews: 88412,
      price: "$12.99",
      originalPrice: "$84.99"
    },
    {
      id: 3,
      title: "Complete Blender Creator: 3D Modelling for Beginners",
      instructor: "Ben Tristem, Rick Davidson",
      image: course10,
      badge: "Bestseller",
      rating: 4.7,
      reviews: 145200,
      price: "$10.99",
      originalPrice: "$69.99"
    },
    {
      id: 4,
      title: "Music Production in Logic Pro X: The Complete Course",
      instructor: "Omid Yoo, Certified Instructor",
      image: course11,
      badge: "Hot",
      rating: 4.8,
      reviews: 32150,
      price: "$9.99",
      originalPrice: "$59.99"
    },
    {
      id: 5,
      title: "Creative Writing Masterclass: Crafting Compelling Stories",
      instructor: "Shani Petroff, Author",
      image: course12,
      badge: "New",
      rating: 4.7,
      reviews: 18400,
      price: "$10.99",
      originalPrice: "$64.99"
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8 mx-16">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Lifestyle & Hobbies</h1>
        <p className="text-sm text-gray-500 mt-1">Explore your creative side and learn new skills with our expert-led courses.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-16">
        {LifestyleCourses.map((course) => (
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

export default Lifestyle;