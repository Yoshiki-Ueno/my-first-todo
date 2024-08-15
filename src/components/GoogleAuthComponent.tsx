// src/components/GoogleAuthComponent.tsx
import React from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";

interface GoogleAuthComponentProps {
  onSignIn: (user: User) => void;
}

const GoogleAuthComponent: React.FC<GoogleAuthComponentProps> = ({ onSignIn }) => {
  const [user, setUser] = React.useState<User | null>(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      onSignIn(result.user); // サインイン後のユーザー情報を親コンポーネントに渡す
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div>
      <h1>Google Auth</h1>
      {user ? (
        <div>
          <p>Signed in as {user.displayName}</p>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
};

export default GoogleAuthComponent;
