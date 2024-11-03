import React from "react";
import aboutImg from "..//assets/about4.jpeg";
const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover rounded-xl h=[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-grey-300 my-3">
              <h1 className="text-4xl font-semibold mb-5">
                About <span className="primary-text">Me</span>
              </h1>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non dolor lectus. Sed ut arcu nec lectus luctus aliquam. Nulla
                facilisi. Ut non nisl risus. lorem30
              </p>
            </div>
          </div>
           
           <div className="flex mt-10 items-center gap-7">

            <div className="bg-[#333333]/40 p-5 rounded-lg">
            
            <h3 className="md:text-4xl text-2xl font-semibold text-white ">11<span className="primary-text">+</span>{" "}</h3>
            <p><span className="md:text-base text-xs">Projects</span></p>
            
            
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
            
            <h3 className="md:text-4xl text-2xl font-semibold text-white ">1.5<span className="primary-text">+</span>{" "}</h3>
            <p><span className="md:text-base text-xs">Years Experience</span></p>
            
            
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
            
            <h3 className="md:text-4xl text-2xl font-semibold text-white ">12<span className="primary-text">+</span>{" "}</h3>
            <p><span className="md:text-base text-xs">Happy Clients</span></p>
            
            
            </div>
              


           </div>





        </div>
      </div>
    </div>
  );
};

export default About;
