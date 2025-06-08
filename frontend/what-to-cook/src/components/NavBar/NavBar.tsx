import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import LoginButton from "./LoginButton.jsx";
import LogoutButton from "./LogoutButton.jsx";
import SignInButton from "./SingInButton.jsx";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-400 h-fit m-0">
      <div className="mx-auto p-2 flex justify-between">
        <div className="flex flex-row justify-center font-[Cursive] text-5xl items-center text-rose-100">
          <img
            className="size-24 object-cover"
            src={logo}
            alt={"What to cook"}
          />

          <h1>What to cook? </h1>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="menu_button">
              Home
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/recipes" className="menu_button">
                Your Recipes
              </Link>
            </li>
          )}
          <li>
            <Link to="/about" className="menu_button">
              About
            </Link>
          </li>
          <li>
            <a onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 text-rose-200 bg-gray-600 hover:text-white rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </a>
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border border-rose-200 rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-700 hover:text-white block rounded-md cursor-pointer">
                  {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </li>
                {!isAuthenticated && (
                  <li className="px-4 py-2 hover:bg-gray-700 hover:text-white block rounded-md cursor-pointer">
                    <SignInButton />
                  </li>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
