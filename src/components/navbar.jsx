
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
    backgroundColor: scrolling ? 'gray' : 'transparent', // Change the background color based on the scrolling state
    transition: 'background-color 0.3s ease', // Add a smooth transition
    position: 'fixed',
    color: scrolling ? 'black' : 'white',
    opacity: scrolling ? '10%' : '',
    top: 0,
    margin:0,
    width: '100%',
    zIndex: 1000,
    color: scrolling ? 'black' : 'white'
  };

  return (
    <>
      <nav className="  w-full font-Kotori top-0 md:h-[100px] z-40  ">
        <div className=" md:justify-between mx-auto container md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block ">
              <a href="/">
                <img src={logo} alt="img" className="w-[20%] rounded-full  " />
                
              </a>
              <div className="md:hidden ">
                <button
                  className="p-2  rounded-md outline-none  "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <GrFormClose color="#232A34" />
                  ) : (
                    <GiHamburgerMenu color="white" />
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
              <ul className="h-[0] md:h-auto md:text-white md:hover:text-white rounded-xl items-center justify-center bg-black md:bg-transparent  md:items-center md:justify-center  bg-deepViolet md:flex">
                <div className="md:flex ">
                 
                 {/* <li className="md:text-white pb-6 text-md text-white py-2 px-6 text-center   border-purple-900  md:hover:underline  ">
                    <Link
                      to="/impact"
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                    Impact
                    </Link>
                  </li> */}
                  <li className="md:text-white pb-6 text-md text-white font-semibold py-2 px-6 text-center     md:hover:underline  ">
                    <a 
                      onClick={() => setNavbar(!navbar)
                      }
                      className="md:hover:bg-none font-Karla  md:hover:text-neutral-50"
                      href="#solution"
                    >
                   Our Services.
                    </a>
                  
                  </li>
                  <li className=" md:mt-0 mt-12 text-sm text-white py-2 px-6 text-center md:hover:bg-transparent">
                    {" "}
                    <Link className="text-[#DEB038] bg-white rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer" to="https://bbcreators.beehiiv.com/p/change-build-africas-next-unicorn-ai">
                    Join Our NewsLetter
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
