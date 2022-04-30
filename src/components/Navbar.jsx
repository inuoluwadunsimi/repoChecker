import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='flex items-center gap-4 bg-[#0c162d] py-8 px-4'>
        <div className='text-white' > <FaGithubSquare size={50}/> </div>
        <h3 className='text-white font-semibold text-xl ' >Github Repo checker</h3>

    </nav>
  )
}

export default Navbar