import React from "react";
import LoginForm from "../components/loginForm";
import { useState } from "react";
import RegisterForm from "../components/resgisterForm";
export default function Login() {
  const [displayLogin, setDisplayLogin] = useState(true);
  return (
    <>
      {displayLogin ? (
        <LoginForm displayLogin={setDisplayLogin}></LoginForm>
      ) : (
        <RegisterForm displayLogin={setDisplayLogin}></RegisterForm>
      )}
    </>
  );
}
