import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Navbar = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const handleHanburgerClick = () => {
    setDisplayMobileMenu(!displayMobileMenu);
  };

  const handleMobileMenuSelect = () => {
    setDisplayMobileMenu(false);
  };

  return (
    <div className="w-full h-[80px] flex justify-end items-center px-4 text-gray-50">
      <ul className="hidden md:flex">
        <li>Resume</li>
        <li>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>

      <div
        className="md:hidden z-10 cursor-pointer"
        onClick={handleHanburgerClick}
      >
        {displayMobileMenu ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          displayMobileMenu
            ? "md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl" onClick={() => handleMobileMenuSelect()}>
          Resume
        </li>
        <li className="py-6 text-4xl" onClick={() => handleMobileMenuSelect()}>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        <li className="py-6 text-4xl" onClick={() => handleMobileMenuSelect()}>
          <AnchorLink href="#projects">Projects</AnchorLink>
        </li>
        <li className="py-6 text-4xl" onClick={() => handleMobileMenuSelect()}>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
        {/* <li className="py-6 text-4xl" onClick={() => handleMobileMenuSelect()}>
          Home
        </li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li> */}
      </ul>
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
