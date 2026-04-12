import React from "react";
import "./Home.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import tape from "./images/tape.jpg";

export default function Home() {
  return (
    <>
      <div className="w-full p-0 mx-0">
        <div className="flex justify-between gap-5">
          <div className="relative justify-start overflow-hidden bg-gray-800 border-2 w-3/7 h-180 flex-box">
            <img
              src={img1}
              alt="movie-img"
              className="absolute w-full h-full slide"
            />
            <img
              src={img2}
              alt="movie-img"
              className="absolute w-full h-full slide"
            />
            <img
              src={img3}
              alt="movie-img"
              className="absolute w-full h-full slide"
            />
            <img
              src={img4}
              alt="movie-img"
              className="absolute w-full h-full slide"
            />

            <img 
              src={img5}
              alt="movie-img"
              className="absolute w-full h-full slide"
            />
          </div>

          <div className="justify-end p-10 mx-10 bg-transparent mt-30 w-4/7 h-120">
            <h1 className="mb-3 text-5xl font-bold text-center text-gray-400 header">
              Welcome to{" "}
              <span className="text-transparent text-border-3 bg-linear-to-r from-blue-800 to-purple-500 bg-clip-text text-7xl">
                CineVault
              </span>
            </h1>

            <div className="w-full h-8 m-5 mx-0 overflow-hidden">
              <div className="flex w-max animate-tape">
                {[...Array(16)].map((_, i) => (
                  <img
                    key={i}
                    src={tape}
                    className="w-auto h-8 opacity-25 shrink-0"
                  />
                ))}
              </div>
            </div>

            <p className="mb-10 text-2xl font-bold text-center text-yellow-500 opacity-80">
              Your world of movies and series starts here.
            </p>
            <p className="mt-5 text-lg text-justify text-gray-300">
              CineVault is a modern streaming platform where you can explore the
              latest movies and popular TV shows in one place. Discover trending
              titles, browse by genre, and find something to watch within
              seconds. Whether you enjoy action, drama, comedy, or sci-fi,
              CineVault brings together a wide collection for every mood. Save
              your favorites, track what you love, and enjoy a smooth, simple
              viewing experience designed for everyone.
            </p>
            <div className="flex justify-end gap-20 mt-30">
              <button className="px-10 py-6 text-3xl text-transparent transition duration-500 border border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600 hover:shadow-[0_6px_10px_rgba(59,130,246,0.8)]">
                Explore Now
              </button>
              <button className="px-18 py-6 text-3xl text-transparent transition duration-500 border border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600 hover:shadow-[0_6px_10px_rgba(59,130,246,0.8)]">
                My List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
