import React from 'react'

function Button(prop) {
  return (
    <div>
      <button className='bg-[#001E60] py-3 capitalize shadow-2xl px-5  text-white rounded-4xl'>{prop.text}</button>
    </div>
  )
}

export default Button
