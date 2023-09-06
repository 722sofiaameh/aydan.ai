import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { useRef } from "react";
const Contact = () => {
    const contentRef = useRef(null);

    const scrollToContent = () => {
        // Scroll to the content element smoothly
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <>
      <Navbar />
      <div className="">
        <div className="">
          <div className=" ">
            <div className="h-[80vh] pt-28 bg-gradient-to-r from-red-500 to-red-900 text-white">
              <h1 className="text-center text-3xl">
                Ready to Amplify Your Business Growth?
              </h1>
              <p className="text-center text-lg pt-4">
                Contact Aydan.AI and start your journey towards streamlined
                operations and remarkable growth.<br></br> Let's redefine what's possible
                with AI.The Aydan Group team is composed of experienced <br></br>AI
                experts with a deep understanding of the needs of SMEs. The team
                is committed to providing innovative and affordable<br></br> AI
                automation solutions that help businesses grow.
              </p>
              <div className="flex pt-4 justify-center items-center">
                <button
                  className="text-white md:text-white bg-black rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer "
                  to="/solutions"
                  onClick={scrollToContent}
                >
                  Contact Us Today
                </button>
              </div>
            </div>
            <div className="mx-auto container " ref={contentRef}>
              <h1 className="uppercase text-center pt-8 text-2xl">Let's Get In Touch</h1>
              <p className="text-lg py-4 text-center">
                If you are a small or medium-sized business looking to grow your
                business with AI automation,<br></br> contact Aydan Group today to learn
                more about our services
              </p>
              <div className="flex gap-4 justify-center items-center pb-8 flex-col ">
                <div className="flex gap-10">
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                sx={{width:'300'}}
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                  />
                </div>{" "}
                <div className="flex gap-10">
                  <TextField
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                  />{" "}
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="
                bg-red-600 p-2 text-white rounded-md w-[100px] mb-8"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
