import React from 'react'
import { Link } from 'react-router-dom'
function header() {
  return (
    <div className='  bg-cyan-950 sticky top-0 z-100'>
        <nav className="flex justify-between w-[95%] m-auto p-5 items-center sticky top-0  z-100">
      <h2 className="w-[130px] "><img src="./log.png" alt="" /></h2>
      <ul className="flex gap-6 text-white">
     
        <Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/skill">Skills</Link>
<Link to="/project">Projects</Link>
<Link to="/contacts">Contacts</Link>

      </ul>
    </nav>
    </div>
  )
}

export default header
