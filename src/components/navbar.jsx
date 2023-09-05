
import logo from "../assets/logo.png";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className=" w-full bg-transparent md:fixed bg-blend-soft-light shadow-md top-0 z-40  font-Karla  bg-opacity-75 ">
        <div className=" md:justify-between mx-auto container md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block ">
              <a href="/">
                <img src={logo} alt="img" className="w-[15%]" />
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
                    <a href="/" onClick={() => setNavbar(!navbar)} className="md:hover:bg-none md:hover:text-neutral-50 text-white">
                     Home
                    </a>
                  </li>
                  <li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center     md:hover:underline  ">
                    <a
                      href="https://www.youtube.com/@BBcreators"
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                     Contact
                    </a>
                  </li>
                  <li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center  md:hover:text-white   md:hover:underline  ">
                    <a
                      href="https://www.youtube.com/@BBcreators"
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                    About
                    </a>
                  </li><li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center   border-purple-900  md:hover:underline  ">
                    <a
                      href="https://www.youtube.com/@BBcreators"
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                    Impact
                    </a>
                  </li><li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center     md:hover:underline  ">
                    <a
                      href="https://www.youtube.com/@BBcreators"
                      onClick={() => setNavbar(!navbar)}
                      className="md:hover:bg-none md:hover:text-neutral-50"
                    >
                    Solutions
                    </a>
                  </li>
                  <li className="md:text-red-600  text-xl text-white py-2 px-6 text-center        md:hover:bg-transparent">
                    {" "}
                    <a className="text-white md:text-red-600 bg-white rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer" href="/">
                     Get Started
                    </a>
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
