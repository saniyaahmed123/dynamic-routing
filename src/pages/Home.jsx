import React from 'react'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Carousel2 from '../components/Carousel2';
import Section1 from '../components/Section1';
import c1 from '../assets/carousel/c1.png'
import c2 from '../assets/carousel/c2.png'


function Home() {
    const carouselData = [
        {
            title: "Build in-demand tech skills",
            description: "Get access to 26,000 courses from real-world experts with one subscription.",
            buttonText: "Get Personal Plan",
            image: c1


        },
        {
            title: "Master Web Development",
            description: "Learn HTML, CSS, JavaScript, and React from scratch to build amazing apps.",
            buttonText: "Explore IT",
            image: c2

        }
    ];
    return (
        <div>
            <Navbar/>
            <Carousel data={carouselData}/>
            <Carousel2 />
            <Section1 />


        </div>
    )
}

export default Home
