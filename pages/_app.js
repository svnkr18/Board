import "@/styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import SignIn from "./signIn";

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>loading</p>;
  if (!user) return <SignIn />;
  return <Component {...pageProps} />;
}
