import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { signIn, setCurUserData } from "../controllers/register-login/functions";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import CustomParticles from "../components/CustomParticles";
import LogComponent from "./LogComponent";
import { signInWithGoogle } from "../controllers/register-login/functions";
import { auth } from "../config/firebase";

function Login() {
  const { userData, setUserData } = useContext(Context);
  const btns = ["login-button", "login-google-button"];
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        window.location.href = "/";
      }
    });
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center animate-slow-opacity-on">
      <CustomParticles size={0} />
      <LogComponent url={"img/robot.png"} />
      <Card
        color="transparent"
        shadow={false}
        className="z-20 border-2 bg-white p-4 text-center"
      >
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form
          id="login-form"
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
            setCurUserData(userData, setUserData, "login");
            signIn(userData, setUserData, btns);
          }}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              id="login-email"
              size="lg"
              label="Email"
              type="email"
              required
            />
            <Input
              id="login-password"
              type="password"
              size="lg"
              label="Password"
              required
            />
          </div>

          <div className="flex flex-col">
            <Button id="login-button" className="mt-6 mb-4 p-4" type="submit">
              Login
            </Button>
            <Button
              id="login-google-button"
              variant="outlined"
              color="blue-gray"
              className="flex  items-center justify-center gap-3"
              onClick={signInWithGoogle}
            >
              <img
                src={"icons/google.svg"}
                alt="metamask"
                className="h-6 w-6"
              />
              Continue with Google
            </Button>
          </div>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>

      <div
        id="message-container"
        className="absolute top-0 left-0 z-50 hidden h-full w-full items-center justify-center bg-b-rgba-4 text-white"
      ></div>
    </div>
  );
}

export default Login;
