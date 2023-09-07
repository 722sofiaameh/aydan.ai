import vid from "../assets/bg-vid.mp4";
import React from 'react';
import Navbar from "../components/navbar";

const Impact = () => {
  return (
    <>
    <Navbar/>
    <div className="relative ">
      <video
        autoPlay
        loop
        muted
        className="w-[100vw] h-[95vh] absolute inset-0 object-cover"
      >
        <source src={vid} type="video/mp4" />
      
      </video>
      <div className="relative z-10 pt-32">
        {/* Content on top of the video background */}
        <div className='mx-auto container'>
            <h1 className="text-4xl font-bold text-white">Welcome to My Website</h1>
            <p className="text-lg text-white mt-4">This is a video background example.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Impact;