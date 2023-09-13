import Footer from "../components/footer";
import Navbar from "../components/navbar";
import img from "../assets/AI.jpeg"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="z-0 relative ">
        <div className="z-0 relative md:pt-[100px] pt-[80px]">
          <div className="mx-auto container">
                <h1 className="text-center md:pb-12 font-Karla md:text-4xl text-3xl text-[#DEB038]">
                  Who We Are
                </h1>
            <div className="md:flex grid md:justify-center  md:items-start justify-center items-center">
              <div>
                <p className="md:text-start text-center  md:w-9/12  text-lg font-Karla md:pt-2 pt-2 p-2 md:p-0 text-black">
                  At Aydan Group, we harness the power of AI to revolutionize your
                  business processes, drastically reduce workload, and fuel
                  unprecedented growth .As a forward-thinking automation agency,
                  Aydan Group is committed to transforming businesses across the
                  globe. We leverage advanced AI and automation
                  technologies to streamline operations, optimize efficiency,
                   and empower businesses to reach new heights of success.
                </p>
                <div className="flex justify-start items-start pt-4">
                  <Link
                    className="text-white md:bg-[#DEB038] rounded-md whitespace-nowrap px-4 py-2 cursor-pointer font-Karla  "
                    to=""
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
              <img src={img} alt="img" className="w-[450px] rounded-md drop-shadow-xl"/>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default About;
