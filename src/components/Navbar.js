import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState ,useRef,useEffect} from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    // Add event listener when the nav is open
    if (nav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);


  return (
    <div className=" z-10 w-100 text-gray-500 flex justify-between items-center  mx-auto h-24 px-4 text-l">
      <h1 className=" text-3xl font-bold primary-color ml-4">
        Mohammad Noorain
      </h1>

      <ul className="hidden md:flex">
        <li className="p-5"><a href="#home">Home</a></li>
        <li className="p-5"><a href="#about">About</a></li>
        <li className="p-5"><a href="#work">Work</a></li>
        <li className="p-5"><a href="#experience">Experience</a></li>
        <li className="p-5"><a href="#contact">Contact</a></li>
      </ul>

      <div onClick={handleNav} className="fixed top-4 right-4 block md:hidden sm:block">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
       ref={menuRef}

        className={
          nav
            ? " z-10 text-grey-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" text-3xl font-bold primary-color ml-4">
          Mohammad Noorain
        </h1>
        <ul className="p-8 text-2xl text-white">
        <li className="p-2"><a href="#home">Home</a></li>
        <li className="p-2"><a href="#about">About</a></li>
        <li className="p-2"><a href="#work">Work</a></li>
        <li className="p-2"><a href="#experience">Experience</a></li>
        <li className="p-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
