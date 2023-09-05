// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import Home from "./pages/home";
import {Solution} from "./pages/solutions";
import Contact from "./pages/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/solutions' element={<Solution />}/>
        <Route path='/contact' element={<Contact />}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
