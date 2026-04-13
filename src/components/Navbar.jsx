import React from 'react'
import'./css/Navbar.css'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-full p-2 text-white bg-gray-900 navbar z-999">
      <h1 className="p-5 text-2xl font-bold">
        Cine<span className="text-yellow-600">Vault</span>
      </h1>
      <ul className="flex p-2 justify-right ml-50">
        <li>
          <button className="transform cursor-pointer duration-400 navbtn hover:text-yellow-400 hover:scale-105">
            <a href="#">Home</a>
          </button>
        </li>
        <li>
          <button className="transform cursor-pointer duration-400 navbtn hover:text-yellow-400 hover:scale-105">
            <a href="#">Movies</a>
          </button>
        </li>
        <li>
          <button className="transform cursor-pointer duration-400 navbtn hover:text-yellow-400 hover:scale-105">
            <a href="#">TV Shows</a>
          </button>
        </li>
        <li>
          <button className="transform cursor-pointer duration-400 navbtn hover:text-yellow-400 hover:scale-105">
            <a href="#">My List</a>
          </button>
        </li>
      </ul>
      <div className="flex items-center box rounded-full overflow-hidden w-90 shadow-[0_8px_20px_rgb(0,0,0.9)] transform duration-400 hover:scale-101">
        <input
          type="text"
          placeholder="Type here..."
          className="p-4 text-white bg-transparent focus:outline-none hover:bg-gray-800"
        />
        <button className="w-full p-2 bg-blue-800 cursor-pointer btn hover:bg-blue-700">
          Search
        </button>
      </div>
    </nav>
  );
}
