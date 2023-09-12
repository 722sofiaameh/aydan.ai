import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export const Solution = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className=" pt-28 pb-12 text-white">
        <h1 className="text-center  font-Kotori text-amber-500 text-xl pt-4 uppercase">
          Our Cutting-Edge Solutions
        </h1>
        <div className="flex gap-4 font-Kotori justify-center items-center pt-8">
          <div className="bg-white border-2 border-gray-300 p-2 text-black rounded-md drop-shadow-lg shadow-lg w-[350px] h-[200px]">
            <h1 className="text-center font-Kotori text-xl pt-4 font-semibold">
              AI Consultation
            </h1>
            <p className="text-center text-md pt-4">
              Let our AI experts identify key automation opportunities within
              your business.
            </p>
          </div>
          <div className="bg-white  border-2 border-gray-300 p-2 text-black rounded-md drop-shadow-lg shadow-lg  w-[350px] h-[200px]">
            <h1 className="text-center text-xl pt-4 font-semibold">
              Custom AI Solutions
            </h1>
            <p className="text-center text-md pt-4">
              Bespoke AI systems tailored to your specific business needs and
              goals.
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center pt-12">
          <div className="bg-white  border-2 border-gray-300 p-2 drop-shadow-lg shadow-lg  text-black rounded-md w-[350px] h-[200px]">
            <h1 className="text-center text-xl pt-4 font-semibold">
              Seamless AI Implementation
            </h1>
            <p className="text-center text-md pt-4">
              Efficient integration of AI solutions into your existing
              operations.
            </p>
          </div>
          <div className="bg-white  border-2 border-gray-300 p-2 text-black rounded-md drop-shadow-lg shadow-lg  w-[350px] h-[200px]">
            <h1 className="text-center text-xl pt-4 font-semibold">
              Training & Support
            </h1>
            <p className="text-center text-md pt-4">
              Equip your team with the knowledge to leverage our AI solutions to
              their fullest potential
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
