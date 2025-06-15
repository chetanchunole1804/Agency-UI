"use client"; // Ensures this runs only on the client-side

import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AllPages from "./pages/AllPages";

const Page = () => {
  const [user, setUser] = useState<string | null>(null);
  const [showSignUp, setShowSignUp] = useState(false); // State to toggle between SignIn and SignUp

  const isSignUp = ()=>{
    setShowSignUp(!showSignUp)
  }
  const isSignIn = ()=>{
    setShowSignUp(!showSignUp)
  }

  useEffect(() => {
    setUser(localStorage.getItem("user")); // Fetch user only on the client side
  }, []);

  return (
    <div>
        <AllPages />
    </div>
  );
};

export default Page;
