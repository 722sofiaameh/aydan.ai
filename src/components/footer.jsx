import { Link } from "react-router-dom";
import React from "react";
export default function Footer() {
  return(
  <>
    <footer className="w-full bg-black p-6 font-Karla">
      <div className="flex justify-between items-center mx-auto">
        <div>
    
                <Link
                  to="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-white"
                >@Aydan.AI
                </Link>
             
        </div>
        <div>
          <ul className="h-50 md:h-auto md:text-white md:hover:text-white rounded-xl items-center justify-center bg-[#232A34] md:bg-transparent  md:items-center md:justify-center  bg-deepViolet md:flex">
            <div className="md:flex ">
              <li className="md:text-white pb-6 text-md text-white py-2 px-6 text-center   md:border-b-0 md:hover:underline    md:hover:text-transparent">
                <Link
                  to="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-white"
                >
                 Privacy Policy
                </Link>
              </li>
              <li className="md:text-white pb-6 text-md text-white py-2 px-6 text-center     md:hover:underline  ">
                <Link
                  to="https://www.youtube.com/@BBcreators"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50"
                >
                 Terms of Service
                </Link>
              </li>
              <li className="md:text-white pb-6 text-md text-white py-2 px-6 text-center  md:hover:text-white   md:hover:underline  ">
                <Link
                  to="https://www.youtube.com/@BBcreators"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50"
                >
                 Cookie Setting
                </Link>
              </li>
              
              
            </div>
            <li></li>
            <div></div>
          </ul>
        </div>
      </div>
    </footer>
  </>
  )
}
