import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="bg-gray-500 flex justify-between p-4 text-lg">
      <h2> Welcome To React and MySQL </h2>
      <nav>
        <ul className='flex gap-2'>
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/new"> Create user </Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
