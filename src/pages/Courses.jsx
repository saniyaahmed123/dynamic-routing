import React from 'react'
import IT from './IT'
import Lifestyle from './Lifestyle'
import Navbar from '../components/Navbar'
import CategoryBar from '../components/CategoryBar'
import { Outlet } from 'react-router-dom'


function Courses() {
  return (
    <div>
        <Navbar/>
        <CategoryBar/>
 
      <Outlet/>
    </div>
  )
}

export default Courses
