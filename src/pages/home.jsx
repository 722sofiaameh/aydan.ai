import React from "react";
import { TypeAnimation } from "react-type-animation";
import what from "../assets/aiAgency.png";
import img from "../assets/photoAI.png";
export default function Home() {
  return (
    <div className="z-0 relative bg-gradient-to-r from-red-500">
      <div className="main w-[100%]  h-[80vh]  md:z-0 relative pt-28">
        <div className="mx-auto container pt-12">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Unleash Business Potential with AI Automation",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Unleash Business Potential with Intelligent Automation",
              1000,
              // "We produce food for Guinea Pigs",
              // 1000,
              // "We produce food for Chinchillas",
              // 1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block", color: "white" }}
            repeat={Infinity}
          />
          <p className="text-white w-1/2 text-lg pt-2">
            At Aydan Group, we harness the power of AI to revolutionize your
            business processes, drastically reduce workload, and fuel
            unprecedented growth."
          </p>
          <div className="flex pt-2">
            <a
              className="text-white md:text-red-600 bg-white rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer "
              href="/"
            >
              Discover Our Solutions
            </a>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-start py-24 mx-auto container">
        <div className="w-1/2 text-start">
          <h1 className="text-3xl  text-black">Who We Are!</h1>
          <p className="text-xl pt-2 pb-2">
            As a forward-thinking automation agency, Aydan Group is committed to
            transforming businesses across the globe. We leverage advanced AI
            and automation technologies to streamline operations, optimize
            efficiency, and empower businesses to reach new heights of success.
          </p>
          <div className="flex pt-2">
            <a
              className="text-white md:text-white bg-red-600 rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer "
              href="/"
            >
              Discover Our Solutions
            </a>
          </div>
        </div>
        <div>
          <img src={what} alt="img" className=" rounded-md w-1/2" />
        </div>
      </div>
      <div className="mx-auto container">
        <h1 className="text-center text-3xl text-black">Why Aydan Group?</h1>
        <div className="pt-12 grid grid-cols-2 grid-flow-col justify-center mx-auto container items-start">
        <div className="col-span-3 w-9/12">
            <img src={img} alt="img" className="rounded-md "/>
          </div>
          <div className="col-span-2 w-9/12">
            <div>
              <h1 className="font-medium text-lg">Expertise in AI</h1>
              <p>
                Our team comprises seasoned AI specialists, pioneering the
                future of automated business.
              </p>
            </div>
            <div>
              <h1 className="font-medium text-lg">Tailored Solutions</h1>
              <p>
                We provide custom AI solutions designed to address your unique
                business challenges.
              </p>
            </div>
            <div>
              <h1 className="font-medium text-lg">Global Impact</h1>
              <p>
                With our roots in the UAE, we have a broad global reach,
                transforming businesses around the world.
              </p>
            </div>
            <div>
              <h1 className="font-medium text-lg">Client Success</h1>
              <p>
                Our end-to-end AI solutions and steadfast support drive success
                for our clients."
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
