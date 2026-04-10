import React from 'react'
import'./css/Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav bg-gray-800 text-white p-4 flex justify-between items-center shadow-[0_4px_20px_rgba(60,120,246,0.8)]'>
        <h1 className='text-2xl font-bold'>CineVault</h1>
        <ul className='flex justify-right p-2 ml-50'>
            <button className='navbtn hover:text-yellow-400 transform hover:scale-105 cursor-pointer'><a href="#">Home</a></button>
            <button className='navbtn hover:text-yellow-400 transform hover:scale-105 cursor-pointer'><a href="#">Movies</a></button>
            <button className='navbtn hover:text-yellow-400 transform hover:scale-105 cursor-pointer'><a href="#">TV Shows</a></button>
            <button className='navbtn hover:text-yellow-400 transform hover:scale-105 cursor-pointer'><a href="#">My List</a></button>
        </ul>
        <search className='flex items-center box rounded-full overflow-hidden w-90 shadow-[0_8px_20px_rgb(0,0,0.9)] transform hover:scale-101'>
            <input type="text" placeholder='Type here...' className='bg-transparent focus:outline-none text-white p-4 hover:bg-gray-700' />
        <button className='btn bg-blue-800 p-2 w-full hover:bg-blue-900'>Search</button>
        </search>
    </nav>
  )
}
