import { Link } from "react-router-dom";
import React from "react";
export default function Footer() {
  return(
  <>
    <div className="w-full bg-gradient-to-r p-6 from-red-600 to-red-950">
      <div className="flex justify-between items-center mx-auto">
        <div>
        <li className="md:text-white pb-6 text-md text-white py-2 px-6 text-center   md:border-b-0 md:hover:underline    md:hover:text-transparent">
                <Link
                  href="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-white"
                >@Aydan.AI
                </Link>
              </li>
        </div>
        <div>
          <ul className="h-50 md:h-auto md:text-white md:hover:text-white rounded-xl items-center justify-center bg-[#232A34] md:bg-transparent  md:items-center md:justify-center  bg-deepViolet md:flex">
            <div className="md:flex ">
              <li className="md:text-white pb-6 text-md text-white py-2 px-6 text-center   md:border-b-0 md:hover:underline    md:hover:text-transparent">
                <Link
                  href="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-white"
                >
                 Privacy Policy
                </Link>
              </li>
              <li className="md:text-white pb-6 text-md text-white py-2 px-6 text-center     md:hover:underline  ">
                <Link
                  href="https://www.youtube.com/@BBcreators"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50"
                >
                 Terms of Service
                </Link>
              </li>
              <li className="md:text-white pb-6 text-md text-white py-2 px-6 text-center  md:hover:text-white   md:hover:underline  ">
                <Link
                  href="https://www.youtube.com/@BBcreators"
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
    </div>
  </>
  )
}