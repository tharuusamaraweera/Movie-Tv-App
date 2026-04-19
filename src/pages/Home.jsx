import React, { useEffect, useState } from "react";
import "./Home.css";
import Contact from "../components/Contact";

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

import ts1 from "./images/ts1.jpg";
import ts2 from "./images/ts2.jpg";
import ts3 from "./images/ts3.jpg";
import ts4 from "./images/ts4.jpg";
import ts5 from "./images/ts5.jpg";

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
      }, 80);

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
    <h1 className="mt-6 text-lg text-center text-white sm:text-xl md:text-2xl lg:text-3xl opacity-60">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full px-3 pt-12 sm:px-5 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* LEFT IMAGE SLIDER */}
          <div className="w-full h-40 overflow-hidden bg-gray-800 border sm:h-52 md:h-72 lg:h-80 lg:w-1/2">
            {[img1, img2, img3, img4, img5].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="object-cover w-full h-full slide"
              />
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full p-3 lg:w-1/2 sm:p-4 lg:p-6">
            <h1 className="mb-2 text-xl font-bold text-center text-gray-300 sm:text-2xl md:text-3xl">
              Welcome to{" "}
              <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 sm:text-3xl md:text-4xl lg:text-5xl">
                CineVault
              </span>
            </h1>

            {/* TAPE */}
            <div className="w-full h-6 my-2 overflow-hidden">
              <div className="flex w-max animate-tape">
                {[...Array(12)].map((_, i) => (
                  <img key={i} src={tape} className="h-6 opacity-20 shrink-0" />
                ))}
              </div>
            </div>

            <p className="mb-1 text-sm font-semibold text-center text-yellow-400 sm:text-base">
              Your world of movies and series starts here.
            </p>

            <p className="text-xs leading-relaxed text-justify text-gray-300 sm:text-sm">
              Explore the latest movies and TV shows in one place. Discover
              trending titles and find something to watch quickly.
            </p>

            <Typewriter />

            {/* BUTTONS */}
            <div className="flex flex-col justify-center gap-2 mt-4 sm:flex-row lg:justify-end">
              <button className="px-4 py-2 text-sm text-blue-400 transition border border-blue-400 rounded-md sm:px-6 sm:text-base hover:bg-blue-600 hover:text-white">
                Explore
              </button>
              <button className="px-4 py-2 text-sm text-blue-400 transition border border-blue-400 rounded-md sm:px-6 sm:text-base hover:bg-blue-600 hover:text-white">
                Contact
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />
      </div>

      {/* MOVIES SECTION */}
      <Section
        title="Latest Movies"
        images={[movie1, movie2, movie3, movie4, movie5]}
      />

      <hr className="my-10 border-gray-600" />

      {/* TV SHOWS SECTION */}
      <Section title="Latest TV Shows" images={[ts1, ts2, ts3, ts4, ts5]} />

      <hr className="my-10 border-gray-600" />

      <Contact />

      <hr className="my-10 border-gray-600" />
    </>
  );
}

/* REUSABLE SECTION */
function Section({ title, images }) {
  return (
    <div className="px-4 sm:px-6 lg:px-10">
      <div className="p-4 bg-gray-900 shadow-lg sm:p-6 lg:p-10 rounded-2xl">
        <h2 className="text-2xl font-bold text-transparent sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-linear-to-r from-yellow-200 to-gray-100">
          {title}
        </h2>

        {/* SCROLL ROW */}
        <div className="flex gap-4 mt-6 overflow-x-auto sm:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="w-40 transition border border-blue-400 cursor-pointer shrink-0 sm:w-52 md:w-60 lg:w-72 hover:scale-105"
            >
              <img
                src={img}
                className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-80"
              />
              <p className="p-2 font-semibold text-center text-white">Title</p>
            </div>
          ))}
        </div>

        <a className="block px-6 py-3 mx-auto mt-6 text-lg text-blue-400 transition border border-blue-400 rounded-lg w-max sm:px-8 sm:text-xl hover:bg-blue-600 hover:text-white">
          View All
        </a>
      </div>
    </div>
  );
}
