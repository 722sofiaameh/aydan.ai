import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="z-0 relative">
        <div className="relative  h-[100vh] md:z-0 ">
          <div className=" ">
            <div className="h-[80vh] pt-28 bg-gradient-to-r from-red-500 to-red-900">
              <h1 className="text-center text-3xl">
                Ready to Amplify Your Business Growth?
              </h1>
              <p className="text-center text-lg">
                Contact Aydan.AI and start your journey towards streamlined
                operations and remarkable growth. Let's redefine what's possible
                with AI.The Aydan Group team is composed of experienced AI
                experts with a deep understanding of the needs of SMEs. The team
                is committed to providing innovative and affordable AI
                automation solutions that help businesses grow.
              </p>
              <div className="flex pt-2 justify-center items-center">
                <Link
                  className="text-white md:text-red-600 bg-black rounded-3xl whitespace-nowrap px-4 py-2 cursor-pointer "
                  to="/solutions"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
            <div>
              <h1 className="uppercase text-center py-12">
                Let's Get In Touch
              </h1>
              <form onSubmit={(e) => e.preventDefault} className="mx-auto container">
                    <label className="flex justify-center items-center">
                    
                      <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-gray-300 w-[50%] border border-none rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-none focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Full Name..."
                        type="text"
                        name="search"
                      />
                    </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
