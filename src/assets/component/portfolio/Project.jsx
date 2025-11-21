import React from 'react'

function Project() {


  return (
<section id="projects" className="p-[100px] flex flex-col gap-3 items-center justify-between bg-[#f7f7f7]">
      <h2 className='text-center my-3 font-bold text-2xl'>My Projects</h2>

      <div className="flex gap-7  flex-wrap  mt-5">
      
      <img src="./img.jpeg" alt="" className='hover:shadow-2xl' />
      <img src="./img3.jpeg" alt="" className='hover:shadow-2xl' />
      <img src="./img7.jpeg" alt="" className='hover:shadow-2xl' />
      <img src="./img2.jpeg" alt="" className='hover:shadow-2xl' />
      <img src="./img5.jpeg" alt="" className='hover:shadow-2xl' />
      <img src="./img9.jpeg" alt="" className='hover:shadow-2xl' />
   
      </div>
    </section>
  )
}

export default Project
