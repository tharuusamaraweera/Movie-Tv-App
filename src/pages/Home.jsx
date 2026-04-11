import React from 'react'
import './Home.css'
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';

export default function Home() {
  return (
    <>

    <div className='container'>
        <h1 className='mt-20 text-6xl font-bold text-center text-white ml-50'>Welcome to <span className='text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text'>CineVault...</span></h1>
    </div>

    <div className='container flex justify-between gap-10 mt-20'>
        <div className='relative justify-start w-3/5 p-5 ml-10 overflow-hidden bg-gray-800 rounded-lg flex-box h-120'>
           <img src={img1} alt="movie-img" className='absolute w-full h-full animate-float1' />
           <img src={img2} alt="movie-img" className='absolute w-full h-full animate-float2' />
           <img src={img3} alt="movie-img" className='absolute w-full h-full animate-float3' />
           <img src={img4} alt="movie-img" className='absolute w-full h-full animate-float4' />
        </div>
        
        <div className='justify-end w-2/5 p-5 bg-transparent h-120'>
             <p className='justify-start text-4xl text-yellow-300'>Watch new releses Movies and TV series in one place...</p>
        </div>
    </div>

    </>
  )

}
