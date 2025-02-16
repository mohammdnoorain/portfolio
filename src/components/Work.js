import React from "react";
import pro1 from '../assets/pro-1.png'
import pro2 from '../assets/pro-2.png'
import pro3 from '../assets/pro-3.png'
import pro4 from '../assets/pro-4.png'
const Work = () => {
  return (
    <>
      <div className="py-6 max-w-[1200px] mx-auto" id="work">
        <div className="mx-auto px-4 md:px-8">
          <div className="mb-4 flex items-center item-center justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl text-white">
                My <span> Development Projects </span>
              </h2>

              <p className="text-gray-500">
                these are my latest projects as a Developer for different clients.
              </p>
            </div>
          </div>



          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          
          <a href="https://sadar-biotech-project.vercel.app/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
          <img src={pro1} alt=""  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

        
          </a>
          <a href="https://afkglobalenterprises.com/" className="group h-48 overflow-hidden rounded-lg shadow-lg  md:col-span-2 md:h-80">
          <img src={pro2} alt=""  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

        
          </a>
          <a href="https://portfolio-theta-beryl-79.vercel.app/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
          <img src={pro3} alt=""  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

        
          </a>
          <a href="https://weather-app-react-2-i5c0.onrender.com/" className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
          <img src={pro4} alt=""  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>

        
          </a>


          </div>



        </div>
      </div>
    </>
  );
};

export default Work;
