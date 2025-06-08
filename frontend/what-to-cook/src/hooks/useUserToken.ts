import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export default function useUserToken() {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const t = await getAccessTokenSilently();
        setToken(t);
      } catch (e) {
        console.error("Failed to get token", e);
      }
    })();
  }, [getAccessTokenSilently]);

  return token;
}
