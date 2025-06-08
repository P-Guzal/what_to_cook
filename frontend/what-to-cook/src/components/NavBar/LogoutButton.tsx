import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const redirectUri = import.meta.env.VITE_AUTH_REDIRECT_URI;
  const { logout } = useAuth0();

  return (
    <button
      className="font-[Cursive] font-bold text-2xl text-rose-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md"
      onClick={() => logout({ logoutParams: { returnTo: redirectUri } })}
    >
      Log Out
    </button>
  );
}
