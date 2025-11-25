import React from 'react'

function Hero() {
  return (
    <section className="bg-[#f7f7f7] p-10 sm:p-16 lg:p-36">
      <div className='flex flex-col justify-between items-center gap-4'>
        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold flex flex-col gap-1 text-center sm:text-left'>

          <h1>Hello, I'm Alishba Ashiq</h1>
          <p className="text-base sm:text-lg">Frontend React Developer</p>
        </div>
        <button className="bg-black text-white py-2 px-6 sm:px-8 rounded-4xl hover:scale-110 shadow-xl duration-300 ease-out cursor-pointer shadow-amber-50 ">
          Hire Me
        </button>
      </div>
    </section>
  )
}

export default Hero
