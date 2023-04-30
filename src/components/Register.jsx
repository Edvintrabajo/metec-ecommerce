import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { signUp, setCurUserData } from "../controllers/register-login/functions";
import { auth } from "../config/firebase";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

function Register() {
  const { userData, setUserData } = useContext(Context);
  const btns = ['register-button', 'register-google-button']
  // console.log(auth?.currentUser?.email);
  
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Card color="transparent" shadow={false} className="text-center border-2 p-4 bg-white">
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
            setCurUserData(userData, setUserData, 'register');
            signUp(userData, setUserData, btns);
            // console.log(auth?.currentUser?.email);
          }}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              id="register-email"
              size="lg"
              label="Email"
              type="email"
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="register-password"
              type="password"
              size="lg"
              label="Password"
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <Button
              id="register-button" 
              className="mt-6 mb-4 p-4" 
              type="submit">
              Register
            </Button>
            <Button
              id="register-google-button"
              variant="outlined"
              color="blue-gray"
              className="flex  justify-center items-center gap-3"
              type="button"
            >
              <img src={"./src/icons/google.svg"} alt="metamask" className="h-6 w-6" />
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
        className="absolute top-0 left-0 w-full h-full bg-b-rgba-4 text-white items-center justify-center hidden"></div>
      </div>
  );
}

export default Register;
