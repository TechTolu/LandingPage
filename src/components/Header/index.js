import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import {Bars3Icon} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-between items-center px-4 py-2">
        <img src={icon} alt="log" />
        <div className="inline sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        {/*<div className="justify-between items-center hidden md:flex">*/}
        {/*  <ul className="flex justify-between items-center gap-4 text-[#0432B7]">*/}
        {/*    <li>*/}
        {/*      <Link to="/">Home</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link to="/about">About</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link to="/services">Services</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link to="/contact">Contact Us</Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*  <button className="ring ring-[#304FFE] rounded-md p-5 pb-2 pt-2 ml-4 text-[#304FFE]">Get Started</button>*/}
        {/*</div>*/}
      </nav>
    </header>
  );
};

export default Header;
