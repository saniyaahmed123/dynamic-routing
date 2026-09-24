import React from 'react'


function Arrow(props) {
    console.log(props)
  return (
    <div>
       <button className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer">
            <img src={props.img} alt="" />
        </button>
    </div>
  )
}

export default Arrow