import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import tape from "./images/tape.jpg";
import movie1 from "./images/movie1.jpg";
import movie2 from "./images/movie2.jpg";
import movie3 from "./images/movie3.jpg";
import movie4 from "./images/movie4.jpg";
import movie5 from "./images/movie5.jpg";

const texts = [
  "Discover stories that stay with you long after the screen fades.",
  "Watch movies and series that define every mood.",
  "A world of cinema, one click away.",
  "Your next favorite story is waiting to be played.",
  "Step into worlds built by imagination and emotion.",
];

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);
  
  return (
    <h1 className="mt-10 text-3xl text-center text-white opacity-40 displayText">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <div className="w-full p-0 mx-0 pt-22">
        <div className="flex justify-between gap-5 ">
          <div className="relative z-0 justify-start overflow-hidden bg-gray-800 border-2 w-3/7 h-180 flex-box">
            <img src={img1} alt="movie-img" className="w-full h-full slide" />
            <img src={img2} alt="movie-img" className="w-full h-full slide" />
            <img src={img3} alt="movie-img" className="w-full h-full slide" />
            <img src={img4} alt="movie-img" className="w-full h-full slide" />

            <img src={img5} alt="movie-img" className="w-full h-full slide" />
          </div>

          <div className="justify-end p-10 mx-10 mt-20 bg-transparent w-4/7 h-120">
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
                    className="w-auto h-8 opacity-15 shrink-0"
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
            <div className="w-full h-30">
              <Typewriter />
            </div>
            <div className="flex justify-end gap-10 mt-0">
              <button className="px-10 py-4 text-3xl text-transparent transition duration-500 border border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600 hover:shadow-[0_6px_10px_rgba(59,130,246,0.8)]">
                Explore Now
              </button>
              <button className="px-18 py-4 text-3xl text-transparent transition duration-500 border border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600 hover:shadow-[0_6px_10px_rgba(59,130,246,0.8)]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <hr className="my-10 mt-0 border-gray-600" />
      </div>

      <div className="w-full h-auto p-10 bg-transparent overflow-hiden rounded-2xl">
        <div className="p-10 mx-10 overflow-hidden bg-gray-900 shadow-[5px_5px_10px_rgba(0,30,70,0.99)] rounded-4xl">
          
          <h2 className="text-5xl font-bold text-transparent text-border-3 bg-clip-text bg-linear-to-r from-yellow-100 to-gray-100">
            Latest Movies
          </h2>

          <div className="gap-10 p-5 mt-5 movie-scroll">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10">
                <div className="h-auto transition duration-500 bg-transparent border-2 border-blue-400 cursor-pointer w-72 hover:scale-105">
                  <img src={movie1} className="w-full h-80" />
                  <p className="m-3 text-xl font-semibold text-center text-white">
                    His & Hers
                  </p>
                </div>

                <div className="h-auto transition duration-500 bg-transparent border-2 border-blue-400 cursor-pointer w-72 hover:scale-105">
                  <img src={movie2} className="w-full h-80" />
                  <p className="m-3 text-xl font-semibold text-center text-white">
                    One Piece
                  </p>
                </div>

                <div className="h-auto transition duration-500 bg-transparent border-2 border-blue-400 cursor-pointer w-72 hover:scale-105">
                  <img src={movie3} className="w-full h-80" />
                  <p className="m-3 text-xl font-semibold text-center text-white">
                    The Witcher
                  </p>
                </div>

                <div className="h-auto transition duration-500 bg-transparent border-2 border-blue-400 cursor-pointer w-72 hover:scale-105">
                  <img src={movie4} className="w-full h-80" />
                  <p className="m-3 text-xl font-semibold text-center text-white">
                    The Witches
                  </p>
                </div>

                <div className="h-auto transition duration-500 bg-transparent border-2 border-blue-400 cursor-pointer w-72 hover:scale-105">
                  <img src={movie5} className="w-full h-80" />
                  <p className="m-3 text-xl font-semibold text-center text-white">
                    Sand Help
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="block w-max px-10 py-4 mt-5 mx-auto text-3xl text-transparent transition duration-500 border border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600 hover:shadow-[0_6px_10px_rgba(59,130,246,0.8)]"
          >
            View All
          </a>
        </div>

        <hr className="my-10 mt-20 border-gray-600" />
      </div>

      <div className="w-full h-auto mt-0 bg-transparent">
        <h2 className="m-10 text-6xl font-bold text-transparent mt-30 bg-clip-text bg-linear-to-r from-blue-500 to-purple-400">
          Latest TV Series
        </h2>
        <div className="flex gap-20 p-5 mx-10 mt-10">
          <div className="bg-gray-400 w-100 h-80 card">
            <img src={img1} alt="TV Series 1" className="w-full h-70" />
            <p className="mt-3 font-semibold text-center txt-lg ">
              TV Series 1
            </p>
          </div>
          <div className="bg-gray-400 w-100 h-80 card">
            <img src={img1} alt="TV Series 1" className="w-full h-70" />
            <p className="mt-3 font-semibold text-center txt-lg ">
              TV Series 1
            </p>
          </div>
          <div className="bg-gray-400 w-100 h-80 card">
            <img src={img1} alt="TV Series 1" className="w-full h-70" />
            <p className="mt-3 font-semibold text-center txt-lg ">
              TV Series 1
            </p>
          </div>
          <div className="bg-gray-400 w-100 h-80 card">
            <img src={img1} alt="TV Series 1" className="w-full h-70" />
            <p className="mt-3 font-semibold text-center txt-lg ">
              TV Series 1
            </p>
          </div>
          <div className="bg-gray-400 w-100 h-80 card">
            <img src={img1} alt="TV Series 1" className="w-full h-70" />
            <p className="mt-3 font-semibold text-center txt-lg ">
              TV Series 1
            </p>
          </div>
        </div>
        <a
          href="#"
          className="block w-max px-10 py-4 mx-auto mt-10 text-3xl text-transparent transition duration-500 border border-blue-400 rounded-lg cursor-pointer bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:bg-blue-600 hover:text-blue-600 transmition hover:scale-105 hover:border-blue-600 hover:shadow-[0_6px_10px_rgba(59,130,246,0.8)]"
        >
          View All
        </a>
        <hr className="my-10 mt-10 border-gray-600" />
      </div>
    </>
  );
}
