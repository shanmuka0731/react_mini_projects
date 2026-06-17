import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-20 h-16 bg-pink-500 text-black font-bold text-xl ">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div> 
  )
}

export default Navbar