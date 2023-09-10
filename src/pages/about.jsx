import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="z-0 relative ">
        <div className="z-0 relative md:pt-[360px] pt-[480px]">
          <div className="mx-auto container">
            <h1 className="text-center font-Karla text-3xl text-black">
              Who We Are
            </h1>
            <p className="text-center text-lg font-Karla pt-2 text-black">
              At Aydan Group, we harness the power of AI to revolutionize your
              business processes, drastically reduce workload, and fuel
              unprecedented growth.<br></br>As a forward-thinking automation agency,
              Aydan Group is committed to transforming businesses across the
              globe.<br></br> We leverage advanced AI and automation
              technologies to streamline operations, optimize efficiency,
              <br></br> and empower businesses to reach new heights of success.
            </p>
            <div className="flex pt-4 justify-center items-center">
              <Link
                className="text-white md:bg-amber-600 rounded-md whitespace-nowrap px-4 py-2 cursor-pointer font-Karla  "
                to="/contact"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default About;
