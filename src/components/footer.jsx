import React from "react";
export default function Footer() {
  <>
    <div className="w-full bg-gradient-to-r p-10 from-red-500 to-red-900">
      <div className="flex justify-between items-center mx-auto">
        <div>
          <p>@Aydan.AI</p>
        </div>
        <div>
          <ul className="h-50 md:h-auto md:text-white md:hover:text-white rounded-xl items-center justify-center bg-[#232A34] md:bg-transparent  md:items-center md:justify-center  bg-deepViolet md:flex">
            <div className="md:flex ">
              <li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center   md:border-b-0 md:hover:underline    md:hover:text-transparent">
                <a
                  href="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-white"
                >
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
              </li>
              <li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center   border-purple-900  md:hover:underline  ">
                <a
                  href="https://www.youtube.com/@BBcreators"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50"
                >
                  Impact
                </a>
              </li>
              <li className="md:text-white pb-6 text-xl text-white py-2 px-6 text-center     md:hover:underline  ">
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
                <a
                  className="text-white md:text-red-600 bg-white rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer"
                  href="/"
                >
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
  </>;
}
