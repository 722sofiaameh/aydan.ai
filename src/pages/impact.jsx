import vid from "../assets/aydanAI.mp4";
import About from "./about";
import { Solution } from "./solutions";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { TextField } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { Link } from "react-router-dom";
import abtimg from "../assets/AI.jpeg";
import abtimg2 from "../assets/AI2.jpeg";
import abtimg3 from "../assets/AI3.jpeg";
import abtimg4 from "../assets/automation.jpeg";
import Contact from "./contact";
// import { makeStyles } from '@mui/system/';

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

  // const useStyles = makeStyles({
  //   textField: {
  //     width: '300px', // Adjust the width as needed
  //   },
  // });
  return (
    <div>
      <div className="relative ">
        <video
          autoPlay
          loop
          muted
          className="w-[100vw] h-[100vh] relative inset-0 object-cover "
        >
          <source src={vid} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="absolute top-0 w-full z-10 ">
          <Navbar />
          {/* Content on top of the video background */}
          <div className="mx-auto container md:mt-64">
            <h1 className="inset-0 md:text-7xl text-3xl font-bold  mt-24 text-white text-center  md:text-white font-Karla ">
              Aydan.AI Powering Growth Through Intelligent{" "}
              <span className="text-[#DEB038]">Automation</span>
            </h1>
            <p className="text-white pt-4 text-6xl text-center font-Karla">
              <span className="text-amber-300"> </span>
            </p>
            <div className="flex gap-3 justify-center items-center">
              <div className="flex pt-2 font-Karla">
                <Link
                  className="text-white md:text-white bg-[#DEB038] rounded-md whitespace-nowrap px-10 py-2 cursor-pointer "
                  onClick={scrollToContact}
                >
                  Get In Touch
                </Link>
              </div>{" "}
              <div className="flex pt-2 font-Karla">
                <Link
                  className="text-[#DEB038] md:text-[#DEB038] bg-white rounded-md whitespace-nowrap px-10 py-2 cursor-pointer "
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
      <div className="bg-[#DEB038] mt-16">
        <div className=" flex justify-between items-center py-24 mx-auto container">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Utilize Aydan's AI Comprehensive AI Development Expertise to maximize your business Potential",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Utilize Aydan's AI Comprehensive AI Development Expertise to maximize your business Abilities",
              1000,
              "Utilize Aydan's AI Comprehensive AI Development Expertise to maximize your business Possibility",
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
      {/* <Solution/> */}
      <div className=" pt-12 pb-12 text-white" ref={contentRef} id="solution">
        <h1 className="text-center  font-Kotori text-[#DEB038] text-xl pt-4 uppercase">
          Our Cutting-Edge Solutions
        </h1>
        <div className="md:flex gap-4 mx-auto container grid font-Kotori justify-center items-center md:pt-8 pt-8">
          <div className="bg-white border-2 border-gray-300 md:p-2 p-2 text-black rounded-md drop-shadow-lg shadow-lg w-[250px] h-[350px]">
            <img
              src={abtimg4}
              alt="img"
              className="w-[200px] mx-auto container rounded-md"
            />
            <h1 className="text-center font-Kotori text-xl pt-4 font-semibold">
              AI Consultation
            </h1>
            <p className="text-center text-md pt-2 ">
              Let our AI experts identify key automation opportunities within
              your business.
            </p>
          </div>
          <div className="bg-white mt-4 md:mt-0 border-2 border-gray-300 p-2 text-black rounded-md drop-shadow-lg shadow-lg w-[250px] h-[350px]">
            <img
              src={abtimg}
              alt="img"
              className="w-[200px] mx-auto container rounded-md"
            />
            <h1 className="text-center text-xl pt-4 font-semibold">
              Custom AI Solutions
            </h1>
            <p className="text-center text-md pt-2">
              Bespoke AI systems tailored to your specific business needs and
              goals.
            </p>
          </div>
          <div className="bg-white  border-2 border-gray-300 p-2 drop-shadow-lg shadow-lg  text-black rounded-md w-[250px] h-[350px]">
            <img
              src={abtimg2}
              alt="img"
              className="w-[200px] mx-auto container rounded-md"
            />
            <h1 className="text-center text-xl pt-4 font-semibold">
              Seamless AI Implementation
            </h1>
            <p className="text-center text-md pt-2">
              Efficient integration of AI solutions into your existing
              operations.
            </p>
          </div>
          <div className="bg-white  border-2 mt-8 md:mt-0 border-gray-300 p-2 text-black rounded-md drop-shadow-lg shadow-lg  w-[250px] h-[350px]">
            <img
              src={abtimg3}
              alt="img"
              className="w-[200px] mx-auto container rounded-md"
            />
            <h1 className="text-center text-xl pt-4 font-semibold">
              Training & Support
            </h1>
            <p className="text-center text-md pt-2">
              Equip your team with the knowledge to leverage our AI solutions to
              their fullest potential
            </p>
          </div>
        </div>
        <div className="md:flex grid gap-4 justify-center items-center md:pt-12 pt-8">
          {/* <div className="bg-white  border-2 border-gray-300 p-2 drop-shadow-lg shadow-lg  text-black rounded-md w-[250px] h-[350px]">
          <img src={abtimg} alt="img"  className="w-[200px] mx-auto container rounded-md"/>
            <h1 className="text-center text-xl pt-4 font-semibold">
              Seamless AI Implementation
            </h1>
            <p className="text-center text-md pt-2">
              Efficient integration of AI solutions into your existing
              operations.
            </p>
          </div> */}
          {/* <div className="bg-white  border-2 mt-8 md:mt-0 border-gray-300 p-2 text-black rounded-md drop-shadow-lg shadow-lg  w-[250px] h-[350px]">
          <img src={abtimg} alt="img"  className="w-[200px] mx-auto container rounded-md"/>
            <h1 className="text-center text-xl pt-4 font-semibold">
              Training & Support
            </h1>
            <p className="text-center text-md pt-2">
              Equip your team with the knowledge to leverage our AI solutions to
              their fullest potential
            </p>
          </div> */}
        </div>
      </div>
      <div className=" ">
        <div className="h-[60vh] font-Karla pt-24 bg-[#DEB038] text-white">
          <div>
            <h1 className="text-center text-3xl">
              Ready to Amplify Your Business Growth?
            </h1>
            <p className="text-center text-lg pt-4">
              Contact Aydan.AI and start your journey towards streamlined
              operations and remarkable growth.<br></br> Let's redefine what's
              possible with AI.The Aydan Group team is composed of experienced{" "}
              <br></br>AI experts with a deep understanding of the needs of
              SMEs. The team is committed to providing innovative and affordable
              <br></br> AI automation solutions that help businesses grow.
            </p>
            <div className="flex pt-4 md:pb-0 pb-4 justify-center items-center">
              <button
                className="text-[#DEB038] bg-white  rounded-lg whitespace-nowrap px-4 py-2 cursor-pointer "
                to="/solutions"
                onClick={scrollToContact}
              >
                Contact Us Today
              </button>
            </div>
          </div>
          {/* <img src={} alt="" /> */}
        </div>
        <div className="mx-auto container " ref={contactRef}>
          <h1 className="uppercase font-Kotori font-light text-[#DBA514] text-center pt-8 md:text-2xl text-xl">
            Let's Get In Touch
          </h1>
          <p className="md:text-lg text-base font-Karla py-2 text-center">
            If you are a small or medium-sized business looking to grow your
            business with AI automation,<br></br> contact Aydan Group today to
            learn more about our services
          </p>
          <div className="md:flex grid pt-8 gap-4 justify-center items-center pb-8 flex-col ">
            <div className="md:flex grid justify-center items-center gap-20">
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                fullWidth="true"
                // className={classes.textField}
               
              />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                fullWidth="true"
              />
            </div>{" "}
            <div className="md:flex grid md:pt-0 pt-2 gap-20">
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                fullWidth="true"
              
              />{" "}
              <TextField id="standard-basic" label="Email" variant="standard" fullWidth='true'/>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="
                bg-[#DEB038] p-1 text-white rounded-md w-[100px] mb-8 font-Karla"
            >
              Send
            </button>
          </div>
        </div>
        {/* <Contact/> */}
      </div>
      <Footer />
    </div>
  );
};

export default Impact;
