import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
       
      <div
        className={`absolute inset-0 top-[112px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 "> 
          <div className="w-5 h-1 rounded-full bg-[#a215fa]" />
          <div className="w-1 sm:h-55 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Rohit</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-1 text-gray-300 tracking-wider`}
          >
            A passionate learner!&nbsp;
            <br className="sm:block hidden" />
            Eruditing new technologies,&nbsp;
            <br className="sm:block hidden" />
            algorithms to solve real world problems.
          </p>
          
        </div>
      </div> 

      {/* 3-D Computer Graphics */}
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
