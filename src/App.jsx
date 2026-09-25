import React from 'react'
import Home from './pages/Home'
import Courses from './pages/Courses'
import { Route, Routes } from 'react-router-dom'
import IT from './pages/IT'
import Lifestyle from './pages/Lifestyle'
import Allcourses from './pages/Allcourses'
import Arrow from './components/Arrow'
import back from './assets/back.png'
import Profile from './pages/Profile'



function App() {
  return (
    <div>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/courses' element={<Courses />}>
          <Route index element={<Allcourses />} />
          <Route path='IT' element={<IT />} />
          <Route path='Lifestyle' element={<Lifestyle />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
