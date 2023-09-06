import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
const About = () => {
    return (
    <>
    <Navbar/>
    <div className="z-0 relative ">
        <div className="z-0 relative bg-gradient-to-r from-red-500 to-red-900 pt-28 h-[90vh]">
            <div className="mx-auto container">
                <h1 className="text-center text-2xl text-white">Who We Are</h1>
                <p className="text-center text-lg pt-4 text-white">As a forward-thinking automation agency, Aydan Group is committed to
                transforming businesses across the globe.<br></br> We leverage advanced AI and automation
                technologies to streamline operations, optimize efficiency,<br></br> and empower businesses to
                reach new heights of success.</p>
                <div className="flex pt-12 justify-center items-center">
              <Link
                className="text-white md:text-red-600 bg-white rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer "
                to="/contact"
              >
               Learn More About Us
              </Link>
            </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    );
}
 
export default About;