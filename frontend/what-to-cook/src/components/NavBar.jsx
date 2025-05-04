import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 h-fit m-0">
      <div className="mx-auto p-2 flex justify-between">
        <div className="flex flex-row justify-center font-[Cursive] text-5xl items-center text-rose-100">
          <img
            className="size-24 object-cover"
            src={logo}
            alt={"What to cook"}
          />
          <h1>What to cook?</h1>
        </div>
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
