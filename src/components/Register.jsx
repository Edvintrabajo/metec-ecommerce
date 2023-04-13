import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { signUp } from "../controllers/register/register.functions";
import { auth } from "../config/firebase";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

function Register() {
  const { email, setEmail, password, setPassword } = useContext(Context);
  const register = () => signUp(email, password);
  console.log(auth?.currentUser?.email);

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Card color="transparent" shadow={false} className="text-center border-2 p-4">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
            register();
          }}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <Button className="mt-6 mb-4 p-4" fullWidth type="submit">
              Register
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              className="flex  justify-center items-center gap-3"
            >
              <img src={"./src/icons/google.svg"} alt="metamask" className="h-6 w-6" />
              Continue with Google
            </Button>
          </div>


          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="/"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>

      <div id="register-message-container"></div>

    </div>
  );
}

export default Register;
