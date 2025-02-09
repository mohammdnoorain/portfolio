import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6v8qvub", // Your Service ID
        "template_ezi76nf", // Your Template ID
        form.current,
        "SftXTRJ8K1da2gx5v" // Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form fields
  };

  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl text-white">
              contact <span>Me</span>
            </h1>
            <p className="text-normal text-lg text-gray-400 mt-2">
              let's connect on LinkedIn <br /> or send me an Email
            </p>
            <div className="flex items-center mt-2 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 817.89.5.26"
                ></path>
              </svg>
              <div className="ml-4 text-md tracking-wide w-40">
                <p>Mohammad Noorain</p>
                
            
              </div>
            </div>


            <div className="flex items-center mt-2 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 817.89.5.26"
                ></path>
              </svg>
              <div className="ml-4 text-md tracking-wide w-40">
           
                
                <p>noorain.mohammad908@gmail.com</p>
              
              </div>
            </div>

            <div className="flex items-center mt-2 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 817.89.5.26"
                ></path>
              </svg>
              <div className="ml-4 text-md tracking-wide w-40">
           
                
                <p>+917488348597</p>
              
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-6 flex flex-col justify-center max-w-[700px]"
          >
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col mt-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col mt-2">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="md:w-fit bg-primary-color text-white py-3 px-6 rounded-lg mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
