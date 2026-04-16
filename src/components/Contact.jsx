import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="justify-center p-20 m-20 mx-auto bg-gray-800 rounded-lg shadow-[5px_5px_5px_rgba(0,20,70,0.99)] w-150">
        <h1 className="text-3xl font-bold text-center text-gray-300 drop-shadow-[2px_2px_0_black]">
          Contact Us
        </h1>
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
    </>
  );
}
