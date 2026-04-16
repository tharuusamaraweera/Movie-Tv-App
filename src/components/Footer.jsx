import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="w-full px-10 py-16 mt-20 text-white bg-gray-950">
        <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-4">
          
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Cine<span className="text-yellow-500">Vault</span>
            </h2>
            <p className="text-sm text-gray-400">
              Discover the latest movies and series. Watch trailers, explore
              genres, and stay updated with trending content.
            </p>
          </div>

          
          <div>
            <h3 className="mb-4 text-xl font-semibold">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="transition cursor-pointer hover:text-white">
                Home
              </li>
              <li className="transition cursor-pointer hover:text-white">
                Movies
              </li>
              <li className="transition cursor-pointer hover:text-white">
                TV Shows
              </li>
              <li className="transition cursor-pointer hover:text-white">
                Trending
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="mb-4 text-xl font-semibold">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="transition cursor-pointer hover:text-white">
                Action
              </li>
              <li className="transition cursor-pointer hover:text-white">
                Drama
              </li>
              <li className="transition cursor-pointer hover:text-white">
                Comedy
              </li>
              <li className="transition cursor-pointer hover:text-white">
                Horror
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="mb-4 text-xl font-semibold">Subscribe</h3>
            <p className="mb-4 text-sm text-gray-400">
              Get updates about new movies and releases.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none"
            />

            <button className="w-full py-3 font-semibold text-white transition rounded-lg bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-80">
              Subscribe
            </button>
          </div>
        </div>

        
        <div className="pt-8 mt-10 text-sm text-center text-gray-500 border-t border-gray-800">
          © 2026 CineVault. All rights reserved.
        </div>
      </footer>
    </>
  );
}
