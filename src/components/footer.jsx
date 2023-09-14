import { Link } from "react-router-dom";
import React from "react";
export default function Footer() {
  return(
  <>
    <footer className="w-full bg-[#DEB038] p-6 font-Karla">
      <div className="md:flex grid md:justify-between justify-center md:items-center items-center mx-auto">
        <div>
       
                <Link
                  to="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-xl  text-center text-white"
                >@Aydan.AI
                </Link>
            
        </div>
        <div>
          <ul className="h-50 md:h-auto md:text-white md:hover:text-white rounded-xl items-center justify-center md:bg-transparent  md:items-center md:justify-center  bg-deepViolet md:flex">
            <div className="md:flex flex gap-4 py-4">
             
                <Link
                  to="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-white"
                >
                 Privacy Policy
                </Link>
             
             
                <Link
                  to="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-white"
                >
                 Terms of Service
                </Link>
             
             
                <Link
                  to="/"
                  onClick={() => setNavbar(!navbar)}
                  className="md:hover:bg-none md:hover:text-neutral-50 text-white"
                >
                 Cookie Setting
                </Link>
             
              
              
            </div>
            
          </ul>
        </div>
      </div>
    </footer>
  </>
  )
}
