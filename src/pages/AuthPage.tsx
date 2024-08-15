// src/pages/AuthPage.tsx
import React from "react";
import GoogleAuthComponent from "../components/GoogleAuthComponent";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";

export default function AuthPage() {
  const navigate = useNavigate();

  const handleSignIn = (user: User) => {
    // サインイン成功後、カレンダー画面に遷移
    if (user) {
      navigate("/calendar");
    }
  };

  return <GoogleAuthComponent onSignIn={handleSignIn} />;
}
