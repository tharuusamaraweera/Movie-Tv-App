import React from 'react'
import face from "./face.jpg";

export default function Contact() {
  return (
    <>
      <div className="justify-center p-20 m-20 mx-auto bg-gray-800 rounded-lg shadow-[5px_5px_5px_rgba(0,20,70,0.99)] w-350 flex">
        <div className="items-center w-3/5 pr-10 border-r border-gray-600">
          <h1 className="text-3xl font-bold text-center text-gray-300 drop-shadow-[2px_2px_0_black]">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto mt-5 mb-10 text-center text-gray-400">
            Have a question or feedback? We are here to help. Send us a message
            and our team will respond as soon as possible.
          </p>
          <img src={face} alt="Contact Us" className="mx-auto rounded-full w-60" />
          <div className="flex justify-center gap-6 mt-10">
            {/* Instagram */}
            <a
              href="#"
              className="p-3 transition bg-gray-800 rounded-full hover:bg-linear-to-r hover:from-pink-500 hover:to-yellow-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 
          0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm5 
          5a5 5 0 110 10 5 5 0 010-10zm6.5-.9a1.1 
          1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 
          9a3 3 0 100 6 3 3 0 000-6z"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="p-3 transition bg-gray-800 rounded-full hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 
          1.7-2.2-.8.5-1.7.8-2.6 1C18 4.4 17 
          4 16 4c-2 0-3.6 1.6-3.6 
          3.6 0 .3 0 .6.1.8-3-.2-5.7-1.6-7.5-3.8-.3.5-.5 
          1.1-.5 1.7 0 1.2.6 2.3 1.6 
          2.9-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 
          3.1 2.8 3.4-.3.1-.6.1-1 .1-.2 
          0-.5 0-.7-.1.5 1.4 1.8 2.4 3.4 
          2.4-1.2 1-2.8 1.6-4.5 
          1.6H2c1.6 1 3.5 1.6 5.6 1.6 6.7 
          0 10.4-5.6 10.4-10.4v-.5c.7-.5 
          1.4-1.2 2-2z"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="p-3 transition bg-gray-800 rounded-full hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 
          5 12 5 12 5h0s-4 0-6.9.1c-.4 
          0-1.3.1-2.1.9-.6.6-.8 
          2-.8 2S2 9.6 2 11.2v1.6C2 
          14.4 2.2 16 2.2 16s.2 1.4.8 
          2c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 
          6.6.2s4 0 6.9-.1c.4 
          0 1.3-.1 2.1-.9.6-.6.8-2 
          .8-2s.2-1.6.2-3.2v-1.6C22 
          9.6 21.8 8 21.8 8zM10 
          14.5v-5l5 2.5-5 2.5z"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="p-3 transition bg-gray-800 rounded-full hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3V12h2.3V9.8c0-2.3 
    1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 
    0-1.4.7-1.4 1.4V12h2.4l-.4 
    2.9h-2v7A10 10 0 0022 12z"
                />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-10 text-center text-gray-400 md:grid-cols-3">
            <p>Email: support@cinevault.com</p>
            <p>Phone: +94 71 234 5678</p>
            <p>Location: Colombo, Sri Lanka</p>
          </div>
        </div>
        <div className="p-10">
          <p className="mt-5 text-center text-gray-300">
            If you have any questions or feedback, feel free to reach out to us!
          </p>
          <form className="max-w-md mx-auto mt-8 space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="bg-gray-600 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-600 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                rows={4}
                className="bg-gray-600 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="mx-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
