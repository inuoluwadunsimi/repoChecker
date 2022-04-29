import React from 'react'
import {FaGitSquare} from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='flex flex-row bg-[#0c162d] '>
        <div> <FaGitSquare/> </div>
        <h3>Github Repo checker</h3>

    </nav>
  )
}

export default Navbar