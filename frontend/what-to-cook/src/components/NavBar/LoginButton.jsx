import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="font-[Cursive] font-bold text-2xl text-rose-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
