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
      <Navbar />
      <div className="">
        <div className="">

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
