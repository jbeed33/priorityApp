import React from "react";
import LoginForm from "../components/loginForm";
import { useState } from "react";
import RegisterForm from "../components/resgisterForm";
export default function Login() {
  const [displayLogin, setDisplayLogin] = useState(true);
  return (
    <>
      <img
        className="login-image"
        src="https://media.istockphoto.com/id/1241235622/photo/calendar-page-flipping-sheet-close-up-blur-background-business-schedule-planning-appointment.jpg?s=170667a&w=0&k=20&c=94EE-sMJh3JAQxWr5D8HNaUxd67RjGlLNmhzT12L72c="
        alt="calendar image"
      ></img>
      <div id="login-container">
        <div id="login-message">
          <h1>
            Transform your life, one <span>priority</span> at a time
          </h1>
        </div>

        <div id="form-container">
          {displayLogin ? (
            <LoginForm displayLogin={setDisplayLogin}></LoginForm>
          ) : (
            <RegisterForm displayLogin={setDisplayLogin}></RegisterForm>
          )}
        </div>
      </div>
    </>
  );
}
