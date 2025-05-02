import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-2">
      <div className="mx-auto flex justify-between m-2">
        <img className="size-24 left-0" src={logo} />
        <ul className="flex space-x-6 items-center">
          <li>
            <a
              href="#"
              className="font-[Cursive] text-6xl text-rose-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-[Cursive] text-6xl text-rose-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
