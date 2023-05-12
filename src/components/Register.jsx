import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { signUp, setCurUserData } from "../controllers/register-login/functions";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import CustomParticles from "../components/CustomParticles";
import LogComponent from "./LogComponent";
import { signInWithGoogle } from "../controllers/register-login/functions";

function Register() {
  const { userData, setUserData } = useContext(Context);
  const btns = ["register-button", "register-google-button"];

  return (
    <div className="relative flex h-screen w-full items-center justify-center animate-slow-opacity-on">
      <CustomParticles size={0} />
      <LogComponent url={"img/cohete.png"} />
      <Card
        color="transparent"
        shadow={false}
        className="z-20 border-2 bg-white p-4 text-center"
      >
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          id="register-form"
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
            setCurUserData(userData, setUserData, "register");
            signUp(userData, setUserData, btns);
          }}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              id="register-email"
              size="lg"
              label="Email"
              type="email"
              required
            />
            <Input
              id="register-password"
              type="password"
              size="lg"
              label="Password"
              required
            />
          </div>

          <div className="flex flex-col">
            <Button
              id="register-button"
              className="mt-6 mb-4 p-4"
              type="submit"
            >
              Register
            </Button>
            <Button
              id="register-google-button"
              variant="outlined"
              color="blue-gray"
              className="flex  items-center justify-center gap-3"
              type="button"
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
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
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

export default Register;
