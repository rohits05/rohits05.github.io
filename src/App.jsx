import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { logo } from "./assets";

// import { logo, menu, close } from "../assets";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1400);

  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Navbar and Hero are rendered inside the main container */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}

        {/* Contact and StarsCanvas are rendered outside the main container */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent content-center voilet-gradient overflow-hidden ">
      <img
        className="animate-ping"
        src={logo}
        height={300}
        width={300}
        alt="Loading..."
      />
    </div>
  );
}

export default App;
