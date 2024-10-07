import React from 'react'

const Header = () => {
  return (
    <div>
  <header>
    <nav className='flex items-center justify-between bg-gray-900 p-6 shadow-lg'>
      <a href='/' className='text-yellow-500 font-bold text-2xl hover:text-yellow-400 transition duration-300'>
        SWAPI API
      </a>
      <ul className='flex space-x-6'>
        <li>
          <a href='/' className='text-gray-300 hover:text-yellow-400 transition duration-300'>
            Starships
          </a>
        </li>
        <li>
          <a href='/pilote' className='text-gray-300 hover:text-yellow-400 transition duration-300'>
            People
          </a>
        </li>
        <li>
          <a href='/planets' className='text-gray-300 hover:text-yellow-400 transition duration-300'>
            Planets
          </a>
        </li>
      </ul>
    </nav>
  </header>
</div>
  )
}

export default Header