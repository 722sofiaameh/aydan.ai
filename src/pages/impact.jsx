import vid from "../assets/bg-vid.mp4";
import About from "./about";
import { Solution } from "./solutions";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { TextField } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { Link } from "react-router-dom";


const Impact = () => {
  const contentRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToContent = () => {
    // Scroll to the content element smoothly
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    // Scroll to the content element smoothly
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
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
          <div className="mx-auto container">
            <h1 className="text-5xl w-1/2 text-white font-Karla">
              Aydan.Ai -{" "}
            </h1>
            <p className="text-white pt-4 text-md font-Karla">
              Powering Growth Through Intelligent
              <span className="text-amber-300"> Automation</span>
            </p>
            <div className="flex gap-3">
              <div className="flex pt-2 font-Karla">
                <Link
                  className="text-white md:text-black bg-amber-300 rounded-md whitespace-nowrap px-2 py-1 cursor-pointer "
                  onClick={scrollToContact}
                >
                  Get In Touch
                </Link>
              </div>{" "}
              <div className="flex pt-2 font-Karla">
                <Link
                  className="text-amber-300 md:text-amber-700 bg-white rounded-md whitespace-nowrap px-2 py-1 cursor-pointer "
                  onClick={scrollToContent}
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <div className="bg-black mt-16">
        <div className=" flex justify-between items-center py-24 mx-auto container">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Utilize Aydan's AI Comprehensive AI Development Expertise to maximize your business Potential",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Utilize Aydan's AI Comprehensive AI Development Expertise to maximize your business Potential",
              1000,
              "Utilize Aydan's AI Comprehensive AI Development Expertise to maximize your business Potential",
              1000,
              // "We produce food for Chinchillas",
              // 1000,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: "2.5em",
              fontFamily: "Karla",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              // width:'50%'
            }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className=" pt-12 pb-12 text-white" ref={contentRef}>
        <h1 className="text-center  font-Kotori text-amber-500 text-xl pt-4 uppercase">
          Our Cutting-Edge Solutions
        </h1>
        <div className="md:flex gap-4 mx-auto container grid font-Kotori justify-center items-center md:pt-8 pt-8">
          <div className="bg-white border-2 border-gray-300 md:p-2 p-2 text-black rounded-md drop-shadow-lg shadow-lg w-[350px] h-[200px]">
            <h1 className="text-center font-Kotori text-xl pt-4 font-semibold">
              AI Consultation
            </h1>
            <p className="text-center text-md pt-4">
              Let our AI experts identify key automation opportunities within
              your business.
            </p>
          </div>
          <div className="bg-white mt-4 md:mt-0 border-2 border-gray-300 p-2 text-black rounded-md drop-shadow-lg shadow-lg  w-[350px] h-[200px]">
            <h1 className="text-center text-xl pt-4 font-semibold">
              Custom AI Solutions
            </h1>
            <p className="text-center text-md pt-4">
              Bespoke AI systems tailored to your specific business needs and
              goals.
            </p>
          </div>
        </div>
        <div className="md:flex grid gap-4 justify-center items-center md:pt-12 pt-8">
          <div className="bg-white  border-2 border-gray-300 p-2 drop-shadow-lg shadow-lg  text-black rounded-md w-[350px] h-[200px]">
            <h1 className="text-center text-xl pt-4 font-semibold">
              Seamless AI Implementation
            </h1>
            <p className="text-center text-md pt-4">
              Efficient integration of AI solutions into your existing
              operations.
            </p>
          </div>
          <div className="bg-white  border-2 mt-8 md:mt-0 border-gray-300 p-2 text-black rounded-md drop-shadow-lg shadow-lg  w-[350px] h-[200px]">
            <h1 className="text-center text-xl pt-4 font-semibold">
              Training & Support
            </h1>
            <p className="text-center text-md pt-4">
              Equip your team with the knowledge to leverage our AI solutions to
              their fullest potential
            </p>
          </div>
        </div>
      </div>{" "}
      <div className=" ">
        <div className="h-[80vh] font-Karla pt-28 bg-black text-white">
          <h1 className="text-center text-3xl">
            Ready to Amplify Your Business Growth?
          </h1>
          <p className="text-center text-lg pt-4">
            Contact Aydan.AI and start your journey towards streamlined
            operations and remarkable growth.<br></br> Let's redefine what's
            possible with AI.The Aydan Group team is composed of experienced{" "}
            <br></br>AI experts with a deep understanding of the needs of SMEs.
            The team is committed to providing innovative and affordable
            <br></br> AI automation solutions that help businesses grow.
          </p>
          <div className="flex pt-4 md:pb-0 pb-4 justify-center items-center">
            <button
              className="text-amber-600 bg-white  rounded-lg whitespace-nowrap px-4 py-2 cursor-pointer "
              to="/solutions"
              onClick={scrollToContact}
            >
              Contact Us Today
            </button>
          </div>
        </div>
        <div className="mx-auto container " ref={contactRef}>
          <h1 className="uppercase font-Kotori font-light text-amber-600 text-center pt-8 md:text-2xl text-xl">
            Let's Get In Touch
          </h1>
          <p className="md:text-lg text-base font-Karla py-2 text-center">
            If you are a small or medium-sized business looking to grow your
            business with AI automation,<br></br> contact Aydan Group today to
            learn more about our services
          </p>
          <div className="md:flex grid pt-8 gap-4 justify-center items-center pb-8 flex-col ">
            <div className="md:flex grid justify-center items-center gap-10">
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                // className={classes.textField}
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
              />
            </div>{" "}
            <div className="md:flex grid md:pt-0 pt-2 gap-10">
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
              />{" "}
              <TextField id="standard-basic" label="Email" variant="standard" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="
                bg-amber-600 p-1 text-white rounded-md w-[100px] mb-8 font-Karla"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Impact;
