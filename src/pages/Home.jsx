import React from "react";
import "./Home.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

export default function Home() {
  return (
    <>
      <div className="w-full p-0 mx-0">
        <div className="flex justify-between gap-10 p-2">
          <div className="relative justify-start w-full overflow-hidden bg-gray-800 rounded h-175 flex-box">
            <img
              src={img1}
              alt="movie-img"
              className="absolute w-full h-full "
            />
            <img
              src={img2}
              alt="movie-img"
              className="absolute w-full h-full"
            />
            <img
              src={img3}
              alt="movie-img"
              className="absolute w-full h-full"
            />
            <img
              src={img4}
              alt="movie-img"
              className="absolute w-full h-full"
            />
          </div>

          <div className="justify-end w-full mx-10 bg-transparent h-120">
            <h1 className="mt-40 mb-3 text-5xl font-bold text-center text-gray-400">
              Welcome to{" "}
              <span className="text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text">
                CineVault...
              </span>
            </h1>

            <div className="w-full h-8 bg-gray-600">
              
            </div>

            <p className="mb-10 text-2xl font-bold text-center text-yellow-500">
              Your world of movies and series starts here.
            </p>
            <p className="mt-5 text-lg text-justify text-white">
              CineVault is a modern streaming platform where you can explore the
              latest movies and popular TV shows in one place. Discover trending
              titles, browse by genre, and find something to watch within
              seconds. Whether you enjoy action, drama, comedy, or sci-fi,
              CineVault brings together a wide collection for every mood. Save
              your favorites, track what you love, and enjoy a smooth, simple
              viewing experience designed for everyone.
            </p>
            <div className="flex justify-center gap-10 mt-20">
              <button className="px-6 py-8 text-3xl text-transparent transition duration-500 border-2 border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600 hover:shadow-[0_8px_20px_rgb(10,20,50.9)">
                Explore Now
              </button>
              <button className="px-6 py-8 text-3xl text-transparent transition duration-500 border-2 border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600 hover:shadow-[0_8px_20px_rgb(10,20,50.9)">
                Explore Now
              </button>
              <button className="px-6 py-8 text-3xl text-transparent transition duration-500 border-2 border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
