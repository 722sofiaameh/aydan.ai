import vid from "../assets/bg-vid.mp4";
import React from 'react';
import Navbar from "../components/navbar";
import {Link} from 'react-router-dom'
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
      <div className="relative z-10 pt-52">
        {/* Content on top of the video background */}
        <div className='mx-auto container'>
        <h1 className="text-5xl w-1/2 text-white font-Karla">
              Aydan.Ai - </h1><p className='text-white pt-4 text-md font-Karla'>Powering Growth Through Intelligent<span className='text-amber-300'> Automation</span></p>
              <div className='flex gap-3'>
                  <div className="flex pt-2 font-Karla">
                  <Link
                    className="text-white md:text-black bg-amber-300 rounded-md whitespace-nowrap px-2 py-1 cursor-pointer "
                    href="/"
                  >
                   Get In Touch
                  </Link>
                              </div>  <div className="flex pt-2 font-Karla">
                  <Link
                    className="text-white md:text-black bg-white rounded-md whitespace-nowrap px-2 py-1 cursor-pointer "
                    href="/"
                  >
                  Our Services
                  </Link>
                              </div>
              </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Impact;