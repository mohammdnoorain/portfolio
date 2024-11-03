import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id="contact">
      <div className="max-w-[1200px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl text-white">
              contact <span>Me</span>
            </h1>
            <p className="text-normal text-lg text-gray-400 mt-2">
              let's connect on linkedin <br /> or send me an Email
            </p>
            <div className="flex items-center mt-2 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 817.89.5.26"
                ></path>
              </svg>
              <div className="ml-4 text-md tracking-wide w-40 ">
                <p className="">Mohammad Noorain</p>
              </div>
            </div>
          </div>

<form action="" method="post" className="p-6 flex flex-col justify-center max-w-[700px]">
    <div className="flex flex-col">
        <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white "/>

    </div>

    <div className="flex flex-col mt-2">
        <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border border-gray-700 text-white" />
        
    </div>
    <div className="flex flex-col mt-2">
        <textarea name="email" id="email" placeholder="Message" className="w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border border-gray-700 text-white"/>
        
    </div>
    <button type="submit" className="md:w-fit bg-primary-color text-white py-3 px-6 rounded-lg mt-3">Submit</button>

</form>


        </div>
      </div>
    </div>
  );
};

export default Contact;
