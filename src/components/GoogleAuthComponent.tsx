// src/components/GoogleAuthComponent.tsx
import React from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import styled from "styled-components";
import backgroundImage from "../assets/google.jpg"; // 背景画像のパスを指定

interface GoogleAuthComponentProps {
  onSignIn: (user: User) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 32px;
  color: white;
  font-weight: bold;
  margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 300px;
`;

interface ButtonProps {
    primary?: boolean;
  }
  
  const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "#ffffff" : "transparent")};
  color: ${(props) => (props.primary ? "#db4437" : "#ffffff")};
  border: ${(props) => (props.primary ? "none" : "2px solid #ffffff")};
  padding: 15px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#f8f8f8" : "rgba(255, 255, 255, 0.1)")};
  }
`;

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
    <Container>
      <Logo>heartlink</Logo>
      <ButtonContainer>
        {user ? (
          <Button primary onClick={logOut}>
            Log Out
          </Button>
        ) : (
          <>
            <Button onClick={() => console.log('Sign Up clicked')}>SIGN UP</Button>
            <Button primary onClick={signInWithGoogle}>LOGIN</Button>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default GoogleAuthComponent;
