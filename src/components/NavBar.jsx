import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return <header className="bg-gray-800 text-white ">
    <nav className='max-w-6xl mx-auto p-4 flex flex-col sm:flex-row justify-between '>
      <Link to='/'>
        <h2 className='text-cyan-500 font-bold text-3xl'> Ⓜ️ERN </h2>
      </Link>
      <ul className='flex gap-2'>
        <li className='px-2 py-1 rounded-lg text-cyan-500 hover:text-white hover:bg-gray-900 transition-all duration-200'>
          <Link to="/login"> Sign in </Link></li>
        <li className='px-2 py-1 rounded-lg text-cyan-500 hover:text-white hover:bg-gray-900 transition-all duration-200'>
          <Link to="/new"> Sign up </Link></li>
      </ul>
    </nav>
  </header>
}

export default NavBar
