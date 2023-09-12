import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
// import {makeStyles} from "@mui/styled-engine";

import { useRef } from "react";
const Contact = () => {
    const contentRef = useRef(null);

    const scrollToContent = () => {
        // Scroll to the content element smoothly
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    //   const useStyles = makeStyles((theme) => ({
    //     textField: {
    //       width: '80%', // Adjust the width as needed
    //     },
    //   }));
    //   const classes = useStyles();
  return (
    <>
      {/* <Navbar /> */}
      <div className="">
        <div className="">
        <div className="mx-auto container ">
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
                type="medium"
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
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
