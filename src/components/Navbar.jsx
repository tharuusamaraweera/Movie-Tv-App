import React from 'react'
import'./css/Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav bg-gray-900 text-white p-2 flex justify-between items-center shadow-[0_4px_20px_rgba(60,120,246,0.8)]'>
        <h1 className='text-2xl p-5 font-bold'>Cine<span className='text-yellow-600'>Vault</span></h1>
        <ul className='flex justify-right p-2 ml-50'>
           <li><button className='navbtn hover:text-yellow-400 transform hover:scale-105 cursor-pointer'><a href="#">Home</a></button></li>
           <li><button className='navbtn hover:text-yellow-400 transform hover:scale-105 cursor-pointer'><a href="#">Movies</a></button></li>
           <li><button className='navbtn hover:text-yellow-400 transform hover:scale-105 cursor-pointer'><a href="#">TV Shows</a></button></li>
           <li><button className='navbtn hover:text-yellow-400 transform hover:scale-105 cursor-pointer'><a href="#">My List</a></button></li>
        </ul>
        <div className='flex items-center box rounded-full overflow-hidden w-90 shadow-[0_8px_20px_rgb(0,0,0.9)] transform hover:scale-101'>
            <input type="text" placeholder='Type here...' className='bg-transparent focus:outline-none text-white p-4 hover:bg-gray-800' />
        <button className='btn bg-blue-800 p-2 w-full hover:bg-blue-700 cursor-pointer'>Search</button>
        </div>
    </nav>
  )
}
