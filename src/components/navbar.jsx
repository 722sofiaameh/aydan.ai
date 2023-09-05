
import logo from "../assets/logoo.png";
import {useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position to determine if the navbar should change color
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const navbarStyle = {
    backgroundColor: scrolling ? 'grey' : 'transparent', // Change the background color based on the scrolling state
    transition: 'background-color 0.3s ease', // Add a smooth transition
    position: 'fixed',
    opacity: scrolling ? '30%' : '',
    top: 0,
    width: '100%',
    zIndex: 1000,
  };

  return (
    <>
      <nav style={navbarStyle} className=" w-full bg-transparent md:bg-transparent fixed md:fixed bg-blend-soft-light shadow-md top-0 z-40  font-Karla ">
        <div className=" md:justify-between mx-auto container md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block ">
              <a href="/">
                <img src={logo} alt="img" className="w-[10%] rounded-3xl  bg-red-800" />
                
              </a>
              <div className="md:hidden ">
                <button
                  className="p-2  rounded-md outline-none  "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <GrFormClose color="#232A34" />
                  ) : (
                    <GiHamburgerMenu color="#232A34" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-50 md:h-auto md:text-white md:hover:text-white rounded-xl items-center justify-center bg-[#232A34] md:bg-transparent  md:items-center md:justify-center  bg-deepViolet md:flex">
                <div className="md:flex ">
                  <li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center   md:border-b-0 md:hover:underline    md:hover:text-transparent">
                    <Link to="/" onClick={() => setNavbar(!navbar)} className="md:hover:bg-none md:hover:text-neutral-50 text-white">
                     Home
                    </Link>
                  </li>
                  <li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center     md:hover:underline  ">
                    <Link
                     to="/contact"
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                     Contact
                    </Link>
                  </li>
                  <li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center  md:hover:text-white   md:hover:underline  ">
                    <Link
                     to="/about"
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                    About
                    </Link>
                  </li><li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center   border-purple-900  md:hover:underline  ">
                    <Link
                      to="https://www.youtube.com/@BBcreators"
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                    Impact
                    </Link>
                  </li><li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center     md:hover:underline  ">
                    <Link to='/solutions'
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                    Solutions
                    </Link>
                    {/* <a
                      href
                    </a> */}
                  </li>
                  <li className="md:text-red-600  text-xl text-white py-2 px-6 text-center        md:hover:bg-transparent">
                    {" "}
                    <Link className="text-white md:text-red-600 bg-white rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer" to="/">
                     Get Started
                    </Link>
                  </li>
                </div>
                <li></li>
                <div></div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
