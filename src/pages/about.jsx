import Footer from "../components/footer";
import Navbar from "../components/navbar";
const About = () => {
    return (
    <>
    <Navbar/>
    <div className="">
        <div className="bg-gradient-to-r from-red-500 to-red-900 pt-28 h-[70vh]">
            <div className="mx-auto container">
                <h1 className="text-center text-2xl text-white">Who We Are</h1>
                <p className="text-center text-lg pt-4 text-white">As a forward-thinking automation agency, Aydan Group is committed to
                transforming businesses across the globe. We leverage advanced AI and automation
                technologies to streamline operations, optimize efficiency, and empower businesses to
                reach new heights of success.</p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    );
}
 
export default About;