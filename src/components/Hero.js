import React from "react";
import profilepic from "../assets/portfolio1.jpeg";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div>
      <div
        className=" my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row
      justify-center align-center"
      >
        <div className=" flex-col my-auto mx-[10px]">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-100">
            Hii I am Mohammad Noorain
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                // "Full Stack Dev",
                // 1000,
                // "Backend Dev",
                // 1000,
               
                "Devops Engineer",
                2000,
                "", // Clear the text
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              {" "}
              with 1+ year experience
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
  <a 
    href="https://linkedin.com/in/mohammad-noorain" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center gap-2"
    title="Visit LinkedIn Profile"
  >
    <AiFillLinkedin />
    {/* linkedin.com/in/mohammad-noorain */}
  </a>
  <a 
    href="https://github.com/mohammdnoorain" 
    target="_blank" 
    rel="noopener noreferrer" 
    title="Visit GitHub Profile"
  >
    <AiFillGithub />
  </a>
  {/* <a 
    href="https://instagram.com/your-instagram-username" 
    target="_blank" 
    rel="noopener noreferrer" 
    title="Visit Instagram Profile"
  >
    <AiFillInstagram />
  </a> */}
</div>

          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 backdrop-opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-insert-1 group-hover:duration-200 animate-tilt"></div>
          </div>
          <a
           href="/DevOps-CV.pdf"
            title="Download CV"
            role="button"
            className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            download
          >
            Download CV
          </a>
        </div>
        {/* <div className="text-8xl">text</div> */}

        <div className="my-auto">
          <img
            className="w-[200px] sm:w-[500px] mx-auto h-auto rounded-full"
            src={profilepic}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
